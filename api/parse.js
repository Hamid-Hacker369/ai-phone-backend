const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",  // yeh line add karo
  apiKey: process.env.OPENAI_API_KEY,
});

// model ko OpenRouter ke free model mein badlo, jaise:
model: "meta-llama/llama-3.3-70b-instruct:free",
