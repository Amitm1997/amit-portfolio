
import { GoogleGenAI } from "@google/genai";
import { PROFILE } from "../constants";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async chatWithTwin(message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          {
            role: 'user',
            parts: [{ text: `You are the AI twin of ${PROFILE.name}. 
              Bio: ${PROFILE.bio}
              Skills: ${PROFILE.skills.map(s => s.name).join(', ')}
              Projects: ${PROFILE.projects.map(p => p.title).join(', ')}
              Your goal is to answer questions about Alex professionally and friendly. 
              Be concise but impressive. If asked about contact, refer them to the contact section or email ${PROFILE.email}.` }]
          },
          ...history.map(h => ({ role: h.role, parts: h.parts })),
          { role: 'user', parts: [{ text: message }] }
        ],
        config: {
          temperature: 0.7,
          maxOutputTokens: 500,
        }
      });

      return response.text || "I'm sorry, I'm having trouble thinking right now. Please try again!";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "Something went wrong while connecting to my AI core. Check your connection!";
    }
  }
}
