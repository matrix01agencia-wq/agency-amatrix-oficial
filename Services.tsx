
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SERVICES } from '../constants';
import { ServiceCategory } from '../types';
import { Search, Filter, ChevronRight } from 'lucide-react';

const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory | 'All'>('All');
  const navigate = useNavigate();

  const categories = ['All', ...Object.values(ServiceCategory)];
  const filteredServices = activeCategory === 'All' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeCategory);

  const handleBooking = (serviceId: string) => {
    navigate(`/agenda?serviceId=${serviceId}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 animate-in fade-in duration-500">
      <div className="mb-12">
        <h1 className="text-4xl md:text-6xl serif text-matrix-purple mb-4">Nuestro <span className="italic">Catálogo</span></h1>
        <p className="text-gray-500 font-light max-w-xl">
          Selecciona la categoría que mejor se adapte a tus necesidades actuales. Excelencia garantizada en cada solicitud.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat as any)}
            className={`px-6 py-3 rounded-full text-xs font-bold transition-all border ${
              activeCategory === cat 
                ? 'bg-matrix-purple text-white border-matrix-purple shadow-lg shadow-purple-100' 
                : 'bg-white text-gray-500 border-gray-100 hover:border-matrix-purple/30'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredServices.map((service) => (
          <div key={service.id} className="group bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-gray-200 transition-all duration-500 flex flex-col">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={service.image} 
                alt={service.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-matrix-purple uppercase tracking-tighter">
                {service.category}
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-xl serif text-gray-800 mb-2">{service.name}</h3>
              <p className="text-xs text-gray-400 font-light mb-6 flex-grow leading-relaxed">
                {service.description}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-sm font-bold text-matrix-purple">{service.priceEstimate}</span>
                <button 
                  onClick={() => handleBooking(service.id)}
                  className="p-3 bg-matrix-purple text-white rounded-2xl hover:bg-matrix-green hover:text-matrix-purple transition-all shadow-md group/btn"
                >
                  <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredServices.length === 0 && (
        <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
          <p className="text-gray-400 serif italic">No encontramos servicios en esta categoría por ahora.</p>
        </div>
      )}
    </div>
  );
};

export default Services;
