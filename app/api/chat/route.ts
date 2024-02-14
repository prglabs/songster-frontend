import { Configuration, OpenAIApi } from 'openai-edge';
import { OpenAIStream, StreamingTextResponse } from 'ai';

// Create an OpenAI API client (that's edge friendly!)
const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

// Set the runtime to edge for best performance
export const runtime = 'edge';

export async function POST(req: Request) {
  const { message } = await req.json();
  // Ask OpenAI for a streaming completion given the prompt

  console.log(message, "in chat/route.ts")

  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo-0613',
    stream: true,
    messages: [
      {
        role: 'system',
        content: 'You are an FAQ section, designed to only answer questions about the provided document. Any questions asked outside of this scope should be responded with \"This is outside my knowledge, contact the team!\"',
      },
      {
        role: 'user',
        content: `Use the Document below to answer the following question:
        Document:
        
        Question:
        ${message}`,
      },
    ],
  });


  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}