import React, { useEffect, useState } from 'react';

const Accordian = ({title ,content}) => {
    const[isActive,setIsActive]=useState(false)
  


  return (
    <div
      className="bg-gray-300 p-5 rounded-sm  mt-8 max-md:p-2 "
      onClick={() => {
        setIsActive(!isActive);
      }}
    >
      <div className="">
        <div className="flex space-x-5">
          <span className="bg-yellow-500 w-4 h-4 rounded-full "></span>
          <div className="">
            <h2 className="text-black font-bold text-md max-md:text-[12px]">
              {title}
            </h2>
          </div>
        </div>
        <div className="float-right -mt-6 ">
          {isActive ? (
            <span className="text-yellow-500 text-3xl max-md:text-xl">
              <i class="fa-solid fa-minus"></i>
            </span>
          ) : (
            <span className="text-yellow-500 text-3xl max-md:text-xl">
              <i class="fa-solid fa-plus"></i>
            </span>
          )}
        </div>
      </div>
      {isActive && (
        <div className=" w-7/12 px-8 max-md:w-full ">
          <p className="text-black font-normal text-[15px] max-md:text-[10px]">
            {content}
          </p>
        </div>
      )}
    </div>
  );
}

export default Accordian;
