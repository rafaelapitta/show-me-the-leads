import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './Landing';
import Agradecimento from './pages/Agradecimento/Agradecimento';

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/thank-you" element={<Agradecimento />} />
    </Routes>
  </BrowserRouter>
)
