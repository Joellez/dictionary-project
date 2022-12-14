import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary />
        </main>
        <footer className=" App-footer pb-3">
          <small>
            {" "}
            <a
              href="https://github.com/Joellez/dictionary-project"
              target="_blank"
              rel="noreferrer"
              title="Github"
            >
              Open-source code
            </a>{" "}
            by{" "}
            <a
              href="https://uk.linkedin.com/in/joellezane"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
            >
              Joelle Zane
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
