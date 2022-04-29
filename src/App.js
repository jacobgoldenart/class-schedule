import logo from "./logo.svg";
import "./App.css";
import Test from './Test'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Sac State Class Schedule App</h1>
        <Test test="Test" />
      </header>
    </div>
  );
}

export default App;
