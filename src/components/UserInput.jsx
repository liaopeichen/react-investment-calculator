import { useState } from "react";

export default function UserInput({ label, value, onChange }) {
  function handleInputChange(event) {
    onChange(event.target.value);
  }

  return (
    <div className="input-group">
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
        type="number"
        onChange={handleInputChange}
        value={value}
      />
    </div>
  );
}
