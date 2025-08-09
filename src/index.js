import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Timer from './components/Timer';
import FavouriteColor from './components/favouriteColor';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    <FavouriteColor />
    <Timer />
  </>
);

reportWebVitals();
