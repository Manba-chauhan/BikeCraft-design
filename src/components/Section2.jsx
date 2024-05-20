import React from 'react';
import CardImage from './CardImage';
import card1 from '../assets/img/card1.png'
import bicycle from '../assets/img/bicycle.png'

const Section2 = () => {
  return (
    <div className="max-w-[1600px] mt-44 flex flex-col  max-md:mt-20">
      <div className=" ml-40 max-md:ml-20">
        <h1 className="text-4xl text-black font-bold">ESCOLHA A SUA.</h1>
      </div>
      <div className="flex  justify-center items-center space-x-10 max-md:flex-col 
      max-md:space-x-0 max-lg:space-x-2">
        <CardImage img={card1} name="MAGIC MiGTH" price="R$ 2499" />
        <CardImage img={bicycle} name="Nimbus Stark" price="R$ 4909" />
        <CardImage img={card1} name="Nebula Cosmic" price="R$ 3999" />
      </div>
    </div>
  );
}

export default Section2;
