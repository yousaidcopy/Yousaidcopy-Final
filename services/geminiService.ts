import { GoogleGenAI } from "@google/genai";

// Initialize the API client
// Note: In a production environment, ensure process.env.API_KEY is defined.
// If it is missing, we will gracefully handle the error in the UI.
const apiKey = process.env.API_KEY || ''; 
const ai = new GoogleGenAI({ apiKey });

export const generateMarketingCopy = async (topic: string, tone: string): Promise<string> => {
  if (!apiKey) {
    // Simulate a delay and return a mock response if no key is provided
    // This ensures the UI demo still feels functional for preview purposes if the env is missing
    await new Promise(resolve => setTimeout(resolve, 1500));
    return `[Demo Mode - API Key Missing]\n\nHere is a high-converting headline for ${topic}:\n\n"Unlock the True Potential of ${topic} Today."\n\n(To see real AI generation, please configure a valid Google Gemini API Key.)`;
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Write a short, punchy, high-conversion marketing hook (max 50 words) for a product related to: "${topic}". The tone should be ${tone}.`,
      config: {
        temperature: 0.9,
      }
    });

    return response.text || "Could not generate copy. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error connecting to the AI service. Please try again later.";
  }
};