import React, { useState, useEffect } from "react";
import DatePicker from 'react-date-picker';
import axios from 'axios';
import styled from 'styled-components'
import NasaCard from './NasaCard.js';
import BodyText from '../Display/BodyText.js';

const NasaGridStyle = styled.div`
  text-align: center;
`;

export default function NasaGrid() {
  const [data, setData] = useState({});
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
        setData(response.data)
        // console.log('nasaInfo', nasaInfo)

      });
  }, [dateQuery]);

  // console.log('nasaPicDate:', data.date)
  console.log('dateQuery', dateQuery);

  return (
    <NasaGridStyle>
      <DatePicker onChange={onChange} value={date} />
      <NasaCard title={data.title} date={{dateQuery}} nasaPicDate={data.date} url={data.url} hdUrl={data.hdurl} type={data.media_type} />
      
      <BodyText text={data.explanation}/>
      {/* <DateSelection /> */}
      
    </NasaGridStyle>
  );
}
