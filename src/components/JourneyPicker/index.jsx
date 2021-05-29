import React, { useEffect, useState } from 'react';
import mapImage from './img/map.svg';
import './style.css';


const CityOptions = ({cities}) => {

  return (
    <>
    <option value = "">Vyberte</option>
    
    {
    cities.map (item => <option key = {item.code} value = {item.code}> {item.name} </option>)
    }
    </>
  );
};

const DateOptions = ({dates}) => {
  return (
    <>
    <option value="">Vyberte</option>
      {
        dates.map(item => <option key={item.dateBasic} value={item.dateBasic}>{item.dateExtended}</option>)
      }
    </>
  );
};


export const JourneyPicker = ({ onJourneyChange }) => {
  const handleSubmit = (event) => {
    event.preventDefault ();
    
    fetch(`https://leviexpress-backend.herokuapp.com/api/journey?fromCity=${fromCity}&toCity=${toCity}&date=${date}`)
    .then(result => result.json())
    .then(json => onJourneyChange(json.data));
};

  const [fromCity, setFromCity] = useState ('');
  const [toCity, setToCity] = useState ('');
  const [date, setDate] = useState ('');

  const handleFromCityChange = ({target}) => {
  setFromCity (target.value);
};

const handleToCityChange = ({target}) => {
  setToCity (target.value);
};

const handleDateChange = ({target}) => {
  setDate (target.value);
};

const  [cities, setCities] = useState ([]);

const [dates, setDates] = useState([]);

useEffect (() => {
  fetch ('https://leviexpress-backend.herokuapp.com/api/cities')
  .then(result => result.json())
  .then(json => setCities(json.data));
}, []);

useEffect(() => {
  fetch('https://leviexpress-backend.herokuapp.com/api/dates')
    .then(result => result.json())
    .then(json => setDates(json.data));
}, []);

return (
  <div className="journey-picker container">
    <h2 className="journey-picker__head">Kam chcete jet?</h2>
    <div className="journey-picker__body">
      <form onSubmit = {handleSubmit} className="journey-picker__form">
        <label>
          <div className="journey-picker__label">Odkud:</div>
          <select value = {fromCity} onChange = {handleFromCityChange}>
            <CityOptions cities = {cities}/>
          </select>
        </label>
        <label>
          <div className="journey-picker__label">Kam:</div>
          <select value = {toCity} onChange = {handleToCityChange}>
          <CityOptions cities={cities}/> 
          </select>
        </label>
        <label>
          <div className="journey-picker__label">Datum:</div>
          <select value = {date} onChange = {handleDateChange}>
            <DateOptions dates = {dates} />
          </select>
        </label>
        <div className="journey-picker__controls">
          <button 
            className="btn" 
            type="submit"
            disabled={fromCity !=='' && toCity !=='' && date !=='' ? false : true}
          > 
            Vyhledat spoj
          </button>
        </div>
      </form>
      <img className="journey-picker__map" src={mapImage} />
    </div>
  </div>
);
};