import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AristsPage from './pages/ArtistsPage'
import './fonts/fonts.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/> }/>
          <Route path='/YOL' element={<AristsPage/> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;