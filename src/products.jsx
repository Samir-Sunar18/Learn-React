import React, { useState } from "react";

function Products({ age, data }) {
  const [a, setA] = useState(false);

  return (
    <div className="text-white w-full h-60 p-6 bg-zinc-900">
      {/* Display data from props */}
      <h1 className="text-2xl mb-2">{data.name}</h1>
      <p>Age: {age}</p>
      <p>Address: {data.address}</p>
      <p>Phone: {data.Phone}</p>
      <h4 className={`${a === false ? "text-red-500" : "text-blue-400"}`}>
        {a === false ? "hello" : "hey"}
      </h4>
      <button
        onClick={() => setA(!a)}
        className="mt-4 px-6 py-2 bg-purple-500 rounded hover:bg-purple-600"
      >
        Change
      </button>
    </div>
  );
}

export default Products;

// {To be Contd..}

