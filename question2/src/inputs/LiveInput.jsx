import React, { useState } from "react";

function LiveInput() {
  const [name, setName] = useState("");

  return (
    <div className="box">
      <h2>Form Handling (Live Input Update)</h2>

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

export default LiveInput;