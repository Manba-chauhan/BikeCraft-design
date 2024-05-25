import React from 'react';

import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Bicicletas from './pages/Bicicletas ';
import Header from './components/Header';
import Footer from './components/Footer';
import Seguros from './pages/Seguros';
import Contact from './pages/Contact';

const App = () => {
  return (
    <>
      {/* <Header/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bicicletas" element={<Bicicletas />} />
          <Route path="/seguros" element={<Seguros />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer/> */}
    </>
  );
}

export default App;
