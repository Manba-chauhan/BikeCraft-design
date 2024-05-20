import React from 'react';
import bigimg from '../assets/img/bigimg.png'

const Section3 = () => {
  return (
    <div className="max-w-[1600px]  h-[960px] mx-auto bg-black mt-40 max-lg:h-full">
      <div className="flex justify-center max-lg:flex-col max-lg:justify-center max-lg:items-center ">
        <div className="flex-1 ml-40 mt-20 max-lg:mx-10">
          <div className="mt-10">
            <h3 className="text-zinc-400   tracking-wider font-light text-xl uppercase">
              Tecnologia avançada
            </h3>
            <h1 className="text-5xl text-white font-bold w-8/12 mt-8  mb-4 max-md:w-full max-sm:text-3xl">
              Você escolhe as suas cores e componentes.
            </h1>
            <p className="text-zinc-400 text-lg font-medium w-8/12 mb-4 max-md:w-full">
              Cada Bikcraft é única e possui a sua identidade. As medidas serão
              exatas para o seu corpo e altura, garantindo maior conforto e
              ergonomia na sua pedalada. Você pode também personalizar
              completamente as suas cores.
            </p>
            <a
              href="#"
              className="text-yellow-500 underline uppercase font-semibold tracking-wider text-md"
            >
              ESCOLHA UM MODELO
            </a>
          </div>
          <div className="flex text-white mt-32 max-sm:flex-col">
            <div className="">
              <span className="text-yellow-500">
                <i class="fa-solid fa-bicycle"></i>
              </span>
              <h2 className="font-bold text-xl mb-3">Motor Elétrico</h2>
              <p className="text-sm font-medium text-gray-300 w-9/12 max-sm:w-full">
                Toda Bikcraft é equipada com um motor elétrico que possui
                duração de até 120h. A bateria é recarregada com a sua energia
                gasta ao pedalar.
              </p>
            </div>
            <div className="">
              <span className="text-yellow-500  ">
                <i class="fa-solid fa-location-crosshairs"></i>
              </span>
              <h2 className="font-bold text-xl mb-3 -mt-1">Rastreador</h2>
              <p className="text-sm font-medium text-gray-300 w-9/12 max-sm:w-full">
                Sabemos o quão preciosa é a sua Bikcraft, por isso adicionamos
                rastreadores e sistemas anti-furto para garantir o seu sossego.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1  max-lg:mt-40 ">
          <img
            src={bigimg}
            alt=""
            className=" relative -top-20 w-[460px] h-[1120px]  max-lg:h-[460px]
          object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Section3;
