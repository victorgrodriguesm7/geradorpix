import React from 'react';
import { QrCode } from 'lucide-react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-primary-600">
          <QrCode size={28} className="text-primary-600" />
          <span className="text-xl font-semibold">Gerador de Pix</span>
        </Link>
        
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="#como-funciona" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
            Como funciona
          </Link>
          <Link href="#beneficios" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
            Benefícios
          </Link>
          <Link href="#faq" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
            FAQ
          </Link>
        </nav>
        
        <Link 
          href="#gerar" 
          className="btn btn-primary hidden md:flex"
        >
          Gerar meu Pix
        </Link>
      </div>
    </header>
  );
};

export default Navbar;