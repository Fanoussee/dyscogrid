import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './css/index.css';
import Home from './pages/Home';
import PlayersNumber from './pages/PlayersNumber';

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
