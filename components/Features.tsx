import React from 'react';
import { QrCode, Share2, Clock, Shield } from 'lucide-react';

const features = [
  {
    name: 'Geração instantânea',
    description: 'Crie seu Pix em segundos com apenas algumas informações básicas, sem complicações.',
    icon: Clock,
  },
  {
    name: 'Compartilhamento fácil',
    description: 'Compartilhe seu Pix por WhatsApp, email ou qualquer outra plataforma com apenas um clique.',
    icon: Share2,
  },
  {
    name: 'QR Code personalizado',
    description: 'Gere QR Codes personalizados que facilitam o pagamento imediato pelo seu cliente.',
    icon: QrCode,
  },
  {
    name: 'Segurança garantida',
    description: 'Seus dados são protegidos e usados apenas para gerar o Pix, sem armazenamento desnecessário.',
    icon: Shield,
  },
];

const Features: React.FC = () => {
  return (
    <section id="como-funciona" className="py-16 bg-gray-50">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Como funciona o <span className="text-primary-600">Gerador de Pix</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Nosso gerador facilita a criação e compartilhamento de seus dados Pix,
            permitindo recebimentos rápidos e seguros.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div 
              key={feature.name} 
              className="card border border-gray-100 flex flex-col items-start transition-all hover:shadow-lg hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-5 rounded-lg bg-primary-50 p-3 text-primary-600">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{feature.name}</h3>
              <p className="mt-3 text-base text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;