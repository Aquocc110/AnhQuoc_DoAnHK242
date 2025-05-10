import { Routes, Route } from 'react-router-dom';
import React from "react";
import Header from './components/Header/header'
import Footter from './components/Footter/Footter';
import Introduction from '../src/pages/Introduction/Introduction'
import Menu from '../src/pages/Menu/Menu'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footter />

    </>
  );
}

export default App;
