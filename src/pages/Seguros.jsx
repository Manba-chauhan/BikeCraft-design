import React from 'react';
import Heading from '../components/bicicletas/Heading';
import Header from '../components/Header'
import Footer from '../components/Footer';
import Section1 from '../components/Seguros/Section1';
import Section2 from '../components/Seguros/Section2';
import Section3 from '../components/Seguros/Section3';

const Seguros = () => {
  return (
    <div className='main'>
    <Header/>
     <Heading/>
     <Section1/>
     <Section2/>
     <Section3/>
      <Footer/>
    </div>
  );
}

export default Seguros;
