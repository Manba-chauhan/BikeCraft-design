import React from 'react';
import ranek from '../assets/img/ranek.png'
import caravan from '../assets/img/caravan.png'
import vector from '../assets/img/Vector.png'
import handel from "../assets/img/handel.png";
import surfbot from '../assets/img/surfbot.png'
import flexblog from '../assets/img/flexblog.png'
import wildbeast from '../assets/img/wildbeast.png'
import lescone from '../assets/img/lescone.png'

const Section4 = () => {
  return (
    <div className="max-w-[1600px] mx-auto mt-28">
      <div className="max-w-[1440px]  ">
        <h1 className="text-4xl text-black font-bold text-center">
          Nossos parceiros.
        </h1>
        <div className="  w-1/2  mx-auto mt-10 grid grid-cols-4 content-center
         max-lg:grid-cols-3  max-md:grid-cols-2  max-sm:grid-cols-1 ">
          <div className="w-44  p-5 border-b-2 border-r-2   ">
            <img src={ranek} alt="image1" className=" relative w-full object-cover" />
          </div>
          <div className="w-44  p-5 border-b-2 border-r-2  ">
            <img src={caravan} alt="image1" className="w-full object-cover" />
          </div>
          <div className="w-44  p-5 border-b-2 border-r-2  ">
            <img src={vector} alt="image1" className="w-full object-cover" />
          </div>
          <div className="w-44  p-5 border-b-2  border-spacing-6">
            <img src={handel} alt="image1" />
          </div>

          <div className="w-44 p-5  border-r-2 ">
            <img src={surfbot} alt="image1" />
          </div>
          <div className="w-44 p-5  border-r-2">
            <img src={flexblog} alt="image1" />
          </div>
          <div className="w-44 p-5  border-r-2">
            <img src={wildbeast} alt="image1" />
          </div>
          <div className="w-44 p-5  ">
            <img src={lescone} alt="image1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
