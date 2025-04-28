"use client";
import React, { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email.");
    } else {
      setError("");
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email.");
        return;
      }
      setIsSubmitted(true);
    } else {
      console.log("Please enter a valid email.");
    }
  };

  return (
    <>
      {!isSubmitted ? (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-700">
          <h1 className="text-2xl font-bold mb-4">Welcome to My App</h1>
          {error && (
            <label htmlFor="email" className="text-red-500 mb-4">
              {error}
            </label>
          )}
          <input
            type="email"
            value={email}
            name="email"
            onChange={handleChange}
            placeholder="Enter your email"
            className="border p-2 mb-4"
          />
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Submit
          </button>
        </div>
      ) : (
        <div>
          <h1 className="text-2xl font-bold mb-4">Welcome to My App</h1>
          <p className="mt-4">Email submitted successfully!</p>
        </div>
      )}
    </>
  );
}
