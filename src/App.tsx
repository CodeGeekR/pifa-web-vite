import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import ForgotPasswordForm from './components/auth/ForgotPasswordForm';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/registro" element={<RegisterForm />} />
        <Route path="/recuperar-password" element={<ForgotPasswordForm />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/servicios" element={
          <>
            <Header />
            <div className="pt-16"><Services /></div>
            <Footer />
          </>
        } />
        <Route path="/precios" element={
          <>
            <Header />
            <div className="pt-16"><Pricing /></div>
            <Footer />
          </>
        } />
        <Route path="/" element={
          <>
            <Header />
            <Hero />
            <Services />
            <Pricing />
            <Footer />
          </>
        } />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;