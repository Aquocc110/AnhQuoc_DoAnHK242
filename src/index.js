import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Outlet, Navigate } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IntroductionPage from './pages/Introduction/Introduction';
import MenuPage from './pages/Menu/Menu';
import NewsPage from './pages/News/News'
import Storespage from './pages/Stores/Store'
import ContactPage from './pages/Contact/Contact'
import style from '../src/app.css'
import DrinkDetail from './pages/Menu/MenuDetail';
// import './i18n/i18n';
import NewsDetail from './pages/News/NewsDetail.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Navigate to="introduction" />} />
          <Route path="introduction" element={<IntroductionPage />} />
          <Route path="menu" element={<MenuPage />} />
          <Route path="/menu/:id" element={<DrinkDetail />} />
          <Route path="News" element={<NewsPage />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="Stores" element={<Storespage />} />
          <Route path="Contact" element={<ContactPage />} />
        </Route>
      </Routes>

    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
