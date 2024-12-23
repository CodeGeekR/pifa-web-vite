import React, { useState } from 'react';
import { Mail, Lock, User, Building } from 'lucide-react';
import { Link } from 'react-router-dom';
import FormInput from '../forms/FormInput';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Register attempt:', formData);
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
            Crear una cuenta
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <FormInput
              icon={User}
              label="Nombre"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <FormInput
              icon={User}
              label="Apellido"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <FormInput
            icon={Building}
            label="Empresa"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            required
          />

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

          <FormInput
            icon={Lock}
            label="Confirmar contraseña"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Registrarse
          </button>

          <div className="text-center mt-4">
            <span className="text-gray-600">¿Ya tienes una cuenta? </span>
            <Link to="/login" className="text-blue-600 hover:text-blue-700">
              Iniciar Sesión
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;