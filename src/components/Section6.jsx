import React from 'react';
import Button from './Button';

const Section6 = () => {
  return (
    <div className="max-w-[1600px] mx-auto  bg-gray-950  ">
      <div className="flex flex-col justify-center ml-40 py-10 max-md:ml-10">
        <div className="">
          <h1 className="text-white font-bold text-5xl">
            seguros<span className="text-yellow-500">.</span>
          </h1>
        </div>
        <div className="flex space-x-20  mt-20 max-lg:flex-col-reverse max-lg:space-x-0">
          <div className="w-[560px] h-[400px]  bg-black shadow-2xl rounded-2xl 
          max-sm:w-[350px]">
            <div className=" flex justify-between px-12 max-sm:px-10 ">
              <h1 className=" text-2xl text-gray-600 font-semibold p-4">
                PRATA
              </h1>
              <h2 className="text-white text-xl font-semibold p-4">R$ 199</h2>
            </div>
            <div className="px-16 py-4">
              <ul>
                <div className="flex  space-x-2 mb-2">
                  <span className="text-yellow-500">
                    <i class="fa-solid fa-check"></i>
                  </span>{" "}
                  <li className="text-white  text-sm">Duas trocas por ano</li>
                </div>
                <div className="flex space-x-2 mb-2">
                  <span className="text-yellow-500">
                    <i class="fa-solid fa-check"></i>
                  </span>{" "}
                  <li className="text-white  text-sm">Duas trocas por ano</li>
                </div>
                <div className="flex space-x-2 mb-2">
                  <span className="text-yellow-500">
                    <i class="fa-solid fa-check"></i>
                  </span>{" "}
                  <li className="text-white text-sm">Duas trocas por ano</li>
                </div>
                <div className="flex space-x-2 mb-2```````  ```1`">
                  <span className="text-yellow-500">
                    <i class="fa-solid fa-check"></i>
                  </span>{" "}
                  <li className="text-white text-sm">Duas trocas por ano</li>
                </div>
              </ul>
            </div>
          </div>
          <div className="w-[560px] h-[485px] bg-black 
          shadow-2xl rounded-2xl  max-sm:w-[350px] relative -top-20">
            <div className=" flex justify-between px-12 ">
              <h1 className=" text-2xl text-yellow-500 font-semibold p-4">
                OURO
              </h1>
              <h2 className="text-white text-xl font-semibold p-4">R$ 199</h2>
            </div>
            <div className="px-16 py-4">
              <ul>
                <div className="flex  space-x-2 mb-2">
                  <span className="text-yellow-500">
                    <i class="fa-solid fa-check"></i>
                  </span>{" "}
                  <li className="text-white  text-sm">Duas trocas por ano</li>
                </div>
                <div className="flex space-x-2 mb-2">
                  <span className="text-yellow-500">
                    <i class="fa-solid fa-check"></i>
                  </span>{" "}
                  <li className="text-white  text-sm">Duas trocas por ano</li>
                </div>
                <div className="flex space-x-2 mb-2">
                  <span className="text-yellow-500">
                    <i class="fa-solid fa-check"></i>
                  </span>{" "}
                  <li className="text-white text-sm">Duas trocas por ano</li>
                </div>
                <div className="flex space-x-2 mb-2">
                  <span className="text-yellow-500">
                    <i class="fa-solid fa-check"></i>
                  </span>{" "}
                  <li className="text-white text-sm">Duas trocas por ano</li>
                </div>
                <div className="flex space-x-2 mb-2">
                  <span className="text-yellow-500">
                    <i class="fa-solid fa-check"></i>
                  </span>{" "}
                  <li className="text-white text-sm">Duas trocas por ano</li>
                </div>
                <div className="flex space-x-2 mb-2">
                  <span className="text-yellow-500">
                    <i class="fa-solid fa-check"></i>
                  </span>{" "}
                  <li className="text-white text-sm">Duas trocas por ano</li>
                </div>
                <div className="flex space-x-2 mb-2">
                  <span className="text-yellow-500">
                    <i class="fa-solid fa-check"></i>
                  </span>{" "}
                  <li className="text-white text-sm">Duas trocas por ano</li>
                </div>
              </ul>
              <div className='mt-10'>

              <Button text="INSCREVA-SE" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section6;
