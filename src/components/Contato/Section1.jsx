import React from 'react';
import Section2 from './Section2';
import Button from '../Button'

const section1 = () => {
  return (
    <>
      <div className="max-w-[1600px]">
        <div className="relative ">
          <Section2 />
        </div>
        <div className="relative mb-20">
          <div className=" flex  justify-center max-md:flex-col  ">
            <div className=" bg-black px-10 ">
              <h2 className="text-white text-sm font-bold mb-2">Loja Online</h2>
              <div className="flex space-x-5 mb-5 mt-10">
                <i class="fa-solid fa-location-dot  text-yellow-400"></i>
                <p className="text-white text-sm">
                  Rua Ali Perto, 35 <br></br>Rio de Janeiro - RJ <br></br>{" "}
                  Brasil - Terra - Vila Láctea
                </p>
              </div>
              <div className="flex space-x-5 mb-5">
                <i class="fa-regular fa-message text-yellow-500"></i>
                <p className="text-white text-sm">
                  vendas@bikcraft.com <br></br> assistencia@bikcraft.com{" "}
                </p>
                <p className="text-white text-sm"></p>
              </div>
              <div className="flex space-x-5 mb-5">
                <i class="fa-solid fa-phone text-yellow-500"></i>

                <p className="text-white text-sm">+55 22 99999-9999</p>
              </div>
              <div className="flex justify-center space-x-5 mb-5 mt-20">
                <span>
                  {" "}
                  <i class="fa-brands fa-facebook text-yellow-500 text-3xl"></i>
                </span>
                <span>
                  {" "}
                  <i class="fa-brands fa-twitter text-yellow-500 text-3xl"></i>
                </span>
                <span>
                  {" "}
                  <i class="fa-brands fa-instagram text-yellow-500 text-3xl"></i>
                </span>
              </div>
            </div>
            <div className="bg-white shadow-md relative px-10 ">
              <div className="  flex space-x-10 mt-10 max-md:flex-col max-md:space-x-0">
                <div className="flex flex-col">
                  <label className="font-bold text-md">Name</label>
                  <input
                    type="text"
                    className="px-4 py-2 rounded-sm border border-2 bg-gray-300 "
                    placeholder="Seu nome"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-bold text-md">Phone</label>
                  <input
                    type="text"
                    className="px-4 py-2 rounded-sm border border-2 bg-gray-300 "
                    placeholder="(22) 99999-9999"
                  />
                </div>
              </div>
              <div className="mt-10 flex flex-col">
                <label className="font-bold text-md">Email</label>
                <input
                  type="text"
                  className="px-4 py-2 rounded-sm border border-2 bg-gray-300 "
                  placeholder="abc@gmail.com"
                />
              </div>
              <div className="mt-10 flex flex-col">
                <label className="font-bold text-md">Email</label>
                <textarea
                  type="text"
                  className="px-4 py-2 rounded-sm border border-2 bg-gray-300 "
                  placeholder="abc@gmail.com"
                  rows={5}
                  cols={5}
                ></textarea>
              </div>
              <div className="mt-10  w-1/2 max-md:w-full flex flex-col mb-20">
                <button
                  className="bg-yellow-500 text-black text-md tracking-wide text-nowrap
     px-4 py-2 rounded-xl hover:text-yellow-500 hover:border-yellow-500 hover:border-2 
     hover:bg-black "
                >
                  ENVIAR MENSAGEM
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default section1;
