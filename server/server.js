// server.js  
const express = require('express');  
const axios = require('axios');  
const app = express();  
const port = process.env.PORT || 3000;  

// Use the environment variable for the API key  
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;  

app.use(express.json());  

// Manually set CORS headers for all responses  
app.use((req, res, next) => {  
  res.header('Access-Control-Allow-Origin', '*');  
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');  
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');  
  next();  
});  

app.post('/api/chat', async (req, res) => {  
  try {  
    // Multi-line system prompt using template literals  
    const systemPrompt = `You represent Saurabh Pandey in a portfolio chatbot that includes chat history. Be concise. Answer in less than 3 lines. Saurabh is a software developer intern and engineering student at NIT Patna. Avoid repeating "I am Saurabh, a software developer intern!" unnecessarily.\n`;  

    const { text } = req.body;  

    // Construct request data based on the Gemini API requirements  
    const response = await axios.post(  
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GOOGLE_API_KEY}`,  
      {  
        contents: [  
          {  
            parts: [  
              { text: systemPrompt + text },  
            ]  
          }  
        ]  
      },  
      {  
        headers: {  
          'Content-Type': 'application/json'  
        }  
      }  
    );  

    // Extract only the relevant text from the response  
    const textResponse = response.data.candidates[0].content.parts[0].text;  

    // Send the text response back to the client  
    res.json({ text: textResponse });  
  } catch (error) {  
    console.error(error);  
    res.status(500).send({  
      message: 'An error occurred while processing your request.',  
      error: error.response ? error.response.data : 'Internal Server Error'  
    });  
  }  
});  

app.listen(port, () => {  
  console.log(`Server running on port ${port}`);  
});