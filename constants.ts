
import { Service, ServiceCategory, Professional } from './types';

export const SERVICES: Service[] = [
  { id: 'h1', name: 'Limpieza Profunda', category: ServiceCategory.Hogar, description: 'Servicio premium de higienización para tu hogar.', priceEstimate: '$30/hr', image: 'https://picsum.photos/seed/clean/400/300' },
  { id: 'h2', name: 'Electricista', category: ServiceCategory.Hogar, description: 'Reparaciones y mantenimiento eléctrico certificado.', priceEstimate: '$45/hr', image: 'https://picsum.photos/seed/electric/400/300' },
  { id: 'h3', name: 'Plomería', category: ServiceCategory.Hogar, description: 'Soluciones rápidas para fugas y tuberías.', priceEstimate: '$40/hr', image: 'https://picsum.photos/seed/plumbing/400/300' },
  { id: 'b1', name: 'Masajes Terapéuticos', category: ServiceCategory.Bienestar, description: 'Relajación muscular profunda en la comodidad de tu casa.', priceEstimate: '$60/hr', image: 'https://picsum.photos/seed/massage/400/300' },
  { id: 'b2', name: 'Manicura & Peluquería', category: ServiceCategory.Bienestar, description: 'Belleza profesional sin salir de tu hogar.', priceEstimate: '$25+', image: 'https://picsum.photos/seed/beauty/400/300' },
  { id: 'e1', name: 'Clases de Idiomas', category: ServiceCategory.Educacion, description: 'Inglés, Francés y Alemán con nativos.', priceEstimate: '$20/hr', image: 'https://picsum.photos/seed/language/400/300' },
  { id: 'l1', name: 'DJ & Música en Vivo', category: ServiceCategory.Logistica, description: 'Ambienta tus eventos con el mejor sonido.', priceEstimate: '$150+', image: 'https://picsum.photos/seed/dj/400/300' },
  { id: 'c1', name: 'Paseo de Mascotas', category: ServiceCategory.Cuidado, description: 'Caminatas seguras y divertidas para tu mejor amigo.', priceEstimate: '$15/hr', image: 'https://picsum.photos/seed/pets/400/300' },
];

export const PROFESSIONALS: Professional[] = [
  {
    id: 'p1',
    name: 'Ana García',
    skills: ['Limpieza Profunda', 'Organización'],
    rating: 4.9,
    location: 'Buenos Aires, AR',
    verified: true,
    bio: 'Experta en gestión del hogar con más de 10 años de experiencia en servicios premium.',
    photo: 'https://picsum.photos/seed/pro1/200/200'
  },
  {
    id: 'p2',
    name: 'Carlos Ruiz',
    skills: ['Plomería', 'Electricidad'],
    rating: 4.7,
    location: 'Ciudad de México, MX',
    verified: true,
    bio: 'Técnico certificado especializado en reparaciones estructurales y mantenimiento preventivo.',
    photo: 'https://picsum.photos/seed/pro2/200/200'
  },
  {
    id: 'p3',
    name: 'Elena Thorne',
    skills: ['Yoga', 'Meditación'],
    rating: 5.0,
    location: 'Madrid, ES',
    verified: true,
    bio: 'Instructora de bienestar enfocada en la armonía mental y física.',
    photo: 'https://picsum.photos/seed/pro3/200/200'
  }
];
