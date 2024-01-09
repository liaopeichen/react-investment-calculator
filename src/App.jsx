import { useState } from "react";
import Result from "./components/Result";
import UserInput from "./components/UserInput";

function App() {
  const [initialInvestment, setInitialInvestment] = useState("");
  const [annualInvestment, setAnnualInvestment] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
  const [duration, setDuration] = useState("");

  return (
    <main>
      <div id="user-input">
        <UserInput
          label="initial investment"
          value={initialInvestment}
          onChange={setInitialInvestment}
        />
        <UserInput
          label="annual investment"
          value={annualInvestment}
          onChange={setAnnualInvestment}
        />
        <UserInput
          label="expected return"
          value={expectedReturn}
          onChange={setExpectedReturn}
        />
        <UserInput label="duration" value={duration} onChange={setDuration} />
      </div>
      <div id="result">
        <Result
          initialInvestment={initialInvestment}
          annualInvestment={annualInvestment}
          expectedReturn={expectedReturn}
          duration={duration}
        />
      </div>
    </main>
  );
}

export default App;
