import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req) {
  try {
    const body = await req.json();

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `
Explain the following topic like a close friend.

Rules:
- Very simple language
- Real-life examples
- Easy to remember
- Fun explanation

Topic:
${body.notes}
`,
        },
      ],
      model: "llama-3.1-8b-instant",
    });

    return Response.json({
      friend: chatCompletion.choices[0].message.content,
    });

  } catch (error) {
    return Response.json({
      error: error.message,
    });
  }
}