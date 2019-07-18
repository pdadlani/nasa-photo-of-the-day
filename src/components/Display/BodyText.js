import React from "react";

export default function BodyText({ text }) {
  return (
    <div className='bodyText'>
      <p className='bodyTextExplanation'>{text} </p>
    </div>
  );
}