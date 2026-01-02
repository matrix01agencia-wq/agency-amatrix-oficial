
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PROFESSIONALS } from '../constants';
import { Star, ShieldCheck, MapPin, Search } from 'lucide-react';

const Professionals: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl serif text-matrix-purple mb-4">Talento <span className="italic">Exclusivo</span></h1>
          <p className="text-gray-500 font-light leading-relaxed">
            Nuestro marketplace reúne solo a los mejores. Profesionales con identidad validada y calificación superior para tu tranquilidad.
          </p>
        </div>
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Buscar por nombre o habilidad..."
            className="pl-12 pr-6 py-4 bg-white border border-gray-200 rounded-full text-sm w-full md:w-80 focus:ring-1 focus:ring-matrix-purple transition-all shadow-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROFESSIONALS.map((pro) => (
          <div key={pro.id} className="bg-white p-8 rounded-[2.5rem] border border-gray-100 hover:border-matrix-green transition-all shadow-sm hover:shadow-xl group">
            <div className="flex items-start justify-between mb-8">
              <div className="relative">
                <img 
                  src={pro.photo} 
                  alt={pro.name} 
                  className="w-20 h-20 rounded-3xl object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                {pro.verified && (
                  <div className="absolute -bottom-2 -right-2 bg-matrix-green p-1.5 rounded-full border-4 border-white">
                    <ShieldCheck size={14} className="text-matrix-purple" />
                  </div>
                )}
              </div>
              <div className="text-right">
                <div className="flex items-center justify-end gap-1 text-yellow-500 mb-1">
                  <Star size={16} fill="currentColor" />
                  <span className="text-sm font-bold text-gray-800">{pro.rating}</span>
                </div>
                <div className="flex items-center justify-end gap-1 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                  <MapPin size={12} />
                  {pro.location}
                </div>
              </div>
            </div>

            <h3 className="text-2xl serif text-matrix-purple mb-2">{pro.name}</h3>
            <p className="text-xs text-gray-500 font-light mb-6 line-clamp-3 leading-relaxed">
              {pro.bio}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {pro.skills.map((skill, i) => (
                <span key={i} className="px-3 py-1 bg-gray-50 text-[10px] font-bold text-gray-400 rounded-full border border-gray-100 uppercase tracking-tighter">
                  {skill}
                </span>
              ))}
            </div>

            <button 
              onClick={() => navigate(`/agenda?proId=${pro.id}`)}
              className="w-full py-4 border border-matrix-purple text-matrix-purple text-[10px] uppercase tracking-widest font-bold rounded-2xl hover:bg-matrix-purple hover:text-white transition-all"
            >
              Ver Agenda
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Professionals;
