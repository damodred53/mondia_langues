import React from 'react';
import ReactDOM from 'react-dom/client';
import LandingPage from './Component/Pages/LandingPage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Formation from './Component/Pages/Formation';
import Contact from './Component/Pages/Contact';
import QuiSommesNous from './Component/Pages/QuiSommesNous';
import TraductionInterpretation from './Component/Pages/TraductionInterpretation';
import Entreprise from './Component/Pages/Entreprise';
import './main.scss';


import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/*' Component={LandingPage}></Route>
        <Route path='/formation' Component={Formation}></Route>
        <Route path='/contact' Component={Contact}></Route>
        <Route path='/presentation' Component={QuiSommesNous}></Route>
        <Route path='/traduction' Component={TraductionInterpretation}></Route>
        <Route path='/entreprise' Component={Entreprise}></Route>

      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
