import React from 'react';
import { 
  BarChart2, 
  MessageSquare, 
  Shield, 
  FileText, 
  PieChart,
  Users,
  Database,
  Zap,
  LucideIcon
} from 'lucide-react';

// Definición de tipos
interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

// Componente ServiceCard con tipos
const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description }) => (
  <div 
    className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    role="article"
  >
    <div 
      className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6"
      aria-hidden="true"
    >
      <Icon className="h-6 w-6 text-blue-600" />
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const Services: React.FC = () => {
  const services: Service[] = [
    {
      icon: BarChart2,
      title: 'Análisis Predictivo',
      description: 'Utiliza modelos avanzados de IA para predecir tendencias financieras y optimizar decisiones empresariales.'
    },
    {
      icon: MessageSquare,
      title: 'Chatbot Inteligente',
      description: 'Asistente virtual 24/7 para resolver consultas financieras y facilitar el acceso a la información.'
    },
    {
      icon: Shield,
      title: 'Seguridad Avanzada',
      description: 'Protección de datos de nivel empresarial con encriptación de última generación y cumplimiento normativo.'
    },
    {
      icon: FileText,
      title: 'Gestión Documental',
      description: 'Sistema inteligente de gestión y análisis de documentos financieros con reconocimiento automático.'
    },
    {
      icon: PieChart,
      title: 'Dashboards Personalizados',
      description: 'Visualización de datos en tiempo real con paneles interactivos adaptados a tus necesidades.'
    },
    {
      icon: Users,
      title: 'Gestión de Usuarios',
      description: 'Control de accesos y permisos con diferentes niveles de autorización y auditoría completa.'
    },
    {
      icon: Database,
      title: 'Integración de Datos',
      description: 'Conecta tus sistemas existentes (ERP, CRM) para una visión unificada de tu información financiera.'
    },
    {
      icon: Zap,
      title: 'Automatización de Procesos',
      description: 'Optimiza flujos de trabajo financieros mediante automatización inteligente de tareas repetitivas.'
    }
  ];

  return (
    <section 
      className="py-20 bg-gray-50"
      aria-labelledby="services-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 
            id="services-title"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soluciones integrales para la gestión financiera de tu empresa, potenciadas por inteligencia artificial.
          </p>
        </div>
        
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          role="list"
        >
          {services.map((service, index) => (
            <ServiceCard 
              key={`service-${index}`} 
              {...service} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;