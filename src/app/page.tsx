"use client";

import { useState } from "react";

export default function Home() {
  const [answer, setAnswer] = useState("");
  const [message, setMessage] = useState("");
  const [numbers, setNumbers] = useState([1, 2, 3, 4]);

  const generateNumbers = () => {
    const newNumbers = [];
    
    for (let i = 0; i < 4; i++) {
      newNumbers.push(Math.floor(Math.random() * 9) + 1);
    }
    setNumbers(newNumbers);
  }

  const checkAnswer = () => {
    const result = eval(answer);

    if (result === 10) {
      setMessage("Correct! You made 10!");
    } else {
      setMessage("Try again!");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Make 10 App</h1>
      <p className="mt-4 text-lg">Let's make 10 with 4 numbers!</p>

      <div>
        {numbers.map((number, index) => (
          <span key={index} className="mx-2 text-2xl font-bold">
            {number}
          </span>
        ))}
      </div>

      <button onClick={generateNumbers} className="mt-4 px-4 py-2 bg-green-500 text-white rounded">
        Generate New Numbers
        </button>

      <input 
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Enter your expression here" 
        className="mt-4 p-2 border rounded" 
      />

      <p className="mt-4 text-lg">{answer}</p>

      <button onClick={checkAnswer} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Check</button>
      <p className="mt-4 text-lg">{message}</p>
    </main>
  );
}