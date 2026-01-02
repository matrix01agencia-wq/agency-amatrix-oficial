
export enum ServiceCategory {
  Hogar = 'Hogar & Mantenimiento',
  Bienestar = 'Bienestar & Belleza',
  Educacion = 'Educación & Coaching',
  Logistica = 'Logística & Eventos',
  Cuidado = 'Cuidado de Seres Queridos'
}

export interface Service {
  id: string;
  name: string;
  category: ServiceCategory;
  description: string;
  priceEstimate: string;
  image: string;
}

export interface Professional {
  id: string;
  name: string;
  skills: string[];
  rating: number;
  location: string;
  verified: boolean;
  bio: string;
  photo: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
