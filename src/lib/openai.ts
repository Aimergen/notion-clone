import { Configuration, OpenAIApi } from "openai-edge";

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

export const generateImagePrompt = async (prompt: string) => {
  try {
    const res = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "Hello world",
        },
        {
          role: "user",
          content: "Please genate",
        },
      ],
    });

    const data = await res.json();
    const image_desc = data.choices[0].message.content;
    return image_desc as string;
  } catch (error) {
    throw error;
  }
};
export const generateImage = async (prompt: string) => {};
