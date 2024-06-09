import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component'
import './fonts/fonts.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = loadable(() => import('./pages/HomePage'))
const AristsPage = loadable(() => import('./pages/ArtistsPage'))
const AboutUsPage = loadable(() => import('./pages/AboutUsPage'))
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/YOL' element={<AristsPage/> } />
          <Route path='/about-us' element={<AboutUsPage/> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;