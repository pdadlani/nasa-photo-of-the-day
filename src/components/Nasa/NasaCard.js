import React from "react";
import styled from 'styled-components'

const CardImg = styled.div`
  color: #0078bd;
  // text-align: center;
  // max-width: 900px;
`;

export default function NasaCard(props) {
  // [ title, date, nasaPicDate, url, type , hdUrl] = props;
  console.log('date in NasaCard date', props.date.dateQuery);
  console.log('date in nasaCard nasaPicDate', props.nasaPicDate);
  // let actDate = date.dateQuery;

  return (
    <CardImg>
      <h4 className='nasaCardTitle'>{props.title}</h4>
      {/* <img src={url} style={{ maxWidth: "150px" }} /> */}
      {props.type === "image" ? (
        <img src={props.url} alt = "Space" style={{maxWidth: "1000px"}} /> 
      ) : (
        <iframe
          title="video"
          src={props.url}
          width="560"
          height="315"
          allowFullScreen
          align="middle"
        ></iframe>
      )
      }
      <div className='nasaCardDate'>
        {props.nasaPicDate === props.date ? (
          props.date
        ) : (
          `This image was taken on ${props.nasaPicDate}`
        )
        }
      </div>
    </CardImg>
    
  );
}