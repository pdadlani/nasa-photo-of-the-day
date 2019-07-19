import React from "react";
import styled from 'styled-components'

const BodyTextStyle = styled.div`
  text-align: left;
  line-height: 1.5;
  background-color: blue;
  color: white;
  padding: 20px;
  border-radius: 5px;
`;

export default function BodyText({ text }) {
  return (
    <BodyTextStyle>
      <p className='bodyTextExplanation'>{text} </p>
    </BodyTextStyle>
  );
}