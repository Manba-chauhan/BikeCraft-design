import React from 'react';
const CardImage = (props) => {
  return (
    <div className="max-w-[480px] max-h-[608px] flex flex-col mt-10 ">
      <div className="w-[400px] h-[520px] object-cover  max-md:w-[300px]  max-md:h-[360px] max-2xl:w-[300px] max-2xl:h-[300px]">
        <img
          src={props.img}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="">
        <div className="flex  items-center space-x-1">
          <span className="bg-yellow-500 w-4  h-3"></span>
          <h1 className="text-md text-black font-bold"> {props.name}</h1>
        </div>
        <p className="text-sm text-black font-serif">{props.price}</p>
      </div>
    </div>
  );
}

export default CardImage;
