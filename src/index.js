// imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from './store/store';
import { Provider } from 'react-redux'


// css
import './index.css';

// pages
import { Home } from './pages/home/home';
import { Campeoes } from './pages/campeoes/campeoes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<Campeoes/>} path='/campeoes'/>
      </Routes>
    </BrowserRouter>
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
