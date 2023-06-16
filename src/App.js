import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by Sophie Ranjbaran and is{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/safoora1986/reactpro"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
