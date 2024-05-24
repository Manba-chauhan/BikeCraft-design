import React from 'react';
import Card from './Card';

const Section2 = () => {
  return (
    <div className=" max-w-[1600px]  bg-black">
      <div className="flex flex-col ">
        <div className="ml-20 mt-20 max-md:ml-10 max-md:mt-10">
          <h1 className="text-5xl font-bold text-white max-md:text-3xl">nossas vantagens.</h1>
        </div>
        <div className="grid grid-cols-3  max-md:grid-cols-2 max-sm:grid-cols-1">
          <div className="">
            <Card
              icon=<i class="fa-solid fa-bicycle"></i>
              head="Reparo Elétrico"
              text="Garantimos o reparo competo do seu motor em caso de
            falhas. Sabemos que falhas são raras, mas estamos aqui caso ocorra."
            />
          </div>
          <div className="">
            <Card
              icon=<i class="fa-solid fa-water"></i>
              head="Reparo de Quadro"
              text="Nossos quadros são feitos para durar para sempre. 
              Mas caso algo ocorra, ficamos felizes em reparar."
            />
          </div>
          <div className="">
            <Card
              icon=<i class="fa-solid fa-leaf"></i>
              head="Sustentável"
              text="Trabalhamos com a filosofia de desperdício zero. Qualquer parte defeituosa 
              é reciclada e reutilizada em outro projeto."
            />
          </div>
          <div className="">
            <Card
              icon=<i class="fa-solid fa-location-crosshairs"></i>
              head="Recuperação"
              text="Recuperamos Bikcrafts roubadas sem custo adicional para o dono. 
              Se não conseguirmos recuperar, damos uma nova para você."
            />
          </div>
          <div className="">
            <Card
              icon=<i class="fa-solid fa-lock"></i>
              head="Segurança"
              text="O nosso seguro garante que todo reparo seja feito 
              com peças genuínas e de alta qualidade. Confie na Bikcraft.
"
            />
          </div>
          <div className="">
            <Card
              icon=<i class="fa-solid fa-clock"></i>
              head="Rapidez"
              text=" A sua Bikcraft ficará pronta para uso no mesmo dia, 
              caso você traga ela para ser reparada em uma das filiais."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
