'use client'

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'O que é o Gerador de Pix?',
    answer: 'O Gerador de Pix é uma ferramenta que permite criar e compartilhar facilmente seus dados de pagamento Pix, incluindo sua chave, beneficiário e cidade, para facilitar que outras pessoas te enviem dinheiro.'
  },
  {
    question: 'É seguro usar o Gerador de Pix?',
    answer: 'Sim, nosso serviço é totalmente seguro. Não armazenamos suas chaves Pix ou informações bancárias em nossos servidores. Utilizamos apenas para gerar o link ou QR code que você compartilhará.'
  },
  {
    question: 'Quais tipos de chave Pix posso usar?',
    answer: 'Você pode usar qualquer tipo de chave Pix: CPF/CNPJ, número de celular, email ou chave aleatória. Nosso sistema aceita todos os formatos oficiais reconhecidos pelo Banco Central.'
  },
  {
    question: 'Posso usar o Gerador de Pix para minha empresa?',
    answer: 'Sim! O Gerador de Pix é ideal tanto para uso pessoal quanto para empresas. Muitos profissionais autônomos e pequenas empresas utilizam nossa ferramenta para facilitar o recebimento de pagamentos.'
  },
  {
    question: 'O serviço é gratuito?',
    answer: 'Sim, a versão básica do Gerador de Pix é totalmente gratuita. Oferecemos também recursos premium para usuários que precisam de funcionalidades avançadas como personalização, rastreamento de pagamentos e integração com sistemas.'
  }
];

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-5">
      <button
        className="flex w-full items-center justify-between text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        <span className="ml-6 flex-shrink-0 text-secondary-500">
          <ChevronUp className={`h-5 w-5 ${isOpen ? "" : "hidden"}`} />
          <ChevronDown className={`h-5 w-5 ${isOpen ? "hidden" : ""}`} />
        </span>
      </button>
      <div className={`overflow-hidden mt-3 pr-12 ${isOpen ? "" : "max-h-0"}`}>
        <p className="text-base text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Perguntas Frequentes
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Encontre respostas para as dúvidas mais comuns sobre o Gerador de Pix
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-gray-200 rounded-lg bg-white">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;