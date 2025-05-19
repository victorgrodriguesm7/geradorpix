import React from 'react';
import { QrCode } from 'lucide-react';

const ExampleSection = () => {
  return (
    <section id="beneficios" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Simplifique a forma como você recebe pagamentos
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Com o Gerador de Pix, você pode simplificar a forma como você compartilha seus dados bancários,
              tornando mais fácil para seus clientes, amigos e familiares te enviarem dinheiro.
            </p>
            
            <ul className="mt-8 space-y-4">
              {[
                'Compartilhe facilmente sua chave Pix com formato padronizado',
                'Gere um QR Code que pode ser escaneado por qualquer aplicativo',
                'Receba seus pagamentos mais rapidamente e sem complicações',
                'Mantenha seus dados organizados e de fácil acesso'
              ].map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-600">{benefit}</p>
                </li>
              ))}
            </ul>
            
            <div className="mt-10">
              <a href="#gerar" className="btn btn-primary bg-primary-600 hover:bg-primary-700 focus:ring-primary-500">
                Criar meu Pix agora
              </a>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="card max-w-md border border-gray-200 overflow-hidden transform transition-all hover:shadow-xl">
              <div className="bg-primary-600 p-4 text-white flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <QrCode className="h-5 w-5" />
                  <span className="font-medium">Seus dados Pix</span>
                </div>
                <div className="text-xs px-2.5 py-1 bg-white/20 rounded-full">
                  Exemplo
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Tipo de Chave</p>
                  <p className="font-medium">CPF</p>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-gray-500">Chave</p>
                  <p className="font-medium">123.456.789-00</p>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-gray-500">Beneficiário</p>
                  <p className="font-medium">Maria Silva</p>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-gray-500">Cidade</p>
                  <p className="font-medium">São Paulo</p>
                </div>
                
                <div className="pt-2 flex justify-center">
                  <div className="h-48 w-48 bg-gray-100 flex items-center justify-center rounded-lg">
                    <QrCode className="h-32 w-32 text-gray-800" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExampleSection;