import React from "react";
import NasaGrid from './components/Nasa/NasaGrid.js';
import "./App.css";
import styled from 'styled-components'
// import { Palette } from "palette";


const AppDiv = styled.div`
  font-family: georgia;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
`;

// const AppDiv = styled.div`
//   background: ${Palette.secondary.dark};
//   width: 100%;
//   height: ${window.innerHeight}px;
//   color: ${Palette.secondary.light};
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   font-family: georgia;

// `;

const PageHeader = styled.h1`
  text-align: center;
  color: purple;
`;

const PageSubHead = styled.h3`
  text-align: center;
  color: #585b5c;
`;


function App() {

  return (
    <AppDiv>
      <PageHeader>Astronomy Picture of the Day</PageHeader>
      <PageSubHead>
        Brought to you by NASA! Enjoy 🚀!
      </PageSubHead>
      <NasaGrid />
    </AppDiv>
  );
}

export default App;
