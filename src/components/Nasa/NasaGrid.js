import React, { useState, useEffect } from "react";
import axios from 'axios';
import NasaCard from './NasaCard.js';
import BodyText from '../Display/BodyText.js';

export default function NasaGrid() {
  const [nasaPic, setNasaPic] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14')
      .then(response => {
        const nasaInfo = response.data
        setNasaPic(nasaInfo)
        console.log('nasaInfo', nasaInfo)

      });
  }, []);

  console.log('nasaPic:', nasaPic)

  return (
    <div className="nasa-grid">
      <NasaCard title={nasaPic.title} date={nasaPic.date} url={nasaPic.url} />
      <BodyText text={nasaPic.explanation}/>
    </div>
  );
}
