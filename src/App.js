import React from "react";
import { Routes, Route } from 'react-router-dom'
import './style.css';

const tg = window.Telegram.WebApp;

function App() {
   


  return (
    <button onClick={() => tg.exitFullscreen()}>Click to close</button>
  )
}

export default App;
