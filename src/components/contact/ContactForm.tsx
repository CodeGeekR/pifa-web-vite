import React, { useState } from 'react';
import FormInput from '../forms/FormInput';
import { Mail, MessageSquare, User } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FormInput
        icon={User}
        label="Nombre completo"
        name="name"
        value={formData.name}
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
        icon={MessageSquare}
        label="Asunto"
        name="subject"
        value={formData.subject}
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
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors"
      >
        Enviar Mensaje
      </button>
    </form>
  );
};

export default ContactForm;