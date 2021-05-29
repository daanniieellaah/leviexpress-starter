import React from 'react';
import './style.css';
import BusStop from '../BusStop';

const JourneyDetail = ({journey}) => {
  

  return (
    <div className="journey-detail container">
      <h2>Podrobnosti cesty</h2>
      <div className="stops">
        {
          journey.stops.map(item => 
            <BusStop 
              key={item.code}
              name={item.name}
              station={item.station}
              time={item.time} />)
        }

      </div>
    </div>
  );
};

export default JourneyDetail; 