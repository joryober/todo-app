import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <Item />
      <Item />
      <Item />
    </>
  );
}

const handleClick = () => {
  return;
};

const Item = () => {
  return (
    <>
      <li>Item text goes here</li>
      <button onClick={handleClick}>Click me</button>
    </>
  );
};

export default App;
