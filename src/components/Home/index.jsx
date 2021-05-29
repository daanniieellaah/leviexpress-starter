import React, {useState} from 'react';
import { JourneyPicker } from '../JourneyPicker';
import JourneyDetail from '../JourneyDetail';

export const Home = () => {
  
  const [journey, setJourney] = useState(null);
  
  return (
  <main>
    <JourneyPicker  onJourneyChange = {setJourney}/>
    {
      journey !== null ? <JourneyDetail journey={journey} /> : <div></div>
    }
  </main>
  );
};
