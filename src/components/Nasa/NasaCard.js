import React, { useState, useEffect } from "react";

export default function NasaCard({ title, date, url, type }) {
  return (
    <div className='cardImg'>
      <h4 className='nasaCardTitle'>{title}</h4>
      {/* <img src={url} style={{ maxWidth: "150px" }} /> */}
      {type === "image" ? (
        <img src={url} style={{ maxWidth: "150px" }} /> 
      ) : (
        <iframe
          title="video"
          src={url}
          width="560"
          height="315"
          allowFullScreen
          align="middle"
        ></iframe>
      )
      }
      <div className='nasaCardDate'>{date}</div>
    </div>
    
  );
}