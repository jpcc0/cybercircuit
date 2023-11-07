import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen px-4 py-8 bg-timeless-noir text-ethereal-ivory font-dm">
      <img src="/Cyber_transparent.png" alt="Cyber Circuit" className="mb-8 w-32 sm:w-24 md:w-32 lg:w-48" />
      <div className="w-full max-w-3xl bg-timeless-noir p-8 rounded shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-4">
          Your privacy is important to us. It is our policy to respect your privacy regarding any information we may collect from you across our website, and other sites we own and operate.
        </p>
        <h2 className="text-2xl font-bold mt-6 mb-4">Information We Collect</h2>
        <p className="mb-4">
          We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we're collecting it and how it will be used.
        </p>
        //
      </div>
      <footer className="w-full text-center text-xl p-4 bg-timeless-noir text-ethereal-ivory">
        <a href="/" className="hover:text-sophisticated-sage">Back to Home</a>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
