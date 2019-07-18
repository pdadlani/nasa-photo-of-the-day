import React, { useState, useEffect } from "react";
import DatePicker from 'react-date-picker';
import axios from 'axios';
import NasaCard from './NasaCard.js';
import BodyText from '../Display/BodyText.js';

export default function NasaGrid() {
  const [nasaPic, setNasaPic] = useState([]);
  const [date, setDate] = useState(new Date());
  // let dateQuery = '';
  // console.log('date from useState', date);
  let year = date.getFullYear(),
    // month = (date.getMonth() + 1).toString(),
    month = (
      (date.getMonth().toString.length === 1) ?
        (0 + (date.getMonth() + 1).toString()) :
        (date.getMonth() + 1).toString()
    );
    // month = date.getMonth();
  let dateQuery = '',
    day = (
      (date.getDay().toString.length === 1) ?
        (0 + date.getDay().toString()) :
        date.getDay().toString()
    );
 
  // let dateQuery = '',
  //   day = date.getDay();
  
  dateQuery = `${year}-${month}-${day}`;
  // console.log('dat4e from dateQuery', dateQuery)

  // console.log('day', (day));

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
  }, [dateQuery]);

  // console.log('nasaPicDate:', nasaPic.date)
  console.log('dateQuery', dateQuery);

  return (
    <div className="nasa-grid">
      <DatePicker onChange={onChange} value={date}/>
      <NasaCard title={nasaPic.title} date={{dateQuery}} nasaPicDate={nasaPic.date} url={nasaPic.url} type={nasaPic.media_type} />
      
      <BodyText text={nasaPic.explanation}/>
      {/* <DateSelection /> */}
      
    </div>
  );
}
