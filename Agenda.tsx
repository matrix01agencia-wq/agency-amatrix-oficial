
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SERVICES, PROFESSIONALS } from '../constants';
import { Calendar, Clock, CreditCard, CheckCircle, Info } from 'lucide-react';

const Agenda: React.FC = () => {
  const [searchParams] = useSearchParams();
  const serviceId = searchParams.get('serviceId');
  const proId = searchParams.get('proId');

  const selectedService = SERVICES.find(s => s.id === serviceId);
  const selectedPro = PROFESSIONALS.find(p => p.id === proId);

  const [step, setStep] = useState(1);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const times = ['09:00', '10:30', '12:00', '14:30', '16:00', '17:30'];
  const days = Array.from({ length: 14 }, (_, i) => i + 1);

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 animate-in fade-in duration-500">
      <div className="text-center mb-12">
        <h1 className="text-4xl serif text-matrix-purple mb-4">Motor de <span className="italic">Conversión</span></h1>
        <div className="flex justify-center gap-8 text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">
          <div className={step >= 1 ? 'text-matrix-purple' : ''}>1. Horario</div>
          <div className={step >= 2 ? 'text-matrix-purple' : ''}>2. Profesional</div>
          <div className={step >= 3 ? 'text-matrix-purple' : ''}>3. Pago</div>
        </div>
      </div>

      <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl shadow-purple-100 border border-purple-50">
        {step === 1 && (
          <div className="animate-in slide-in-from-right-4 duration-300">
            <h2 className="text-2xl serif text-matrix-purple mb-8 flex items-center gap-3">
              <Calendar className="text-matrix-green" /> Selecciona tu Disponibilidad
            </h2>
            <div className="grid grid-cols-7 gap-2 mb-8">
              {['L', 'M', 'X', 'J', 'V', 'S', 'D'].map(d => (
                <div key={d} className="text-center text-[10px] font-bold text-gray-300 mb-2">{d}</div>
              ))}
              {days.map(d => (
                <button
                  key={d}
                  onClick={() => setSelectedDay(d)}
                  className={`h-12 flex items-center justify-center rounded-xl text-sm font-medium transition-all ${
                    selectedDay === d ? 'bg-matrix-purple text-white' : 'hover:bg-gray-50 text-gray-600'
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-12">
              {times.map(t => (
                <button
                  key={t}
                  onClick={() => setSelectedTime(t)}
                  className={`py-3 rounded-xl text-[10px] font-bold transition-all border ${
                    selectedTime === t ? 'bg-matrix-purple text-white border-matrix-purple' : 'border-gray-100 text-gray-400 hover:border-matrix-purple/30'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
            <button 
              disabled={!selectedDay || !selectedTime}
              onClick={() => setStep(2)}
              className="w-full bg-matrix-purple text-white py-5 rounded-full font-bold text-xs uppercase tracking-widest disabled:opacity-30 transition-all hover:scale-[1.02]"
            >
              Continuar
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="animate-in slide-in-from-right-4 duration-300">
            <h2 className="text-2xl serif text-matrix-purple mb-8">Elige tu <span className="italic">Especialista</span></h2>
            <div className="space-y-4 mb-12">
              {PROFESSIONALS.map(pro => (
                <button
                  key={pro.id}
                  onClick={() => setStep(3)}
                  className="w-full flex items-center gap-4 p-4 rounded-3xl border border-gray-100 hover:border-matrix-purple transition-all text-left group"
                >
                  <img src={pro.photo} className="w-16 h-16 rounded-2xl object-cover" />
                  <div className="flex-grow">
                    <h4 className="font-bold text-gray-800">{pro.name}</h4>
                    <p className="text-[10px] text-gray-400 uppercase tracking-tighter">{pro.skills[0]}</p>
                  </div>
                  <CheckCircle className="text-gray-100 group-hover:text-matrix-green transition-colors" />
                </button>
              ))}
            </div>
            <button onClick={() => setStep(1)} className="text-[10px] uppercase font-bold text-gray-400 tracking-widest hover:text-matrix-purple">Volver</button>
          </div>
        )}

        {step === 3 && (
          <div className="animate-in zoom-in-95 duration-500">
            <h2 className="text-2xl serif text-matrix-purple mb-8 flex items-center gap-3">
              <CreditCard className="text-matrix-green" /> Confirmación de Pago
            </h2>
            <div className="bg-gray-50 p-6 rounded-3xl mb-8 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Servicio</span>
                <span className="font-bold">{selectedService?.name || 'Personalizado'}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Fecha y Hora</span>
                <span className="font-bold">{selectedDay} de Mayo - {selectedTime}</span>
              </div>
              <div className="border-t border-gray-200 pt-4 flex justify-between">
                <span className="text-gray-800 font-bold uppercase text-xs tracking-widest">Total Reserva</span>
                <span className="text-xl serif text-matrix-purple">$25.00</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <a 
                href="https://paypal.me/stanlyvida96" 
                target="_blank"
                className="flex flex-col items-center justify-center p-6 bg-blue-50 rounded-3xl hover:bg-blue-100 transition-colors border border-blue-100"
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-6 mb-2" />
                <span className="text-[10px] font-bold text-blue-800 uppercase tracking-widest">PayPal</span>
              </a>
              <a 
                href="mailto:matrix01agencia@gmail.com" 
                className="flex flex-col items-center justify-center p-6 bg-blue-600 text-white rounded-3xl hover:bg-blue-700 transition-colors"
              >
                <span className="text-xl font-bold mb-2">M</span>
                <span className="text-[10px] font-bold uppercase tracking-widest">Mercado Pago</span>
              </a>
            </div>

            <div className="flex gap-3 items-start bg-purple-50 p-4 rounded-2xl mb-8">
              <Info className="text-matrix-purple shrink-0" size={18} />
              <p className="text-[10px] text-matrix-purple leading-normal font-medium italic">
                El pago digital actúa como garantía. Se liberará al profesional mediante código QR una vez finalizado el servicio.
              </p>
            </div>

            <button className="w-full bg-matrix-green text-matrix-purple py-5 rounded-full font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:scale-[1.02] transition-all">
              Confirmar & Pagar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Agenda;
