require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const cors = require("cors");


const path = require("path");
const PORT = 5001;
const app = express();

app.use(cors({ origin: "http://localhost:3000" }));

app.use(bodyParser.json());

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const fs = require("node:fs");
  const mime = require("mime-types");
  
  const apiKey = process.env.GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
    systemInstruction: "You are a expert financial planner with the important job of looking at an indivudals financial situation and helping them plan for the future. Based on the information given by the user do the following tasks:\n1: Identify areas of weakness in their spending habits\n2: Create a plan to help build for the future\nReturn a JSON output with the following sections:\n{budget: {}\nweakness: {}\nplan: {}}\n\n",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseModalities: [
    ],
    responseMimeType: "application/json",
  };


app.post('/api/callLLM', async (req, res) => {
    const chatSession = model.startChat({
      generationConfig,
      history: []
    });
  
    try {
      const prompt = req.body;
      const result = await chatSession.sendMessage(prompt);
  
      const outputs = [];
      const candidates = result.response.candidates;
      for (let candidateIndex = 0; candidateIndex < candidates.length; candidateIndex++) {
        const parts = candidates[candidateIndex].content.parts;
        for (let partIndex = 0; partIndex < parts.length; partIndex++) {
          const part = parts[partIndex];
          if (part.inlineData) {
            try {
              const extension = mime.extension(part.inlineData.mimeType);
              const filename = `output_${candidateIndex}_${partIndex}.${extension}`;
              outputs.push({
                filename,
                mimeType: part.inlineData.mimeType,
                data: part.inlineData.data // base64 encoded data
              });
            } catch (err) {
              console.error(err);
            }
          }
        }
      }
  
      // Include the text response as well if needed.
      const textResponse = result.response.text();
      res.json({ text: textResponse, outputs });
    } catch (error) {
      console.error("ERROR", error);
      res.status(500).json({ error: error.message });
    }
  });
  
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });