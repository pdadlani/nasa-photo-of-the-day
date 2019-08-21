import React from "react";
import styled from 'styled-components'

const CardImg = styled.div`
  color: #0078bd;
  // text-align: center;
  // max-width: 900px;
`;

const NasaCardDate = styled.div`
  padding: 20px;
`;

export default function NasaCard(props) {

  if (!props.data) {
    return (
      <h1> Loading ... </h1>
    )
  }

  return (
    <CardImg>
      <h4 className='nasaCardTitle'>{props.data.title}</h4>
      {props.data.media_type === "image" ? (
        <img src={props.data.url} alt = "Space" style={{width: "100%"}} /> 
      ) : (
        <iframe
          title="video"
          src={props.data.url}
          width="560"
          height="315"
          allowFullScreen
          align="middle"
        ></iframe>
      )
      }
      <NasaCardDate>
        {
          `Date: ${props.data.date}`
        }
      </NasaCardDate>
    </CardImg>
  );
}