import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/subscribe', { email });
      setMessage(response.data.message);
      setEmail('');
    } catch (error) {
      setMessage('There was an error subscribing');
    }
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center bg-gray-100">
      <img src="/logo.png" alt="Logo" className="mb-8" />
      <form onSubmit={handleSubscribe} className="flex flex-col items-center">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="p-2 border border-gray-300 rounded mb-4"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded"
        >
          Subscribe
        </button>
      </form>
      {message && <p className="text-green-500 mt-4">{message}</p>}
      <footer className="absolute bottom-0 w-full text-center p-4">
        <a href="/privacy-policy" className="text-gray-600 text-sm">Privacy Policy</a>
      </footer>
    </div>
  );
}

export default App;
