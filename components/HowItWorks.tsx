import React from 'react';
import { FileText, QrCode, Share2 } from 'lucide-react';

const steps = [
  {
    title: 'Informe seus dados',
    description: 'Preencha tipo de chave, a chave Pix, nome do beneficiário e cidade em um formulário simples.',
    icon: FileText,
    color: 'bg-primary-50 text-primary-600',
  },
  {
    title: 'Visualize seu QRCode',
    description: 'Você será redirecionado para a página de cobrança.',
    icon: QrCode,
    color: 'bg-secondary-50 text-secondary-600',
  },
  {
    title: 'Compartilhe facilmente',
    description: 'Compartilhe o link com seus clientes, amigos ou familiares para receber pagamentos.',
    icon: Share2,
    color: 'bg-primary-50 text-primary-600',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Compartilhe seus dados <span className="text-secondary-500">em 3 passos simples</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Nosso processo é descomplicado, seguro e prático, para que você possa receber seus pagamentos rapidamente.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 translate-y-16 transform bg-gray-200 hidden md:block"></div>
          
          <div className="grid gap-12 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center">
                <div className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-full ${step.color}`}>
                  <step.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-base text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <a href="#gerar" className="btn btn-primary">
            Gerar meu Pix agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;