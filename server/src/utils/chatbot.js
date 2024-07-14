const { GoogleGenerativeAI } = require('@google/generative-ai');
const {GENAI_KEY} = require('../../constant');

const genAI = new GoogleGenerativeAI(GENAI_KEY);
const model = genAI.getGenerativeModel({
    model: 'gemini-1.5-pro',
});

module.exports = model;