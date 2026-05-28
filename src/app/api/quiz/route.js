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
Generate 3 MCQ quiz questions from these notes.

IMPORTANT:
- Return ONLY valid JSON
- The answer must EXACTLY match one option text
- Do NOT return A/B/C/D letters

Format:

[
  {
    "question": "Question here",
    "options": [
      "Option 1",
      "Option 2",
      "Option 3",
      "Option 4"
    ],
    "answer": "Exact correct option text"
  }
]

Notes:
${body.notes}
`,
        },
      ],

      model: "llama-3.1-8b-instant",

    });

    const responseText = chatCompletion.choices[0].message.content;

    const cleanedText = responseText
      .replace(/```json/g, "")
      .replace(/```/g, "");

    const quizData = JSON.parse(cleanedText);

    return Response.json({
      quiz: quizData,
    });

  } catch (error) {

    return Response.json({
      error: error.message,
    });

  }

}