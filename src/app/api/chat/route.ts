import { streamText } from 'ai';
import { google } from '@ai-sdk/google';

export async function POST(req: Request) {
  const { messages, subs } = await req.json();


  const result = streamText({
    model: google('gemini-1.5-flash'),
    system: `
    You are an intelligent assistant designed to answer questions about a user's subscription data.
    You are provided with a JSON object containing the user's subscription details, which includes information such as title, subscription type, category, start date, end date, amount, and currency. 
    Your task is to:
    - Answer only questions strictly related to the provided subscription data.
    - If a question is unrelated to subscriptions, politely redirect the user to ask about subscriptions, keep it as polite as possible and avoid any unnecessary information.
    - Avoid making assumptions or answering based on anything other than the provided data.

    Here is the subscription data:
    ${JSON.stringify(subs)}

    Remember to be concise, accurate, and respond in a way that is easy to understand.
  `,
    messages,
  });

  return result.toDataStreamResponse();
}

