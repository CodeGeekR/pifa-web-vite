import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="bg-gray-50 p-8 rounded-lg">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Información de Contacto</h3>
      <div className="space-y-6">
        <div className="flex items-start">
          <Mail className="h-6 w-6 text-blue-600 mr-4" />
          <div>
            <p className="font-medium">Email</p>
            <a href="mailto:contacto@pifa.com" className="text-gray-600 hover:text-blue-600">
              contacto@pifa.com
            </a>
          </div>
        </div>

        <div className="flex items-start">
          <Phone className="h-6 w-6 text-blue-600 mr-4" />
          <div>
            <p className="font-medium">Teléfono</p>
            <a href="tel:+1234567890" className="text-gray-600 hover:text-blue-600">
              +1 (234) 567-890
            </a>
          </div>
        </div>

        <div className="flex items-start">
          <MapPin className="h-6 w-6 text-blue-600 mr-4" />
          <div>
            <p className="font-medium">Dirección</p>
            <p className="text-gray-600">
              123 Financial District<br />
              Ciudad Financiera, CF 12345
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <Clock className="h-6 w-6 text-blue-600 mr-4" />
          <div>
            <p className="font-medium">Horario de Atención</p>
            <p className="text-gray-600">
              Lunes - Viernes: 9:00 AM - 6:00 PM<br />
              Sábado: 9:00 AM - 1:00 PM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;