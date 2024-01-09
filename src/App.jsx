import { useState } from "react";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleInputChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <main>
      <UserInput userInput={userInput} onChange={handleInputChange} />
      {!inputIsValid && (
        <p className="center">
          The duration must be greater than or equal to 1.
        </p>
      )}
      {inputIsValid && <Results input={userInput} />}
    </main>
  );
}

export default App;
