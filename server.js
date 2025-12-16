const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

// Ta clé API DeepSeek
const API_KEY = 'sk-ec158b00f5a34c4baeec6cb54112509f';

// Middleware
app.use(cors());
app.use(express.json());

// Route pour le chat
app.post('/chat', async (req, res) => {
    try {
        const { systemPrompt, chatHistory } = req.body;

        // Construire les messages avec l'historique
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

// Démarrer le serveur
app.listen(3000, () => {
    console.log('✅ Serveur Teka démarré sur http://localhost:3000');
});