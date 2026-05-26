"use client";

import { useState } from "react";

export default function Home() {

  const [notes, setNotes] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const generateSummary = async () => {

    if (!notes) return;

    setLoading(true);

    try {

      const response = await fetch("/api/summarize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ notes }),
      });

      const data = await response.json();
       setSummary(data.summary || data.error);

    } catch (error) {

      console.log(error);

    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-10">

      <div className="w-full max-w-5xl">

        <h1 className="text-6xl font-bold text-green-400 mb-4 text-center">
          PrepWise AI
        </h1>

        <p className="text-gray-400 text-center text-xl mb-10">
          Your AI-powered learning assistant for smarter exam preparation.
        </p>

        <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-700">

          <h2 className="text-3xl font-semibold mb-6">
            Paste Your Notes
          </h2>

          <textarea
            placeholder="Paste your engineering notes here..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full h-64 bg-black border border-zinc-700 rounded-2xl p-5 text-white outline-none"
          />

          <button
            onClick={generateSummary}
            className="mt-6 bg-green-500 hover:bg-green-600 px-8 py-4 rounded-2xl text-lg font-semibold"
          >
            {loading ? "Generating..." : "Generate Summary"}
          </button>

        </div>

        {summary && (

          <div className="bg-zinc-900 mt-10 p-8 rounded-3xl border border-zinc-700">

            <h2 className="text-3xl font-bold text-green-400 mb-6">
              AI Summary
            </h2>

            <p className="text-gray-300 whitespace-pre-line leading-8">
              {summary}
            </p>

          </div>

        )}

      </div>

    </main>
  );
}