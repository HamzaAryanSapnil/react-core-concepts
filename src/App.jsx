import { useEffect, useState } from "react";
import "./App.css";
import Counter from "./Counter";
import Team from "./Team";
import UseEffectModule from "./UseEffectModule";
import Friends from "./Friends";

function App() {
  
  
  const handleClick = () => {
    alert("button clicked");
  };
  return (
    <>
    <Friends></Friends>
    {/* <UseEffectModule></UseEffectModule> */}
    <Team></Team>
    <Counter></Counter>
      <h3>Vite + React</h3>
      <button onClick={handleClick} >click me</button>
    </>
  );
}

export default App;
