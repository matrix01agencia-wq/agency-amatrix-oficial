
import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle, ChevronRight, User, ShieldCheck } from 'lucide-react';
import Home from './pages/Home';
import Services from './pages/Services';
import Professionals from './pages/Professionals';
import Agenda from './pages/Agenda';
import Contact from './pages/Contact';
import ChatAssistant from './components/ChatAssistant';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Servicios' },
    { path: '/professionals', label: 'Profesionales' },
    { path: '/agenda', label: 'Agenda' },
    { path: '/contact', label: 'Contacto' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Sticky */}
      <header className="sticky top-0 z-50 bg-[#F9F9F9]/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-matrix-purple rounded-full flex items-center justify-center">
                <span className="text-matrix-green font-bold text-xl">A</span>
              </div>
              <span className="text-2xl font-bold tracking-tighter text-matrix-purple serif italic">
                Amatrix <span className="text-sm font-light text-gray-400 not-italic tracking-widest uppercase">Agency</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm uppercase tracking-widest hover:text-matrix-purple transition-colors duration-300 ${
                    location.pathname === link.path ? 'text-matrix-purple font-semibold' : 'text-gray-500'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <Link to="/register-client" className="text-xs font-bold px-5 py-2 rounded-full border border-gray-300 hover:border-matrix-purple transition-all">
                Ingresar
              </Link>
              <button className="bg-matrix-purple text-white px-6 py-2 rounded-full text-xs font-bold hover:bg-opacity-90 transition-all shadow-lg shadow-purple-200">
                Únete como Profesional
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-matrix-purple">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-100 py-4 animate-in fade-in slide-in-from-top-4">
            <div className="px-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-lg serif text-gray-700 hover:text-matrix-purple"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <button className="w-full bg-matrix-purple text-white py-3 rounded-xl font-bold">Registro</button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/professionals" element={<Professionals />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Floating Chat Assistant */}
      <ChatAssistant />

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="serif text-2xl italic text-matrix-purple mb-4">Agency Amatrix</div>
          <p className="text-gray-400 text-sm max-w-md mx-auto mb-8 font-light">
            Elegancia orgánica en servicios profesionales. Conectando talento de élite con necesidades excepcionales.
          </p>
          <div className="flex justify-center gap-8 mb-8 text-gray-500 uppercase tracking-widest text-[10px]">
            <a href="#" className="hover:text-matrix-purple">Instagram</a>
            <a href="#" className="hover:text-matrix-purple">LinkedIn</a>
            <a href="#" className="hover:text-matrix-purple">WhatsApp</a>
          </div>
          <div className="text-[10px] text-gray-300 font-light">
            © {new Date().getFullYear()} Agency Amatrix. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
