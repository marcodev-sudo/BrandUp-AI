import { useState } from 'react';

export default function Home() {
  const [inputType, setInputType] = useState('name'); // 'name' or 'details'

  const handleToggleInput = () => {
    setInputType(inputType === 'name' ? 'details' : 'name');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold mb-6">
          BrandUp
        </h1>

        <p className="mt-3 text-2xl mb-8">
          {inputType === 'name' ? 'Enter your company name:' : 'Enter details about your company:'}
        </p>

        <div className="flex items-center justify-center w-full max-w-md">
          <input
            type="text"
            placeholder={inputType === 'name' ? 'Company Name' : 'Company details (e.g., industry, size, mission)'}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <button className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Get Started
          </button>
        </div>

        <button
          onClick={handleToggleInput}
          className="mt-4 text-blue-500 hover:underline"
        >
          Switch to {inputType === 'name' ? 'Company Details Input' : 'Company Name Input'}
        </button>
      </main>
    </div>
  );
}
