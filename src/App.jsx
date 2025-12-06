import { useState, useEffect } from "react";

function App() {
  // 1. State to store users
  const [users, setUsers] = useState([]);

  // 2. State for loading status
  const [loading, setLoading] = useState(true);

  // 3. State for error message
  const [error, setError] = useState(null);

  // 4. Function to fetch API data
  const getUsers = async () => {
    try {
      setLoading(true); // before fetching

      let response = await fetch("https://jsonplaceholder.typicode.com/users");

      if (!response.ok) {
        throw new Error("Failed to fetch data.");
      }

      let data = await response.json();

      setUsers(data); // store data in state
      setError(null); // clear any old errors
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false); // done loading
    }
  };

  // 5. Run fetch function when component loads
  useEffect(() => {
    getUsers();
  }, []);

  // 6. UI render
  return (
    <div style={{ padding: "20px" }}>
      <h1>User List</h1>

      {/* Loading */}
      {loading && <p>Loading users...</p>}

      {/* Error */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Show users */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> — {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
