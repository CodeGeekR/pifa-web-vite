import React, { useState } from 'react';
import { Building, Mail, Phone, User } from 'lucide-react';
import FormInput from './FormInput';

interface DemoFormProps {
  onSuccess?: () => void;
}

const DemoForm: React.FC<DemoFormProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Demo request:', formData);
    onSuccess?.();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput
          icon={User}
          label="Nombre"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <FormInput
          icon={User}
          label="Apellido"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>

      <FormInput
        icon={Building}
        label="Empresa"
        name="company"
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
        icon={Phone}
        label="Teléfono"
        name="phone"
        type="tel"
        value={formData.phone}
        onChange={handleChange}
        required
      />

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Mensaje
        </label>
        <textarea
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          placeholder="¿Qué te gustaría saber sobre PIFA?"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors"
      >
        Solicitar Demo
      </button>
    </form>
  );
};

export default DemoForm;