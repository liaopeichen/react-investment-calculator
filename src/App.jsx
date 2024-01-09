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
    </main>
  );
}

export default App;
