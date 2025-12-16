const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

const API_KEY = process.env.DEEPSEEK_API_KEY;

app.use(cors());
app.use(express.json());

app.post('/chat', async (req, res) => {
    try {
        const { systemPrompt, chatHistory } = req.body;

        const messages = [
            { role: 'system', content: systemPrompt },
            ...chatHistory
        ];

        const response = await axios.post('https://api.deepseek.com/v1/chat/completions', {
            model: 'deepseek-chat',
            messages: messages,
            max_tokens: 200
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEY}`
            }
        });

        res.json(response.data);

    } catch (error) {
        console.error('Erreur:', error.response?.data || error.message);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

module.exports = app;
