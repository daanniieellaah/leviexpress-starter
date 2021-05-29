import React, {useState} from 'react';
import './style.css';
import SeatRow from '../SeatRow';

const SeatPicker = ({seats, journey}) => {

const handleSeatSelect = (number) => { setSelectedSeatNumber (number);
};

const [selectedSeatNumber, setSelectedSeatNumber] = useState(null);

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
      <button className="btn" type="button">Rezervovat</button>
    </div>
  );
};

export default SeatPicker;