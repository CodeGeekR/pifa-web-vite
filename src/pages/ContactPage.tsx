import React from 'react';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900">Contáctanos</h1>
            <p className="mt-4 text-xl text-gray-600">
              Estamos aquí para ayudarte. Contáctanos y te responderemos lo antes posible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <ContactForm />
            </div>
            <ContactInfo />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;