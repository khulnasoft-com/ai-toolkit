'use server';

import { openai } from '@ai-toolkit/openai';
import { streamText } from 'ai-toolkit';
import { createStreamableValue } from 'ai-toolkit/rsc';

export async function generateCompletion(prompt: string) {
  const result = streamText({
    model: openai('gpt-4-turbo'),
    maxTokens: 2000,
    prompt,
  });

  return createStreamableValue(result.textStream).value;
}
