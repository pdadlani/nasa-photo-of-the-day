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
  // const [date, setDate] = useState(new Date());
  // const [dateQuery, setDateQuery] = useState(new Date());
  // // let dateQuery = '';
  // // console.log('date from useState', date);
  // let year = date.getFullYear(),
  //   // month = (date.getMonth() + 1).toString();
  //   month = (
  //     (date.getMonth().toString.length === 1) ?
  //       (0 + (date.getMonth() + 1).toString()) :
  //       (date.getMonth() + 1).toString()
  //   ),
  //   // month = date.getMonth();
  //   day = (
  //     (date.getDay().toString.length === 1) ?
  //       (0 + date.getDay().toString()) :
  //       date.getDay().toString()
  //   );

  const [date, setDate] = useState(new Date());

  function convertDate(date = new Date()) {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    return `${year}-${month}-${day}`;
  }


  let newYear = date.getFullYear(),
      newMonth = (
        (date.getMonth().toString().length === 1) ?
          (0 + (date.getMonth() + 1).toString()) :
          (date.getMonth() + 1).toString()
      ),
      newDay = (
        (date.getDay().toString().length === 1) ?
          (0 + date.getDay().toString()) :
          date.getDay().toString()
      );

  console.log('year', newYear, 'month', newMonth, 'day', newDay);

  useEffect(() => {


    const newDate = convertDate(date);
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=sU0uSLBmVfJpkNHTa4hARZ80DBVSk1xHdUhFCADz&date=${newDate}`)
      .then(response => {
        setData(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [date]);

  return (
    <NasaGridStyle>
      <DatePicker onChange={setDate} value={date} />
      <NasaCard data={data} date={{date}} />
      <BodyText text={data.explanation}/>
    </NasaGridStyle>
  );
}
