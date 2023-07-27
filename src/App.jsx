import { useState } from "react";
import "./App.css";

function App() {
  const [itemName, setItemName] = useState("");
  const [itemList, setItemList] = useState([]);

  const handleItemClick = () => {
    return;
  };

  const handleInputClick = () => {
    return;
  };

  const handleInputChange = (event) => {
    setItemName(event.target.value);
  };

  return (
    <>
      <h1>Todo App</h1>

      <InputBox handleInputClick={handleInputClick} />

      <hr />

      <Item handleItemClick={handleItemClick} />
    </>
  );
}

const InputBox = ({ handleInputClick }) => {
  return (
    <>
      <input type="text" />
      <button onClick={handleInputClick}>Add item</button>
    </>
  );
};

const Item = ({ handleItemClick }) => {
  return (
    <>
      <li>Item text goes here</li>
      <button onClick={handleItemClick}>Click me</button>
    </>
  );
};

export default App;
