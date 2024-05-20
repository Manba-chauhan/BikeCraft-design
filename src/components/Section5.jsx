import React from 'react';
import img2 from '../assets/img/img2.png'

const Section5 = () => {
  return (
    <div className="max-w-[1600px]  mt-20 bg-yellow-500 
     flex space-y-60  max-lg:flex-col  max-lg:space-y-0
      ">
      {/* <div className=""> */}
        <div className="w-[780px]  h-[480px] max-lg:w-full max-lg:h-[500px]  ">
          <img src={img2} alt="aa" className=" w-full h-full object-cover  " />
        </div>
        <div className="w-1/2 px-20 max-lg:w-full max-lg:py-10 ">
          <span>"</span>
          <p className="text-3xl font-semibold">
            Pedalar sempre foi a minha paixão, o que o pessoal da Bikcraft fez
            foi intensificar o meu amor por esta atividade. Recomendo à todos
            que amo.{" "}
          </p>
          <p className='text-gray-500 font-semibold  mt-2'>Ana Júlia</p>
        </div>
      {/* </div> */}
    </div>
  );
}

export default Section5;
