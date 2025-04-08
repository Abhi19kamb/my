const express = require('express');
const router = express.Router();
const OpenAI = require('openai');
const auth = require('../middleware/auth');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Chat with AI (protected route)
router.post('/', auth, async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ message: 'Message is required' });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful real estate assistant. Provide information about properties, market trends, and answer questions about real estate."
        },
        {
          role: "user",
          content: message
        }
      ],
      max_tokens: 150
    });

    res.json({
      response: completion.choices[0].message.content
    });
  } catch (error) {
    console.error('OpenAI API Error:', error);
    res.status(500).json({ 
      message: 'Error processing your request',
      error: error.message
    });
  }
});

module.exports = router; 