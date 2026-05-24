import { generateApiPrompt } from '../model/apiPrompt'
import { localLetter } from '../model/localLetter'
import type { ApplicationCreateFormType } from '../model/useApplicationCreateForm'

export async function generateApplication(
  data: ApplicationCreateFormType,
  signal?: AbortSignal
): Promise<string> {
  const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY

  if (!apiKey) {
    return localLetter(data)
  }

  try {
    const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      signal,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({        model: 'meta-llama/llama-3.1-70b-instruct',
        messages: [{ role: 'user', content: generateApiPrompt(data) }],
      }),
    })

    const json = await res.json()
    const content = json.choices?.[0]?.message?.content?.trim()

    return content || localLetter(data)
  } catch (error) {
    if (error instanceof DOMException && error.name === 'AbortError') {
      throw error
    }
    return localLetter(data)
  }
}
