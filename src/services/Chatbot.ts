import { OpenAI } from 'openai';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Initialize OpenAI client
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Function to process chatbot interaction
export async function handleChatbotInteraction(content: string): Promise<any> {
  try {
    // Ensure API key is initialized
    if (!client) {
      throw new Error('OpenAI client is not initialized.');
    }

    // Create a completion request
    const response = await client.chat.completions.create({
      model: 'gpt-4', // Use your model here
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: content || 'Explain to me how to be a good software engineer?' },
      ],
    });

    // Check if the response was successful
    if (!response.choices || response.choices.length === 0) {
      console.error('No response received from OpenAI.');
      return { error: 'No response received from OpenAI.' };
    }

    // Extract the message content
    const message = response.choices[0].message?.content || 'No message content.';

    // Return the message content as the final response
    return {
      id: response.id,
      model: response.model,
      choices: response.choices.map((choice, index) => ({
        index: index,
        message: {
          role: choice.message?.role,
          content: choice.message?.content,
        },
        finish_reason: choice.finish_reason,
      })),
    };
  } catch (error: unknown) {
    // Narrow the error type before accessing its properties
    if (error instanceof Error) {
      console.error(`Error: ${error.message}`);
      return { error: error.message };
    } else {
      // Handle cases where the error is not an instance of Error
      console.error('An unknown error occurred');
      return { error: 'An unknown error occurred' };
    }
  }  
}
