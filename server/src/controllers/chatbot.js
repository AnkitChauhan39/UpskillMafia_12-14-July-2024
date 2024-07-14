const model = require('../utils/chatbot');

const chatbot = async (req,res) => {
    const { userInput } = req.body;
    try {
        const r = await model.generateContent(userInput);
        res.json({ output: r.response.text() });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to generate content' });
    }
};

module.exports = chatbot;