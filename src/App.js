import React, { useState, useEffect } from "react";
import axios from 'axios';
import NasaGrid from './components/Nasa/NasaGrid.js';
import "./App.css";

function App() {

  return (
    <div className="App">
      <h1>Astronomy Picture of the Day</h1>
      <h3>
        Brought to you by NASA! Enjoy 🚀!
      </h3>
      <NasaGrid />
    </div>
  );
}

export default App;
