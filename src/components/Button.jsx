import React from 'react';

const Button = (props) => {
  return (
    <button className='bg-yellow-500 text-black text-md tracking-wide text-nowrap
     px-4 py-2 rounded-xl hover:text-yellow-500 hover:border-yellow-500 hover:border-2 
     hover:bg-black'>
      {props.text}
    </button>
  );
}

export default Button;
