import React from 'react';

const Card = (props) => {
  return (
    <div className="max-w-[364px] ml-16 mt-10 max-md:ml-10 ">
      <div className="flex flex-col space-y-2 text-white p-4">
        <div className="">
          <span className='text-[20px] text-yellow-600'>{props.icon}</span>
        </div>
        <div className="">
          <h1 className='font-bold text-md text-nowrap tracking-normal'>{props.head}</h1>
        </div>
        <div className="">
          <p className='text-gray-400 text-[14px] font-normal'>
            {props.text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
