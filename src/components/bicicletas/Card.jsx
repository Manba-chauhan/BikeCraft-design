import React from 'react';
import cycle from '../../assets/img/cycle.png'
import Button from '../Button';

const Card = () => {
  return (
    <div className="max-w-[1160px] mx-auto  mt-60 max-lg:mt-60  max-sm:mt-40 max-md:mt-60 ">
      <div className="flex  space-x-6 max-md:flex-col max-md:space-x-0">
        <div className="flex-1 relative ">
          <img src={cycle} alt=""  className='relative w-full h-full object-cover rounded'/>
          <p className="text-white font-bold text-md relative 
           -top-80 left-[450px] z-50 max-lg:left-10   max-md:hidden">
            R$ 4.999
          </p>
        </div>
        <div className="flex-1 max-md:-ml-2">
          <span className="bg-yellow-500  px-3 rounded-md mt-2"></span>
          <h1 className="text-black font-bold text-4xl line-clamp-6 my-2 max-sm:text-lg">
            Nimbus Stark
          </h1>
          <p className="text-gray-500 font-sm w-9/12 mt-4 mb-6 max-md:w-full max-md:text-[14px]" >
            A Nimbus Stark é a melhor Bikcraft já criada pela nossa equipe. Ela
            vem equipada com os melhores acessórios, o que garante maior
            velocidade.{" "}
          </p>
          <div className="flex space-x-32 space-y-28 max-md:flex-col  max-md:space-y-10 max-md:space-x-0">
            <div className="text-gray-600 font-bold text-md">
              <div className="my-2 flex space-x-3">
                <i class="fa-solid fa-bicycle text-yellow-500"></i>
                <p className="">Motor Elétrico</p>
              </div>
              <div className="my-2 flex space-x-3">
                <i class="fa-solid fa-water text-yellow-500"></i>
                <p>Fibra de Carbono</p>
              </div>
              <div className="my-2 flex space-x-3">
                <i class="fa-solid fa-clock text-yellow-500"></i>
                <p>40km/h</p>
              </div>
              <div className="my-2 flex space-x-3">
                <i class="fa-solid fa-location-crosshairs text-yellow-500"></i>
                <p>Rastreador</p>
              </div>
            </div>
            <div className="">
              <Button text="MAIS SOBRE" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
