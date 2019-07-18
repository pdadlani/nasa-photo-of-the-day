import React from "react";

export default function NasaCard({ title, date, nasaPicDate, url, type }) {
  console.log('date in NasaCard date', date.dateQuery);
  console.log('date in nasaCard nasaPicDate', nasaPicDate);
  // let actDate = date.dateQuery;

  return (
    <div className='cardImg'>
      <h4 className='nasaCardTitle'>{title}</h4>
      {/* <img src={url} style={{ maxWidth: "150px" }} /> */}
      {type === "image" ? (
        <img src={url} alt = "Space" style={{ maxWidth: "150px" }} /> 
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
      <div className='nasaCardDate'>
        {nasaPicDate === date ? (
          {nasaPicDate}
        ) : (
          `This image was taken on ${nasaPicDate}`
        )
        }
      </div>
    </div>
    
  );
}