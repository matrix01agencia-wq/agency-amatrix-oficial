
import React from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20 animate-in fade-in duration-700">
      <div className="grid md:grid-cols-2 gap-20">
        <div>
          <h1 className="text-5xl md:text-7xl serif text-matrix-purple mb-8">Ponte en <span className="italic">Contacto.</span></h1>
          <p className="text-gray-500 font-light mb-12 max-w-md leading-relaxed">
            Estamos aquí para resolver tus dudas y asegurar que tu experiencia con Amatrix sea excepcional.
          </p>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-matrix-purple">
                <Mail size={20} />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Email</div>
                <div className="text-gray-800">matrix01agencia@gmail.com</div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-matrix-purple">
                <MessageCircle size={20} />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">WhatsApp</div>
                <a href="https://wa.me/5491122334455" className="text-matrix-purple font-bold hover:underline">Iniciar chat directo</a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-matrix-purple">
                <MapPin size={20} />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Oficina Central</div>
                <div className="text-gray-800">Distrito Tecnológico, Global HQ</div>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-16 border-t border-gray-100 flex gap-6">
            <a href="#" className="p-3 bg-gray-50 rounded-xl text-gray-400 hover:text-matrix-purple transition-all"><Instagram size={20} /></a>
            <a href="#" className="p-3 bg-gray-50 rounded-xl text-gray-400 hover:text-matrix-purple transition-all"><Linkedin size={20} /></a>
          </div>
        </div>

        <div className="bg-white p-10 rounded-[3rem] shadow-2xl shadow-purple-50 border border-purple-50">
          <form className="space-y-6">
            <div>
              <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2 block">Nombre Completo</label>
              <input 
                type="text" 
                placeholder="Ej. Sofia Martínez"
                className="w-full bg-gray-50 border-none rounded-2xl py-4 px-6 text-sm font-light focus:ring-1 focus:ring-matrix-purple"
              />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2 block">Email</label>
              <input 
                type="email" 
                placeholder="sofia@ejemplo.com"
                className="w-full bg-gray-50 border-none rounded-2xl py-4 px-6 text-sm font-light focus:ring-1 focus:ring-matrix-purple"
              />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2 block">Asunto</label>
              <select className="w-full bg-gray-50 border-none rounded-2xl py-4 px-6 text-sm font-light focus:ring-1 focus:ring-matrix-purple appearance-none">
                <option>Consulta General</option>
                <option>Soporte Técnico</option>
                <option>Unirme como Profesional</option>
                <option>Reclamación</option>
              </select>
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2 block">Mensaje</label>
              <textarea 
                rows={4}
                placeholder="¿En qué podemos ayudarte?"
                className="w-full bg-gray-50 border-none rounded-2xl py-4 px-6 text-sm font-light focus:ring-1 focus:ring-matrix-purple"
              ></textarea>
            </div>
            <button className="w-full bg-matrix-purple text-white py-5 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-opacity-90 transition-all shadow-xl shadow-purple-100">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
