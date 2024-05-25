import React from 'react';
import Header from '../components/Header';
import Section1 from '../components/bicicletas/Section1';
import Footer from '../components/Footer';
import Heading from '../components/bicicletas/Heading';

const Bicicletas  = () => {
  return (
    <>
      <div className="main">
        <Header />
        <Heading/>
        <Section1 />
        <Footer/>
  
      </div>
     
       
     
    </>
  );
}

export default Bicicletas ;
