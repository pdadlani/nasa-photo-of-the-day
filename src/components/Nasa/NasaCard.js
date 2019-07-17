import React, { useState, useEffect } from "react";

export default function NasaCard({ title, date, url }) {
  return (
    <div className='cardImg'>
      <h4 className='nasaCardTitle'>{title}</h4>
      <img src={url} style={{ maxWidth: "150px" }} />
      <div className='nasaCardDate'>{date}</div>
    </div>
  );
}