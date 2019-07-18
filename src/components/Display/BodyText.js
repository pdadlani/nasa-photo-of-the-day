import React from "react";
import styled from 'styled-components'

const BodyTextStyle = styled.div`
  text-align: left;
  line-height: 1.5;
`;

export default function BodyText({ text }) {
  return (
    <BodyTextStyle>
      <p className='bodyTextExplanation'>{text} </p>
    </BodyTextStyle>
  );
}