
import React from 'react';
import { Link } from 'react-router-dom';
// Fix: Added missing User icon import
import { ShieldCheck, Zap, Heart, Globe, ArrowRight, User } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-matrix-purple/20 text-matrix-purple text-[10px] uppercase tracking-[0.3em] font-bold mb-8 animate-in slide-in-from-top-4 duration-1000">
            <Zap size={12} className="text-matrix-green" />
            Excelencia en Servicios
          </div>
          <h1 className="text-5xl md:text-8xl serif text-matrix-purple mb-8 leading-tight max-w-5xl mx-auto">
            Soluciones profesionales en <span className="italic">un solo lugar.</span>
          </h1>
          <p className="text-lg md:text-xl font-light text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed">
            Agency Amatrix redefine la conexión entre el talento de élite y quienes buscan la perfección en cada detalle.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/services" className="w-full sm:w-auto bg-matrix-purple text-white px-10 py-5 rounded-full text-sm font-bold shadow-2xl shadow-purple-200 hover:scale-105 transition-all flex items-center justify-center gap-3">
              Explorar Catálogo <ArrowRight size={18} />
            </Link>
            <Link to="/professionals" className="w-full sm:w-auto bg-white border border-gray-200 text-gray-800 px-10 py-5 rounded-full text-sm font-bold hover:border-matrix-purple transition-all flex items-center justify-center gap-3">
              Ver Profesionales
            </Link>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-matrix-green/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-matrix-purple/5 rounded-full blur-3xl -z-10"></div>
      </section>

      {/* Registration Section (Capa de Seguridad) */}
      <section className="bg-white py-24 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl serif text-matrix-purple">Seguridad de <span className="italic">grado Matrix.</span></h2>
            <div className="space-y-6">
              {[
                { icon: ShieldCheck, title: "Identidad Verificada", desc: "Todos nuestros profesionales pasan un riguroso proceso de verificación de antecedentes." },
                { icon: Globe, title: "Ubicación Inteligente", desc: "Conectamos talentos cercanos a ti optimizando tiempos y costos de traslado." },
                { icon: Heart, title: "Calidad Garantizada", desc: "Sistema de escrow para liberar pagos solo cuando el servicio es completado satisfactoriamente." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 bg-matrix-purple/5 p-2 rounded-lg">
                    <item.icon size={20} className="text-matrix-purple" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">{item.title}</h3>
                    <p className="text-sm font-light text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-8 organic-radius border border-gray-100 hover:border-matrix-purple transition-colors group">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-matrix-purple">
                <User size={24} />
              </div>
              <h3 className="text-xl serif italic text-matrix-purple mb-2">Soy Cliente</h3>
              <p className="text-xs text-gray-400 font-light mb-6">Busco servicios exclusivos y seguridad total para mi hogar o empresa.</p>
              <button className="text-[10px] uppercase tracking-widest font-bold text-matrix-purple group-hover:gap-4 flex items-center gap-2 transition-all">
                Registrarme <ArrowRight size={14} />
              </button>
            </div>
            
            <div className="bg-matrix-purple p-8 organic-radius shadow-xl group hover:scale-[1.02] transition-transform">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 text-matrix-green">
                <Zap size={24} />
              </div>
              <h3 className="text-xl serif italic text-white mb-2">Soy Profesional</h3>
              <p className="text-xs text-purple-200 font-light mb-6">Quiero potenciar mi carrera con la plataforma de servicios líder.</p>
              <button className="text-[10px] uppercase tracking-widest font-bold text-matrix-green group-hover:gap-4 flex items-center gap-2 transition-all">
                Postularme <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Trust */}
      <section className="py-20 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Servicios", val: "50+" },
              { label: "Profesionales", val: "1.2k+" },
              { label: "Satisfacción", val: "99%" },
              { label: "Ciudades", val: "12" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl md:text-5xl serif text-matrix-purple mb-2">{stat.val}</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
