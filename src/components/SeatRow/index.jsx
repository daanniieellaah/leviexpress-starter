import React from 'react';
import Seat from '../Seat';

const SeatRow = ({row}) => {
  return (
    <div className="seat-row">
      {
        row.map(item => 
          <Seat key={item.number} 
            number={item.number} 
            isOccupied={item.isOccupied} />)
      }
    </div>
  );
};

export default SeatRow;