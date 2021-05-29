import React, {useState} from 'react';
import './style.css';
import SeatRow from '../SeatRow';
import { useHistory } from "react-router-dom";

const SeatPicker = ({seats, journey}) => {

const handleSeatSelect = (number) => { setSelectedSeatNumber (number);
};

const [selectedSeatNumber, setSelectedSeatNumber] = useState(null);

let history = useHistory();

const handleBuy = () => {
  fetch('https://leviexpress-backend.herokuapp.com/api/reserve', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      seat: selectedSeatNumber,
      journeyId: journey,
    })
  })
    .then(result => result.json())
    .then(json => history.push(`/reservation/${json.data.reservationId}`));
}

  return (
    <div className="seat-picker container">
      <h2>Vyberte sedadlo</h2>
      <div className="seats">
      {
          seats.map((item, i) => 
          <SeatRow key={i} row={item} 
            onSeatSelected={handleSeatSelect} 
            selectedSeatNumber={selectedSeatNumber} />)
        }

      </div>
      <button 
        className="btn" 
        type="button" 
        onClick={handleBuy}
        disabled={selectedSeatNumber === null ? true : false}>Rezervovat</button>
    </div>
  );
};

export default SeatPicker;