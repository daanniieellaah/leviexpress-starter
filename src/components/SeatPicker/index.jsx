import React from 'react';
import './style.css';
import SeatRow from '../SeatRow';

const SeatPicker = ({seats, journey}) => {

const testRow = [
  { "number": 33,
  "isOccupied": false
},
{
  "number": 29,
  "isOccupied": true
},
{
  "number": 25,
  "isOccupied": false
},
];

  return (
    <div className="seat-picker container">
      <h2>Vyberte sedadlo</h2>
      <div className="seats">
      {
          seats.map((item, i) => <SeatRow key={i} row={item} />)
        }

      </div>
      <button className="btn" type="button">Rezervovat</button>
    </div>
  );
};

export default SeatPicker;