
import { GoogleGenAI } from "@google/genai";

// Fix: Correctly initialize GoogleGenAI using process.env.API_KEY directly as per guidelines.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAmatrixResponse = async (userMessage: string) => {
  try {
    // Fix: Using the initialized 'ai' instance and standard model for text tasks.
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: `Eres el Asistente IA de Agency Amatrix. Tu estilo es elegante, profesional y servicial.
        Saluda cordialmente: '¿En qué podemos ayudarte hoy?'
        Tu objetivo es detectar qué servicio necesita el usuario y guiarlo.
        Si detectas necesidades de:
        - Reparaciones, limpieza, plomería, electricidad -> Sugiere 'Hogar & Mantenimiento'.
        - Belleza, masajes, entrenamiento -> Sugiere 'Bienestar & Belleza'.
        - Clases, idiomas, coaching -> Sugiere 'Educación & Coaching'.
        - Eventos, mudanzas, seguridad -> Sugiere 'Logística & Eventos'.
        - Mascotas, adultos mayores -> Sugiere 'Cuidado de Seres Queridos'.
        Responde siempre de forma breve y lujosa.`,
      },
    });
    // Fix: Access .text property directly (not a method).
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Lo siento, estoy experimentando una breve pausa en mi conexión. ¿Cómo puedo asistirte de forma manual?";
  }
};

export const generateProfessionalBio = async (name: string, skills: string[]) => {
  try {
    // Fix: Using the initialized 'ai' instance.
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Redacta una biografía profesional elegante y persuasiva para ${name}. 
      Habilidades: ${skills.join(', ')}. 
      La biografía debe ser en tercera persona, corta (máximo 150 palabras) y con un tono de 'Lujo Limpio'.`,
    });
    // Fix: Access .text property directly.
    return response.text;
  } catch (error) {
    console.error("Bio Gen Error:", error);
    return "Profesional comprometido con la excelencia y la satisfacción del cliente en Agency Amatrix.";
  }
};
