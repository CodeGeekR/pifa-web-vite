import React, { useState } from 'react';
import { ArrowRight, BarChart2, Shield, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Modal from './ui/Modal';
import DemoForm from './forms/DemoForm';

const Hero = () => {
  const [showDemoModal, setShowDemoModal] = useState(false);
  const navigate = useNavigate();
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Fondo animado */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/90 to-blue-600/90" />
        </motion.div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-20">
        <motion.div 
          className="text-center"
          initial="initial"
          animate="animate"
        >
          <motion.h1 
            {...fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8"
          >
            Transformando datos en decisiones financieras estratégicas
          </motion.h1>

          <motion.p 
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto"
          >
            Potencia tu gestión financiera con inteligencia artificial y análisis predictivo
          </motion.p>

          <motion.div 
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button 
              onClick={() => navigate('/registro')}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors inline-flex items-center justify-center group"
            >
              Comenzar ahora
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                className="ml-2"
              >
                <ArrowRight className="h-5 w-5" />
              </motion.span>
            </button>
            <button 
              onClick={() => setShowDemoModal(true)}
              className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              Solicitar demo
            </button>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: BarChart2,
              title: "Análisis Predictivo",
              description: "Anticipa tendencias y toma decisiones informadas con nuestros modelos predictivos"
            },
            {
              icon: MessageSquare,
              title: "Chatbot Inteligente",
              description: "Resuelve consultas financieras al instante con nuestro asistente virtual"
            },
            {
              icon: Shield,
              title: "Seguridad Avanzada",
              description: "Protección de datos de nivel empresarial con cifrado de última generación"
            }
          ].map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white hover:bg-white/20 transition-colors"
            >
              <card.icon className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-blue-100">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Modal
        isOpen={showDemoModal}
        onClose={() => setShowDemoModal(false)}
        title="Solicitar Demo"
      >
        <DemoForm onSuccess={() => setShowDemoModal(false)} />
      </Modal>
    </div>
  );
};

export default Hero;