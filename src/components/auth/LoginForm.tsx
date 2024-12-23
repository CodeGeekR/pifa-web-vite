import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import FormInput from '../forms/FormInput';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-600 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <Link to="/" className="text-3xl font-bold text-blue-600">PIFA</Link>
          <h2 className="mt-6 text-2xl font-bold text-gray-900">
            Iniciar Sesión
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <FormInput
            icon={Mail}
            label="Correo electrónico"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <FormInput
            icon={Lock}
            label="Contraseña"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                Recordarme
              </label>
            </div>

            <Link to="/recuperar-password" className="text-sm text-blue-600 hover:text-blue-700">
              ¿Olvidaste tu contraseña?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Iniciar Sesión
          </button>

          <div className="text-center mt-4">
            <span className="text-gray-600">¿No tienes una cuenta? </span>
            <Link to="/registro" className="text-blue-600 hover:text-blue-700">
              Regístrate
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;