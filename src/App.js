import logo from "./logo.svg";
import "./App.css";
import Sort from './Components/Sort'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Sac State Class Schedule App</h1>
        <Sort />
      </header>
    </div>
  );
}

export default App;
