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
          content: `Create 5 multiple choice quiz questions with answers from these notes:\n${body.notes}`,
        },
      ],

      model: "llama-3.1-8b-instant",

    });

    return Response.json({
      quiz: chatCompletion.choices[0].message.content,
    });

  } catch (error) {

    return Response.json({
      error: error.message,
    });

  }

}