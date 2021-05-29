import React from 'react';
import Seat from '../Seat';

const SeatRow = ({row, onSeatSelected, selectedSeatNumber}) => {
  return (
    <div className="seat-row">
      {
        row.map(item => 
          <Seat key={item.number} 
            number={item.number} 
            isOccupied={item.isOccupied}
            onSelect={onSeatSelected}
            isSelected={item.number === selectedSeatNumber} />)
      }
    </div>
  );
};

export default SeatRow;