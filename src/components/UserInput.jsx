import { useState } from "react";

export default function UserInput({ label }) {
  const [userInput, setUserInput] = useState("");

  function handleInputChange(event) {
    setUserInput(event.target.value);
  }

  return (
    <div className="input-group">
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
        type="number"
        onChange={handleInputChange}
        value={userInput}
      />
    </div>
  );
}
