import React from 'react';
import Accordian from './Accordian';

const Section3 = () => {

    const accordian = [
      {
        title: "qual forma de pagamento vocês aceitam?",
        content:
          "Aceitamos cartões de crétido nas bandeiras: Visa, MasterCard, ELO e American Express. Para pagamentos  à vista aceitamos PIX e Boleto através do PageSeguro.",
      },
      {
        title: "Como posso entrar em contato? ",
        content:
          "Aceitamos cartões de crétido nas bandeiras: Visa, MasterCard, ELO e American Express. Para pagamentos  à vista aceitamos PIX e Boleto através do PageSeguro.",
      },
      {
        title: "Vocês possuem algum desconto?",
        content:
          "Aceitamos cartões de crétido nas bandeiras: Visa, MasterCard, ELO e American Express. Para pagamentos  à vista aceitamos PIX e Boleto através do PageSeguro.",
      },
      {
        title: "Qual garantia que possuo? ",
        content:
          "Aceitamos cartões de crétido nas bandeiras: Visa, MasterCard, ELO e American Express. Para pagamentos  à vista aceitamos PIX e Boleto através do PageSeguro.",
      },
      {
        title: "Posso parcelar no boleto?",
        content:
          "Aceitamos cartões de crétido nas bandeiras: Visa, MasterCard, ELO e American Express. Para pagamentos  à vista aceitamos PIX e Boleto através do PageSeguro.",
      },
      {
        title: "Quantas trocas posso fazer ao ano? ",
        content:
          "Aceitamos cartões de crétido nas bandeiras: Visa, MasterCard, ELO e American Express. Para pagamentos  à vista aceitamos PIX e Boleto através do PageSeguro.",
      },
      {
        title: "Qual BikCraft devo escolher para o meu tamanho? ",
        content:
          "Aceitamos cartões de crétido nas bandeiras: Visa, MasterCard, ELO e American Express. Para pagamentos  à vista aceitamos PIX e Boleto através do PageSeguro.",
      },
    ];
  return (
    <div className="max-w-[1600px] mx-auto bg-white  p-20 max-md:p-10">
      <div className="">
        <h1 className="text-5xl font-meduim tracking-normal leading-10 max-md:text-xl ">
          perguntas frequentes<span className='text-yellow-500 '>.</span>
        </h1>
        <div className=''>
        {
            accordian.map(({title,content})=>{
                console.log(title)
                return(
                    <Accordian 
    title={title}
    content={content}
/>
                )

            })
        }
            
        </div>
      </div>
    </div>
  );
}

export default Section3;
