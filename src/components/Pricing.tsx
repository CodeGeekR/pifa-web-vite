import React from 'react';
import { Check } from 'lucide-react';

interface PricingFeature {
  text: string;
  available: boolean;
}

interface PricingPlan {
  title: string;
  price: string;
  features: PricingFeature[];
  isPopular?: boolean;
}

interface PricingCardProps extends PricingPlan {
  onSelect: (plan: string) => void;
  isLoading?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ 
  title, 
  price, 
  features, 
  isPopular = false,
  onSelect,
  isLoading = false 
}) => (
  <div 
    className={`bg-white rounded-2xl shadow-xl p-8 ${isPopular ? 'ring-2 ring-blue-600' : ''}`}
    role="article"
    aria-label={`Plan ${title}`}
  >
    {isPopular && (
      <span 
        className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium"
        aria-label="Plan más popular"
      >
        Más Popular
      </span>
    )}
    <h3 className="text-2xl font-bold text-gray-900 mt-4">{title}</h3>
    <p className="mt-4">
      <span className="text-4xl font-bold text-gray-900">${price}</span>
      <span className="text-gray-500">/mes</span>
    </p>
    <ul className="mt-8 space-y-4" role="list">
      {features.map((feature, index) => (
        <li 
          key={`${title}-feature-${index}`} 
          className="flex items-center"
        >
          <Check 
            className="h-5 w-5 text-blue-600 mr-2" 
            aria-hidden="true"
          />
          <span className="text-gray-600">{feature.text}</span>
        </li>
      ))}
    </ul>
    <button
      className={`w-full mt-8 px-6 py-3 rounded-full font-medium 
        ${isPopular 
          ? 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2' 
          : 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2'
        } transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
      onClick={() => onSelect(title)}
      disabled={isLoading}
      aria-busy={isLoading}
    >
      {isLoading ? 'Procesando...' : 'Comenzar ahora'}
    </button>
  </div>
);

const Pricing: React.FC = () => {
  const plans: PricingPlan[] = [
    {
      title: 'Básico',
      price: '99',
      features: [
        { text: 'Hasta 5 usuarios', available: true },
        { text: 'Análisis básico', available: true },
        { text: 'Chatbot IA', available: true },
        { text: 'Almacenamiento 10GB', available: true },
        { text: 'Soporte por email', available: true }
      ]
    },
    {
      title: 'Profesional',
      price: '199',
      features: [
        { text: 'Hasta 20 usuarios', available: true },
        { text: 'Análisis avanzado', available: true },
        { text: 'Chatbot IA personalizado', available: true },
        { text: 'Almacenamiento 50GB', available: true },
        { text: 'Soporte prioritario', available: true },
        { text: 'API access', available: true }
      ],
      isPopular: true
    },
    {
      title: 'Empresa',
      price: '499',
      features: [
        { text: 'Usuarios ilimitados', available: true },
        { text: 'Análisis predictivo completo', available: true },
        { text: 'Chatbot IA personalizado', available: true },
        { text: 'Almacenamiento ilimitado', available: true },
        { text: 'Soporte 24/7', available: true },
        { text: 'API access', available: true },
        { text: 'Integraciones personalizadas', available: true }
      ]
    }
  ];


  const handlePlanSelection = async (planTitle: string) => {
    try {
      // Aquí iría la lógica de selección del plan
      console.log(`Plan seleccionado: ${planTitle}`);
    } catch (error) {
      console.error('Error al seleccionar el plan:', error);
    }
  };

  return (
    <section 
      className="py-20 bg-gray-50"
      aria-labelledby="pricing-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 
            id="pricing-title"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Planes y Precios
          </h2>
          <p className="text-xl text-gray-600">
            Selecciona el plan que mejor se adapte a tus necesidades
          </p>
        </div>
        {/* Cambio principal aquí: ajuste de grid-cols */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <PricingCard
              key={plan.title}
              {...plan}
              onSelect={handlePlanSelection}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;