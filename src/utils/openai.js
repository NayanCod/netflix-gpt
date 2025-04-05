

import { GoogleGenerativeAI } from "@google/generative-ai";

export const genAI = new GoogleGenerativeAI(process.env.REACT_APP_AI_KEY);
export const model = genAI.getGenerativeModel({ model: "gemini-pro" });