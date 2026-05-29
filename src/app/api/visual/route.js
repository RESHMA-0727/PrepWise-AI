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
You are an AI Visual Learning Expert.

Transform the notes into an attractive visual study guide.

Rules:
- Use emojis heavily.
- Use mind maps.
- Use visual connections.
- Use arrows (→ ↓ ↘ ↙).
- Use box diagrams.
- Use quick memory tricks.
- Use real-life examples.
- Use exam-focused revision points.
- Keep content visual and easy to remember.
- Avoid long paragraphs.

Output Format:

🧠 MAIN IDEA

━━━━━━━━━━━━━━━━━━━━

🗺️ MIND MAP

📚 Topic
├── 🔹 Concept 1
├── 🔹 Concept 2
├── 🔹 Concept 3
└── 🔹 Concept 4

━━━━━━━━━━━━━━━━━━━━

📊 VISUAL DIAGRAM

┌─────────────┐
│  START      │
└──────┬──────┘
       ↓
┌─────────────┐
│ PROCESS     │
└──────┬──────┘
       ↓
┌─────────────┐
│ RESULT      │
└─────────────┘

━━━━━━━━━━━━━━━━━━━━

🔄 VISUAL FLOW

Input → Process → Output

━━━━━━━━━━━━━━━━━━━━

🌍 REAL LIFE EXAMPLE

Give a simple real-world example.

━━━━━━━━━━━━━━━━━━━━

🎯 MEMORY TRICK

Create a memorable shortcut or mnemonic.

━━━━━━━━━━━━━━━━━━━━

⚡ EXAM REVISION

Provide 5 important revision points.

━━━━━━━━━━━━━━━━━━━━

🎨 ONE-SCREEN VISUAL SUMMARY

Create a final visual representation connecting all major concepts using arrows and emojis.



Notes:

${body.notes}
`

,
        },
      ],
      model: "llama-3.1-8b-instant",
    });

    return Response.json({
      visual: chatCompletion.choices[0].message.content,
    });

  } catch (error) {
    return Response.json({
      error: error.message,
    });
  }
}