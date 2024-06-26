import React from 'react';
import bicycle from '../assets/img/bicycle.png'
import Button from './Button';

const Section1 = () => {
  return (
    <div className="max-w-[1600px] max-h-[680px] mx-auto bg-black px-10 max-md:max-h-full">
      <div className="flex justify-center items-center max-md:flex-col">
        <div className="flex-1">
          <div className=" px-28  max-md:p-5 ">
            <h1 className="text-5xl font-bold text-white p-2 max-sm:text-3xl max-md:p-0 ">
              bicicletas feitas sob medida.
            </h1>
            <p className="text-gray-400 text-light w-10/12 px-2 py-4 max-md:w-full max-sm:w-full max-md:px-0">
              Bicicletas elétricas de alta precisão e qualidade, feitas sob
              medida para o cliente. Explore o mundo na sua velocidade com a
              Bikcraft.
            </p>
            <Button text="Selecione a sua" />
          </div>
        </div>
        <div className="flex-1">
          <div className="max-w-[640px] max-h-[800px] max-md:max-h-auto ">
            <div className="w-[640px]h-[800px]  object-cover  max-lg:max-w-[640px] max-lg:max-h-[500px]">
              <img src={bicycle} alt="imges" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
