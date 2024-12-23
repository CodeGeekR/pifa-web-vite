import React from 'react';
import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">PIFA</h3>
            <p className="text-sm">
              Transformando datos en decisiones financieras estratégicas para empresas de todo tamaño.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Productos</h4>
            <ul className="space-y-2">
              <li><a href="/servicios" className="hover:text-white transition-colors">Análisis Predictivo</a></li>
              <li><a href="/servicios" className="hover:text-white transition-colors">Chatbot IA</a></li>
              <li><a href="/servicios" className="hover:text-white transition-colors">Gestión Documental</a></li>
              <li><a href="/servicios" className="hover:text-white transition-colors">Dashboards</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li><a href="/nosotros" className="hover:text-white transition-colors">Sobre Nosotros</a></li>
              <li><a href="/precios" className="hover:text-white transition-colors">Precios</a></li>
              <li><a href="/contacto" className="hover:text-white transition-colors">Contacto</a></li>
              <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contacto</h4>
            <ul className="space-y-2">
              <li>contact@pifa.com</li>
              <li>+1 (555) 123-4567</li>
              <li className="flex space-x-4 mt-4">
                <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
                <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
                <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
                <a href="#" className="hover:text-white transition-colors"><Mail size={20} /></a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} PIFA. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;