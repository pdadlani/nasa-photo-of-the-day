import React, { useState, useEffect } from "react";
import DatePicker from 'react-date-picker';
import axios from 'axios';
import NasaCard from './NasaCard.js';
import BodyText from '../Display/BodyText.js';

export default function NasaGrid() {
  const [nasaPic, setNasaPic] = useState([]);
  const [date, setDate] = useState(new Date());
  let dateQuery = '';
  const year = date.getFullYear().toString(),
    month = date.getMonth().toString(),
    day = date.getDay().toString();
  dateQuery = `${year}-${month}-${day}`;

  const onChange = (date) => {
    setDate(date);
  }

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=sU0uSLBmVfJpkNHTa4hARZ80DBVSk1xHdUhFCADz&date=${dateQuery}`)
      .then(response => {
        setNasaPic(response.data)
        // console.log('nasaInfo', nasaInfo)

      });
  }, [date]);

  console.log('nasaPic:', nasaPic)

  return (
    <div className="nasa-grid">
      <DatePicker onChange={onChange} value={date}/>
      <NasaCard title={nasaPic.title} date={nasaPic.date} url={nasaPic.url} type={nasaPic.media_type} />
      
      <BodyText text={nasaPic.explanation}/>
      {/* <DateSelection /> */}
      
    </div>
  );
}
