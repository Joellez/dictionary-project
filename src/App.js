import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary />
        </main>
        <footer className=" App-footer">
          <small> Open-source code by Joelle Zane </small>
        </footer>
      </div>
    </div>
  );
}

export default App;