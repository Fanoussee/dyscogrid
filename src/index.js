import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './css/index.css';
import Home from './components/Home';
import PlayersNumber from './components/PlayersNumber';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename='/dyscogrid'>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/nombre-joueurs" element={<PlayersNumber />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
