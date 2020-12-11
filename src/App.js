import logo from "./logo.svg";
import "./App.css";
import Controller from "./components/Controller/Controller";

function App() {
  return (
    <div className="softlight-app">
      <header>
        <h3>SoftLight</h3>
        <p>Designed By Ferrous Designer</p>
      </header>
      <Controller />
    </div>
  );
}

export default App;
