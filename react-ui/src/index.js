import React from 'react';
import ReactDOM from 'react-dom';
import {Routes, BrowserRouter, Route} from 'react-router-dom';
import Header from './layout/header';
import Home from './home/home';
import ChallengeOne from './challenge-one/challenge-one';
import ChallengeTwo from './challenge-two/challenge-two';
import './App.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/challenge-one" element={<ChallengeOne />} />
        <Route path="/challenge-two" element={<ChallengeTwo />} />
      </Routes>
    </Header>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
