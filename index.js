const axios = require('axios');

console.log("Inicio de App de ChatGPT utlizidando como parametro de NodeJS");

const API_KEY = 'sk-4oMM21HgZiMeYTNsesl-nSwGsA2xKtYyiF9xmEFlvKT3BlbkFJcNyeHay4OG5CFre3hd22i_vYYUwXJtZ0R0xQzbCJcA';

// Crear una función para enviar la solicitud
async function consultarChatGPT(mensaje) {
  const url = 'https://api.openai.com/v1/chat/completions';  //ENDPOINT
  
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_KEY}`,
  };
  
  const data = {
    model: 'gpt-3.5-turbo', // Se puede cambiar esto 
    messages: [{ role: 'user', content: "Hola Chat GPT! Ahora estas siendo consumido desde mi App de NodeJS, ¿Consideras que ese desarrollo es útil?" }], 
    max_tokens: 150, // Define el número máximo de tokens en la respuesta
    temperature: 0.7, // Grado de creatividad (0.0 a 1.0)
  };

/*
  const data = {
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'system', content: 'Eres un asistente útil.' }, // Configura el comportamiento del asistente
      { role: 'user', content: 'Explícame qué es JavaScript.' },
      { role: 'user', content: '¿Cuáles son sus principales usos?' }
    ],
    max_tokens: 200,
    temperature: 0.7,
  };
  */

  try {
    const response = await axios.post(url, data, { headers });
    console.log('Respuesta de ChatGPT:', response.data.choices[0].message.content);
  } catch (error) {
    console.error('Error al consumir la API de OpenAI:', error.response ? error.response.data : error.message);
  }
}

// Ejemplo de uso
const mensaje = "¿Qué es Node.js?";
consultarChatGPT(mensaje);