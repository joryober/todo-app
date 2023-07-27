import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [itemName, setItemName] = useState("");
  const [itemList, setItemList] = useState([]);

  const handleItemClick = (id) => {
    setItemList((itemList) => itemList.filter((item) => item.id !== id));
  };

  const handleInputClick = (itemName) => {
    setItemList((itemList) => [...itemList, { name: itemName, id: uuidv4() }]);
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

      {itemList.map((item, idx) => {
        return (
          <Item
            key={item.id}
            id={item.id}
            itemName={item.name}
            handleItemClick={handleItemClick}
          />
        );
      })}
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

const Item = ({ handleItemClick, itemName, id }) => {
  return (
    <>
      <li>{itemName}</li>
      <button onClick={() => handleItemClick(id)}>Remove</button>
    </>
  );
};

export default App;
