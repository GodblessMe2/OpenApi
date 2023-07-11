import openaiClient from './open-ai.js';

const generate = async (queryInput) => {
  const response = await openaiClient.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'user',
        content: queryInput,
      },
    ],
    temperature: 1,
    max_tokens: 150,
    top_p: 1,
  });
  return response.data.choices[0].message.content;
};

export default generate;
