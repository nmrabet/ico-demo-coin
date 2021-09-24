import React, { useRef } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import Start from "./components/Start";
import About from "./components/About";
import Whitepaper from "./components/Whitepaper";
import Roadmap from "./components/Roadmap";
import Contribute from "./components/Contribute";
import Team from "./components/Team";
import web3 from "./components/Web3";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

function App() {
  const myRefAbout = useRef(null);
  const myRefWhitepaper = useRef(null);
  const myRefRoadmap = useRef(null);
  const myRefTeam = useRef(null);
  const myRefContribute = useRef(null);
  const executeScroll = () => scrollToRef(myRefAbout);
  const executeScroll2 = () => scrollToRef(myRefWhitepaper);
  const executeScroll3 = () => scrollToRef(myRefRoadmap);
  const executeScroll4 = () => scrollToRef(myRefContribute);
  const executeScroll5 = () => scrollToRef(myRefTeam);

  console.log(web3.version);
  return (
    <div className="App">
      <nav>
        <a href="/" className="titleICO">
          <span class="material-icons">group_work</span>
          <span>DEMO ICO</span>
        </a>

        <div className="middleNav">
          <a id="about">
            <Button onClick={executeScroll}>About</Button>
          </a>
          <a id="whitepaper">
            <Button onClick={executeScroll2}>Whitepaper</Button>
          </a>
          <a id="roadmap">
            <Button onClick={executeScroll3}>Roadmap</Button>
          </a>
          <a id="contribute">
            <Button onClick={executeScroll4}>Contribute</Button>
          </a>
          <a id="team">
            <Button onClick={executeScroll5}>Team</Button>
          </a>
        </div>

        <div className="myAccountBox">
          <div className="rightNav">
            <span class="material-icons">account_box</span>
          </div>
          <div className="address">Address: </div>
          <div className="eth">ETH:</div>
          <div className="dctoken">My DC:</div>
        </div>
      </nav>

      <div id="startDiv">
        <Start />
      </div>
      <div id="aboutDiv" ref={myRefAbout}>
        <About />
      </div>
      <div id="whitepaperDiv" ref={myRefWhitepaper}>
        <Whitepaper />
      </div>
      <div id="roadmapDiv" ref={myRefRoadmap}>
        <Roadmap />
      </div>
      <div id="contributeDiv" ref={myRefContribute}>
        <Contribute />
      </div>
      <div id="teamDiv" ref={myRefTeam}>
        <Team />
      </div>
    </div>
  );
}

export default App;
