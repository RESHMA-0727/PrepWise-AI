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
          content: `Generate important viva questions with short answers from these notes:\n${body.notes}`,
        },
      ],

      model: "llama-3.1-8b-instant",

    });

    return Response.json({
      viva: chatCompletion.choices[0].message.content,
    });

  } catch (error) {

    return Response.json({
      error: error.message,
    });

  }

}