import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Modal from './ui/Modal';
import DemoForm from './forms/DemoForm';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-blue-600">PIFA</Link>
            </div>

            <nav className="hidden md:flex items-center gap-x-8">
              <Link to="/servicios" className="text-gray-600 hover:text-blue-600 transition-colors">
                Servicios
              </Link>
              <Link to="/precios" className="text-gray-600 hover:text-blue-600 transition-colors">
                Precios
              </Link>
              <Link to="/contacto" className="text-gray-600 hover:text-blue-600 transition-colors">
                Contacto
              </Link>
              <button 
                onClick={() => setShowDemoModal(true)}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Solicitar Demo
              </button>
              <button 
                onClick={() => navigate('/login')}
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
              >
                Iniciar Sesión
              </button>
            </nav>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden border-t border-gray-100 px-4 py-4">
            <div className="flex flex-col gap-y-4">
              <Link to="/servicios" className="text-gray-600">Servicios</Link>
              <Link to="/precios" className="text-gray-600">Precios</Link>
              <Link to="/contacto" className="text-gray-600">Contacto</Link>
              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  setShowDemoModal(true);
                }}
                className="text-gray-600"
              >
                Solicitar Demo
              </button>
              <Link 
                to="/login"
                className="bg-blue-600 text-white px-6 py-2 rounded-full text-center"
              >
                Iniciar Sesión
              </Link>
            </div>
          </nav>
        )}
      </header>

      <Modal
        isOpen={showDemoModal}
        onClose={() => setShowDemoModal(false)}
        title="Solicitar Demo"
      >
        <DemoForm onSuccess={() => setShowDemoModal(false)} />
      </Modal>
    </>
  );
};

export default Header;