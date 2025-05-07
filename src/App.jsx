import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <body>
      <div class="topnav">
        <a href="https://github.com/c0demonky" target="_blank">
          My Github
        </a>
        <a
          href="https://linkedin.com/in/tariq-alkhalaileh-14737a152/"
          target="_blank"
        >
          Connect on LinkedIn!
        </a>
        <a href="https://kaggle.com/talk021" target="_blank">
          ML fun
        </a>
      </div>

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </body>
  );
}

export default App;
