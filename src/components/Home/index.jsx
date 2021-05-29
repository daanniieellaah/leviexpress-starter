import React, {useState} from 'react';
import { JourneyPicker } from '../JourneyPicker';

export const Home = () => {
  
  const [journey, setJourney] = useState(null);
  
  return (
  <main>
    <JourneyPicker  onJourneyChange = {setJourney}/>
    {
      journey !== null ? <div>Nalezeno s pojení s ID {journey.journeyId}</div> : <div></div>
    }
  </main>
  );
};
