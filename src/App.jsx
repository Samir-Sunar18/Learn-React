import React, { useState } from "react";

function App() {
  const [a, b] = useState(24);
  {
    const increaseValue = () => {
      setA(a + 1); // adds 1 to current value
    };
    return (
      <div className="w-full h-screen bg-zinc-900 text-white p-6">
        <h1 className="text-4xl">Value: {a}</h1>
        <button
          onClick={() => b(26)}
          className="mt-4 px-4 py-2 bg-blue-500 rounded hover:bg-blue-600"
        >
          Increase
        </button>
      </div>
    );
  }
}

export default App;
