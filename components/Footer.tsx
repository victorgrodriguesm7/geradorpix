import React from 'react';
import { QrCode, Mail, Instagram, Twitter, Facebook } from 'lucide-react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <QrCode size={28} className="text-primary-400" />
              <span className="text-xl font-semibold">Gerador de Pix</span>
            </div>
            <p className="text-gray-400">
              Simplifique seus recebimentos com nosso gerador de Pix. Crie links personalizados
              para compartilhar com clientes, amigos ou familiares.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#gerar" className="text-gray-400 hover:text-white transition-colors">
                  Gerar Pix
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="text-gray-400 hover:text-white transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#beneficios" className="text-gray-400 hover:text-white transition-colors">
                  Benefícios
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://github.com/victorgrodriguesm7/geradorpix/" className="text-gray-400 hover:text-white transition-colors">
                  Tutoriais
                </a>
              </li>
              <li>
                <a href="https://github.com/victorgrodriguesm7/geradorpix/issues" className="text-gray-400 hover:text-white transition-colors">
                  Suporte
                </a>
              </li>
              <li>
                <Link href="/politica" className="text-gray-400 hover:text-white transition-colors">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-gray-400" />
                <a href="mailto:contato@geradorpix.com.br" className="text-gray-400 hover:text-white transition-colors">
                  contato@geradorpix.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Gerador de Pix. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;