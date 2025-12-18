import React, { useState } from "react";

function App() {
  const [a, SetA] = useState(24);

  return (
    <div className="w-full h-screen bg-zinc-900 text-white p-6">
      <h1 className="text-4xl">Value: {a}</h1>
      <button
        onClick={() => SetA(a + 1)} // inline function
        className="mt-4 px-6 py-3 bg-purple-500 rounded-full text-white font-bold hover:bg-purple-600  hover:scale-110 transition-transform duration-300 cursor-pointer shadow-lg"
      >
        Increase
      </button>
    </div>
  );
}

export default App;
