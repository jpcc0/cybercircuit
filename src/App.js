import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      const response = await axios.post('/api/subscribe', { email });
      setMessage(response.data.message);
      setEmail('');
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-start h-screen bg-timeless-noir">
      <img src="/Cyber_transparent.png" alt="Cyber Circuit" className="mb-8 w-56 sm:w-24 md:w-32 lg:w-48" />
      <form onSubmit={handleSubmit} className="w-full max-w-xs px-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-2xl leading-tight focus:outline-none focus:shadow-outline mb-6 font-dm text-center border-sophisticated-sage text-timeless-noir"
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="flex justify-center">
          <button
            className="bg-muted-moss hover:bg-sophisticated-sage font-dm transition duration-300 text-2xl text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Subscribe
          </button>
        </div>
      </form>
      {message && <p className="text-center mt-4 text-2xl font-dm text-timeless-noir">{message}</p>}
      <footer className="absolute bottom-0 w-full text-center text-xl p-4 font-dm bg-timeless-noir text-ethereal-ivory transition duration-300">
        <a href="/privacy-policy" className="hover:text-sophisticated-sage">Privacy Policy</a> | <a href="https://github.com/jpcc0/cybercircuit" className="hover:text-sophisticated-sage">GitHub</a>
      </footer>
    </div>
  );
  
}

export default App;
