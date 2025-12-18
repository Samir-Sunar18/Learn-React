import React, { useState } from "react";
import Products from "./Products";

function App() {
  const [a, setA] = useState(false); // Conditional rendering

  return (
    <div className="w-full h-screen text-white bg-gray-900 flex items-center justify-center">
      <Products
        age={34}
        data={{ name: "Samir", address: "Lalitpur", Phone: "239873827" }}
      />
    </div>
  );
}

export default App;
