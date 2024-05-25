import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="max-w-[1600px] max-h-[96px] py-4 px-20 bg-black max-lg:p-4  ">
      <div className="flex justify-between items-center">
        <div className="">
          <h1 className="text-white font-bold text-lg ">BikeCraft</h1>
        </div>
        <div className="max-sm:hidden">
          <ul className="flex space-x-8">
            {" "}
            <li className="text-white text-lg  font-medium hover:text-yellow-500">
              <Link to="/bicicletas" className="">
                Bicicletas
              </Link>
            </li>
            <li className="text-white text-lg  font-medium hover:text-yellow-500">
              <a href="/seguros" className="">
                Seguros
              </a>
            </li>
            <li className="text-white text-lg  font-medium hover:text-yellow-500">
              <a href="/contact" className="">
                Contato
              </a>
            </li>
          </ul>
        </div>
        <div className="sm:hidden">
          <span className='text-white font-meduim text-lg'>
            {" "}
            <i class="fa-solid fa-bars"></i>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
