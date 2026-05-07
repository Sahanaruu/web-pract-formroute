import React, { useState } from "react";

function Home() {
  const [name, setName] = useState("");

  return (
    <div>
      <h2>Home Page</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h3>Your Name: {name}</h3>
    </div>
  );
}

export default Home;