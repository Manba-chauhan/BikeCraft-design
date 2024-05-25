import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [menu, setMenu] = useState(false);

    const openMenu = () => {
      setMenu(true);
    };

    const closeMenu = () => {
      setMenu(false);
    };
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
              <Link to="/" className="">
                Home
              </Link>
            </li>
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
          <span className="text-white font-medium text-lg">
            <button onClick={openMenu}>
              <i className="fa-solid fa-bars"></i>
            </button>
          </span>
        </div>
      </div>
      {menu && (
        <div
          className="absolute top-0 right-0 w-1/2 h-full bg-black text-white
        flex flex-col  space-x-6  z-50 sm:hidden"
        >
          {/* <div className="flex"> */}
          <button onClick={closeMenu} className="mb-4  pr-4 pt-4  mt-4 ">
            <i className="fa-solid fa-times  float-right "></i>
          </button>
          {/* </div> */}
          <ul className="flex flex-col space-y-4">
            <li className="text-lg font-medium hover:text-yellow-500">
              <Link to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="text-lg font-medium hover:text-yellow-500">
              <Link to="/bicicletas" onClick={closeMenu}>
                Bicicletas
              </Link>
            </li>
            <li className="text-lg font-medium hover:text-yellow-500">
              <a href="/seguros" onClick={closeMenu}>
                Seguros
              </a>
            </li>
            <li className="text-lg font-medium hover:text-yellow-500">
              <a href="/contact" onClick={closeMenu}>
                Contato
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
