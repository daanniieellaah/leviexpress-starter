import React from 'react';
import './style.css';
import Seat from '../Seat';

const SeatPicker = () => {

  return (
    <div className="seat-picker container">
      <h2>Vyberte sedadlo</h2>
      <div className="seats">
        <Seat number="1" />
        <Seat number="12" />
        <Seat number="29" />
      </div>
      <button className="btn" type="button">Rezervovat</button>
    </div>
  );
};

export default SeatPicker;