import { useState } from "react";
import red from "./assets/red.svg";
import green from "./assets/green.svg";
import blue from "./assets/blue.svg";
import "./App.css";

function Card({ url, asset, alt_desc, info }) {
  return (
    <div className="card">
      <a href={url} target="_blank">
        <img src={asset} className="icon" alt={alt_desc} />
        <p>{info}</p>
      </a>
    </div>
  );
}

function Topnav({mytitle}) {
	
return(
	<div class="topnav">
        <h3>{mytitle}</h3>
      </div>
);
}

function Body({descriptors}) {	
const [descriptor, setDescriptor] = useState(descriptors[0]);
return(
	<body>
	<Topnav mytitle={"Tariq's Portfolio"}/>
        <h1>Welcome to my <button onClick={() => setDescriptor(descriptors[Math.floor(Math.random() * descriptors.length)])}>({descriptor})</button> website</h1>
        <Card
          url={"https://github.com/c0demonky"}
          asset={green}
          alt_desc={"Green Folder"}
          info={"Github"}
        />
        <Card
          url={"https://kaggle.com/talk021"}
          asset={red}
          alt_desc={"Red Folder"}
          info={"Kaggle"}
        />
        <Card
          url={"https://linkedin.com/in/tariq-alkhalaileh-14737a152/"}
          asset={blue}
          alt_desc={"Blue Folder"}
          info={"LinkedIn"}
        />
	</body>
);

}
function App() {
  return (
    <Body descriptors={DESCRIPTORS}/>
  );
}

const DESCRIPTORS = ['simple', 'basic', 'elementary', 'uncomplicated', 'easy', 'manageable'];

export default App;
