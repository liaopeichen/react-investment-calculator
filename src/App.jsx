import Result from "./components/Result";
import UserInput from "./components/UserInput";

function App() {
  return (
    <main>
      <div id="user-input">
        <UserInput label="initial investment" />
        <UserInput label="annual investment" />
        <UserInput label="expected return" />
        <UserInput label="duration" />
      </div>
      <div id="result">
        <Result />
      </div>
    </main>
  );
}

export default App;
