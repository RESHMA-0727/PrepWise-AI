"use client";

import { useState } from "react";

export default function Home() {

  const [notes, setNotes] = useState("");

  return (

    <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-green-950 text-white overflow-hidden relative">

      {/* Animated Glow Effects */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/20 blur-[120px] rounded-full animate-pulse"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 blur-[120px] rounded-full animate-pulse"></div>

      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-purple-500/10 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>

      <div className="relative z-10 flex items-center justify-center p-10">

        <div className="w-full max-w-6xl">

          {/* Hero Section */}

          <div className="text-center mb-16 animate-fadeIn">

            <h1 className="text-7xl md:text-8xl font-extrabold bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 bg-clip-text text-transparent mb-6 drop-shadow-2xl animate-pulse">
              PrepWise AI
            </h1>

            <p className="text-gray-300 text-2xl max-w-4xl mx-auto leading-10">
              Your AI-powered learning assistant for smarter exam preparation,
              interactive quizzes, and viva practice.
            </p>

          </div>

          {/* Feature Cards */}

          <div className="grid md:grid-cols-3 gap-8 mb-14">

            <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-3xl hover:scale-105 hover:border-green-400 transition-all duration-500 shadow-2xl">

              <div className="text-5xl mb-5">📝</div>

              <h2 className="text-3xl font-bold text-green-400 mb-4">
                AI Summary
              </h2>

              <p className="text-gray-400 text-lg leading-8">
                Generate simple and quick summaries from lengthy technical notes.
              </p>

            </div>

            <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-3xl hover:scale-105 hover:border-blue-400 transition-all duration-500 shadow-2xl">

              <div className="text-5xl mb-5">🧠</div>

              <h2 className="text-3xl font-bold text-blue-400 mb-4">
                Interactive Quiz
              </h2>

              <p className="text-gray-400 text-lg leading-8">
                Practice MCQs with instant correct/wrong feedback.
              </p>

            </div>

            <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-3xl hover:scale-105 hover:border-purple-400 transition-all duration-500 shadow-2xl">

              <div className="text-5xl mb-5">🎤</div>

              <h2 className="text-3xl font-bold text-purple-400 mb-4">
                Viva Questions
              </h2>

              <p className="text-gray-400 text-lg leading-8">
                Prepare important viva and interview questions instantly.
              </p>

            </div>

          </div>

          {/* Input Section */}

          <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[40px] p-10 shadow-[0_0_50px_rgba(0,255,150,0.1)]">

            <h2 className="text-4xl font-bold mb-8 text-center">
              Paste Your Notes
            </h2>

            <textarea
              placeholder="Paste your engineering notes here..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full h-72 bg-black/40 border border-white/10 rounded-3xl p-6 text-lg text-white outline-none focus:border-green-400 transition-all duration-300"
            />

            <div className="flex flex-wrap justify-center gap-6 mt-8">

              <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:scale-110 transition-all duration-300 px-10 py-5 rounded-2xl text-xl font-bold shadow-[0_0_25px_rgba(0,255,150,0.5)]">
                Generate Summary
              </button>

              <button className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:scale-110 transition-all duration-300 px-10 py-5 rounded-2xl text-xl font-bold shadow-[0_0_25px_rgba(0,150,255,0.5)]">
                Generate Quiz
              </button>

              <button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:scale-110 transition-all duration-300 px-10 py-5 rounded-2xl text-xl font-bold shadow-[0_0_25px_rgba(180,0,255,0.5)]">
                Viva Questions
              </button>

            </div>

          </div>

          {/* Footer */}

          <footer className="text-center mt-16 text-gray-500 text-lg">
            Built with ❤️ using Next.js + Groq AI
          </footer>

        </div>

      </div>

    </main>

  );
}