import { useState } from "react";
import "./App.css";

function App() {
  const [itemName, setItemName] = useState("");
  const [itemList, setItemList] = useState([]);

  const handleItemClick = () => {
    return;
  };

  const handleInputClick = (itemName) => {
    setItemList((itemList) => [...itemList, itemName]);
    setItemName("");
  };

  const handleInputChange = (event) => {
    setItemName(event.target.value);
  };

  return (
    <>
      <h1>Todo App</h1>

      <InputBox
        itemName={itemName}
        handleInputChange={handleInputChange}
        handleInputClick={handleInputClick}
      />

      <hr />

      {itemList.map((item) => (
        <Item itemName={item} handleItemClick={handleItemClick} />
      ))}
    </>
  );
}

const InputBox = ({ itemName, handleInputClick, handleInputChange }) => {
  return (
    <>
      <input type="text" value={itemName} onChange={handleInputChange} />
      <button onClick={() => handleInputClick(itemName)}>Add item</button>
    </>
  );
};

const Item = ({ handleItemClick, itemName }) => {
  return (
    <>
      <li>{itemName}</li>
      <button onClick={() => handleItemClick(itemName)}>Click me</button>
    </>
  );
};

export default App;
