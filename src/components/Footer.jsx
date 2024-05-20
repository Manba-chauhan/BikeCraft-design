import React from 'react';

const Footer = () => {
  return (
    <div className="max-w-[1600px]  mx-auto bg-black py-10 ">
      <div className="flex justify-evenly space-x-5 max-md:flex-col max-md:justify-center 
      max-md:items-center max-md:space-x-0 max-md:space-y-10">
        <div className="">
          <h1 className="text-xl font-bold text-white max-md:-ml-24">BikeCraft</h1>
        </div>
        <div className="">
          <h1 className="text-xl font-bold text-white">Contato</h1>
          <div className=" mt-6 py-2">
            <p className="text-gray-300 font-light text-sm">
              +55 22 99999-9999
            </p>
            <p className="text-gray-300 font-light text-sm">
              contato@bikcraft.com
            </p>
            <br></br>
            <p className="text-gray-300 font-light text-sm">Rua Ali Perto,</p>
            <p className="text-gray-300 font-light text-sm">
              42 -Botafogo Rio de Janeiro - RJ
            </p>
            <ul className="flex space-x-6 mt-6">
              <li className="text-2xl text-white">
                <i class="fa-brands fa-facebook"></i>
              </li>
              <li className="text-2xl text-white">
                <i class="fa-brands fa-twitter"></i>
              </li>
              <li className="text-2xl text-white">
                <i class="fa-brands fa-instagram"></i>
              </li>
            </ul>
          </div>
        </div>
        <div className="">
          <h1 className="text-xl font-bold text-white max-md:-ml-12">INFORMAÇÕES</h1>
          <ul className="mt-6 max-md:-ml-10">
            <li className="text-gray-300 font-extralight
             text-sm mb-2 tracking-wider leading-loose">
              Bicicletas
            </li>
            <li className="text-gray-300 font-extralight text-sm mb-2 tracking-wider leading-loose">
              Seguros
            </li>
            <li className="text-gray-300 font-extralight text-sm mb-2 tracking-wider leading-loose">
              Contato
            </li>
            <li className="text-gray-300 font-extralight text-sm mb-2 tracking-wider leading-loose">
              Termos e Condições
            </li>
          </ul>
        </div>
      </div>
      <div className=" ml-44 mt-10 max-md:ml-16">
        <p className="text-gray-400  tracking-wider leading-relaxed text-sm">Bikcraft © Alguns rireitos reservados.</p>
      </div>
    </div>
  );
}

export default Footer;
