"use client";

import { useState } from "react";

export default function Home() {

  const [notes, setNotes] = useState("");

  const [summary, setSummary] = useState("");
  const [viva, setViva] = useState("");
  const [friend, setFriend] = useState("");
  const [visual, setVisual] = useState("");

  const [quiz, setQuiz] = useState([]);

  const [loading, setLoading] = useState(false);

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submittedAnswers, setSubmittedAnswers] = useState({});

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

      setSummary(data.summary || "");

      setQuiz([]);
      setViva("");
      setFriend("");
      setVisual("");

    } catch (error) {
      console.log(error);
    }

    setLoading(false);

  };

  const generateQuiz = async () => {

    if (!notes) return;

    setLoading(true);

    try {

      const response = await fetch("/api/quiz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ notes }),
      });

      const data = await response.json();

      setQuiz(data.quiz || []);

      setSummary("");
      setViva("");
      setFriend("");
      setVisual("");

      setSelectedAnswers({});
      setSubmittedAnswers({});

    } catch (error) {
      console.log(error);
    }

    setLoading(false);

  };

  const generateViva = async () => {

    if (!notes) return;

    setLoading(true);

    try {

      const response = await fetch("/api/viva", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ notes }),
      });

      const data = await response.json();

      setViva(data.viva || "");

      setSummary("");
      setQuiz([]);
      setFriend("");
      setVisual("");

    } catch (error) {
      console.log(error);
    }

    setLoading(false);

  };

  const generateFriend = async () => {

    if (!notes) return;

    setLoading(true);

    try {

      const response = await fetch("/api/friend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ notes }),
      });

      const data = await response.json();

      setFriend(data.friend || "");

      setSummary("");
      setQuiz([]);
      setViva("");
      setVisual("");

    } catch (error) {
      console.log(error);
    }

    setLoading(false);

  };

  const generateVisual = async () => {

    if (!notes) return;

    setLoading(true);

    try {

      const response = await fetch("/api/visual", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ notes }),
      });

      const data = await response.json();

      setVisual(data.visual || "");

      setSummary("");
      setQuiz([]);
      setViva("");
      setFriend("");

    } catch (error) {
      console.log(error);
    }

    setLoading(false);

  };

  const handleOptionSelect = (questionIndex, option) => {

    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: option,
    });

  };

  const submitAnswer = (questionIndex) => {

    setSubmittedAnswers({
      ...submittedAnswers,
      [questionIndex]: true,
    });

  };
  return (

    <main className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-emerald-950 text-white overflow-hidden relative">

      <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/20 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 blur-[120px] rounded-full animate-pulse"></div>

      <div className="relative z-10 flex items-center justify-center p-10">

        <div className="w-full max-w-6xl">

          <div className="text-center mb-16">

            <h1 className="text-7xl font-extrabold bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 bg-clip-text text-transparent mb-6 animate-pulse">
              PrepWise AI
            </h1>

          
            
        


          <p className="text-gray-400 text-lg mb-10">
            Your Personal AI Study Companion for Smarter Exam Preparation
          </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">

            <div className="float-card bg-green-500/10 border border-green-500/20 rounded-3xl p-6
                  hover:scale-105 hover:-translate-y-2
                  transition-all duration-300 cursor-pointer
                  shadow-lg hover:shadow-green-500/40">

              <h3 className="text-green-400 text-2xl font-bold mb-2">
                ⚡ Fast Summary
              </h3>

              <p className="text-gray-300">
                Convert lengthy notes into concise AI summaries instantly.
              </p>

            </div>

            <div className="float-card bg-blue-500/10 border border-blue-500/20 rounded-3xl p-6
                  hover:scale-105 hover:-translate-y-2
                  transition-all duration-300 cursor-pointer
                  shadow-lg hover:shadow-blue-500/40">

              <h3 className="text-blue-400 text-2xl font-bold mb-2">
                🧠 Smart Quiz
              </h3>

              <p className="text-gray-300">
                Generate MCQs automatically for self-assessment.
              </p>

            </div>

            <div className="float-card bg-purple-500/10 border border-purple-500/20 rounded-3xl p-6
                  hover:scale-105 hover:-translate-y-2
                  transition-all duration-300 cursor-pointer
                  shadow-lg hover:shadow-purple-500/40">

              <h3 className="text-purple-400 text-2xl font-bold mb-2">
                🎤 Viva Ready
              </h3>

              <p className="text-gray-300">
                Prepare interview and viva questions instantly.
              </p>
    

            </div>
          
            </div>
            <div className="bg-white/5 border border-white/10 backdrop-blur-2xl  shadow-2xl shadow-cyan-500/10 rounded-[40px] p-8 mt-10">

              <h2 className="text-4xl font-bold mb-8 text-center">
                Paste Your Notes
              </h2>

              <textarea
                placeholder="Paste your notes here..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full h-72 bg-black/40 border border-white/10 rounded-3xl p-6 text-lg text-white outline-none resize-none focus:ring-2 focus:ring-green-400 transition-all duration-300"
              />

              <div className="flex flex-wrap justify-center gap-4 mt-8">

                <button
                  onClick={generateSummary}
                  className="bg-green-500 hover:scale-110 transition-all duration-300 px-6 py-3 rounded-xl font-bold shadow-xl"
                >
                  📝 Summary
                </button>

                <button
                  onClick={generateQuiz}
                  className="bg-blue-500 hover:scale-110 transition-all duration-300 px-6 py-3 rounded-xl font-bold shadow-xl"
                >
                  🧠 Quiz
                </button>

                <button
                  onClick={generateViva}
                  className="bg-purple-500 hover:scale-110 transition-all duration-300 px-6 py-3 rounded-xl font-bold shadow-xl">
                   Viva Ready
                </button>

                <button
                  onClick={generateFriend}
                  className="bg-orange-500 hover:scale-110 transition-all duration-300 px-6 py-3 rounded-xl font-bold shadow-xl"
                >
                  🤝 Explain Like Friend
                </button>

                <button
                  onClick={generateVisual}
                  className="bg-cyan-500 hover:scale-110 transition-all duration-300 px-6 py-3 rounded-xl font-bold shadow-xl">
                  🎨 Smart Visualizer
                </button>

              </div>

              {loading && (
                <div className="text-center mt-8 text-green-400 text-xl">
                  <div className="flex flex-col items-center gap-4">

                    <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-green-400"></div>

                    <div className="text-green-400 font-bold text-xl">
                      🤖 AI is Thinking...
                    </div>

                  </div>
                </div>
              )}
              </div>

              {summary && (

                <div className="mt-10 bg-green-500/10 p-8 rounded-3xl">

                  <h2 className="text-3xl font-bold text-green-400 mb-4">
                    AI Summary
                  </h2>

                  <div className="whitespace-pre-wrap">
                    {summary}
                  </div>

                </div>

              )}

              {viva && (

                <div className="mt-10 bg-purple-500/10 p-8 rounded-3xl">

                  <h2 className="text-3xl font-bold text-purple-400 mb-4">
                    Viva Questions
                  </h2>

                  <div className="whitespace-pre-wrap">
                    {viva}
                  </div>

                </div>

              )}

              {friend && (

                <div className="mt-10 bg-orange-500/10 p-8 rounded-3xl">

                  <h2 className="text-3xl font-bold text-orange-400 mb-4">
                    Explain Like a Friend
                  </h2>

                  <div className="whitespace-pre-wrap">
                    {friend}
                  </div>

                </div>

              )}

              {visual && (

                <div className="mt-10 bg-cyan-500/10 p-8 rounded-3xl">

                  <h2 className="text-3xl font-bold text-cyan-400 mb-4">
                    Visual Learning
                  </h2>

                  <pre className="bg-black/30 p-6 rounded-2xl whitespace-pre-wrap overflow-x-auto text-lg leading-8 border border-cyan-500/30">
                    {visual}
                  </pre>

                </div>

              )}

              {quiz.length > 0 && (

                <div className="mt-10">

                  <h2 className="text-4xl font-bold text-blue-400 mb-8">
                    Interactive Quiz
                  </h2>

                  {quiz.map((q, index) => (

                    <div
                      key={index}
                      className="bg-blue-500/10 p-8 rounded-3xl mb-8"
                    >

                      <h3 className="text-xl font-bold mb-6">
                        {index + 1}. {q.question}
                      </h3>

                      <div className="grid gap-4">

                        {q.options.map((option, optionIndex) => (

                          <button
                            key={optionIndex}
                            onClick={() =>
                              handleOptionSelect(index, option)
                            }
                            className={`p-4 rounded-xl border transition-all
                        ${selectedAnswers[index] === option
                                ? "bg-blue-500 border-blue-300"
                                : "bg-black/20 border-white/10"
                              }`}
                          >
                            {option}
                          </button>

                        ))}

                      </div>

                      <button
                        onClick={() => submitAnswer(index)}
                        className="mt-6 bg-green-500 px-5 py-3 rounded-xl font-bold"
                      >
                        Submit Answer
                      </button>

                      {submittedAnswers[index] && (

                        <div className="mt-4">

                          {selectedAnswers[index] === q.answer ? (

                            <div className="text-green-400 text-xl font-bold">
                              Correct ✅
                            </div>

                          ) : (

                            <div className="text-red-400">

                              <div className="font-bold text-xl">
                                Wrong ❌
                              </div>

                              <div className="mt-2">
                                Correct Answer: {q.answer}
                              </div>

                            </div>

                          )}

                        </div>

                      )}

                    </div>

                  ))}

                </div>

              )}

              <footer className="text-center mt-16 text-gray-500">
                Built with ❤️ using Next.js + Groq AI
              </footer>

            </div>
          </div>

    </main>
  );
}