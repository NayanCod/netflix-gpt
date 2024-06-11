// import OpenAI from 'openai';
// import { OPENAI_KEY } from './constant';

// const openai = new OpenAI({
//   apiKey: OPENAI_KEY,
//   dangerouslyAllowBrowser: true,
// });

// export default openai;

import { GoogleGenerativeAI } from "@google/generative-ai";

export const genAI = new GoogleGenerativeAI(process.env.REACT_APP_AI_KEY);
export const model = genAI.getGenerativeModel({ model: "gemini-pro" });