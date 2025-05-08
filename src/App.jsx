import { useState } from "react";
import red from "./assets/red.svg";
import green from "./assets/green.svg";
import blue from "./assets/blue.svg";
import "./App.css";

function App() {
    return (
    <body>
      <div class="topnav">
        <h3>Tariq's Portfolio Site</h3>
      </div>

      <div className="content">
       <h1>Welcome to my (simple) website</h1>
       <div className="card">
	<a href="https://github.com/c0demonky" target="_blank">
 <img src={green} className="icon" alt="Green Folder" />          
<p>My Github</p>
        </a>
	</div>
	<div className="card">
        <a
          href="https://linkedin.com/in/tariq-alkhalaileh-14737a152/"
          target="_blank"
        >
	 <img src={blue} className="icon" alt="Blue Folder" />
          <p>Connect on LinkedIn!</p>
        </a>
</div>
	<div className="card">
        <a href="https://kaggle.com/talk021" target="_blank">
	 <img src={red} className="icon" alt="Red Folder" />
		<p>ML fun</p>
        </a>
      </div>
	</div>
    </body>
  );
}

export default App;
