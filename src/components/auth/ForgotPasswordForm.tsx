import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import FormInput from '../forms/FormInput';
import { Link } from 'react-router-dom';

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Reset password for:', email);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-600 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <Link to="/" className="text-3xl font-bold text-blue-600">PIFA</Link>
          <h2 className="mt-6 text-2xl font-bold text-gray-900">
            Recuperar contraseña
          </h2>
          <p className="mt-2 text-gray-600">
            Ingresa tu correo electrónico y te enviaremos las instrucciones
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <FormInput
            icon={Mail}
            label="Correo electrónico"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Enviar instrucciones
          </button>

          <div className="text-center mt-4">
            <Link to="/login" className="text-blue-600 hover:text-blue-700">
              Volver al inicio de sesión
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;