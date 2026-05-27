"use client";

import { useState } from "react";

export default function Home() {

  const [notes, setNotes] = useState("");

  const [summary, setSummary] = useState("");
  const [quiz, setQuiz] = useState("");
  const [viva, setViva] = useState("");

  const [summaryLoading, setSummaryLoading] = useState(false);
  const [quizLoading, setQuizLoading] = useState(false);
  const [vivaLoading, setVivaLoading] = useState(false);

  const handleFileUpload = async (e) => {

    const file = e.target.files[0];

    if (!file) return;

    const formData = new FormData();

    formData.append("pdf", file);

    try {

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      setNotes(data.text);

    } catch (error) {

      console.log(error);

    }

  };

  const generateSummary = async () => {

    if (!notes) return;

    setSummaryLoading(true);

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

      setQuiz("");
      setViva("");

    } catch (error) {

      console.log(error);

    }

    setSummaryLoading(false);
  };

  const generateQuiz = async () => {

    if (!notes) return;

    setQuizLoading(true);

    try {

      const response = await fetch("/api/quiz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ notes }),
      });

      const data = await response.json();

      setQuiz(data.quiz || data.error);

      setSummary("");
      setViva("");

    } catch (error) {

      console.log(error);

    }

    setQuizLoading(false);
  };

  const generateViva = async () => {

    if (!notes) return;

    setVivaLoading(true);

    try {

      const response = await fetch("/api/viva", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ notes }),
      });

      const data = await response.json();

      setViva(data.viva || data.error);

      setSummary("");
      setQuiz("");

    } catch (error) {

      console.log(error);

    }

    setVivaLoading(false);
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

          <input
            type="file"
            accept=".pdf"
            onChange={handleFileUpload}
            className="mb-6"
          />

          <textarea
            placeholder="Paste your engineering notes here..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full h-64 bg-black border border-zinc-700 rounded-2xl p-5 text-white outline-none"
          />

          <div className="flex gap-4 mt-6 flex-wrap">

            <button
              onClick={generateSummary}
              className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-2xl text-lg font-semibold"
            >
              {summaryLoading ? "Generating..." : "Generate Summary"}
            </button>

            <button
              onClick={generateQuiz}
              className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-2xl text-lg font-semibold"
            >
              {quizLoading ? "Generating..." : "Generate Quiz"}
            </button>

            <button
              onClick={generateViva}
              className="bg-purple-500 hover:bg-purple-600 px-8 py-4 rounded-2xl text-lg font-semibold"
            >
              {vivaLoading ? "Generating..." : "Viva Questions"}
            </button>

          </div>

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

        {quiz && (

          <div className="bg-zinc-900 mt-10 p-8 rounded-3xl border border-zinc-700">

            <h2 className="text-3xl font-bold text-blue-400 mb-6">
              AI Quiz
            </h2>

            <p className="text-gray-300 whitespace-pre-line leading-8">
              {quiz}
            </p>

          </div>

        )}

        {viva && (

          <div className="bg-zinc-900 mt-10 p-8 rounded-3xl border border-zinc-700">

            <h2 className="text-3xl font-bold text-purple-400 mb-6">
              Viva Questions
            </h2>

            <p className="text-gray-300 whitespace-pre-line leading-8">
              {viva}
            </p>

          </div>

        )}

      </div>

    </main>

  );
}