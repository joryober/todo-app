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
    itemName &&
      setItemList((itemList) => [
        ...itemList,
        { name: itemName, id: uuidv4() },
      ]);
    setItemName("");
  };

  const handleKeyDown = (event, itemName) => {
    if (event.key === "Enter") {
      handleInputClick(itemName);
    }
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
        handleKeyDown={handleKeyDown}
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

const InputBox = ({
  itemName,
  handleInputClick,
  handleInputChange,
  handleKeyDown,
}) => {
  return (
    <div>
      <input
        style={{ marginRight: "5px" }}
        type="text"
        value={itemName}
        onChange={handleInputChange}
        onKeyDown={() => handleKeyDown(event, itemName)}
        autoFocus
      />
      <button onClick={() => handleInputClick(itemName)}>Add item</button>
    </div>
  );
};

const Item = ({ handleItemClick, itemName, id }) => {
  return (
    <ul>
      <li style={{ paddingBottom: "5px" }}>{itemName}</li>
      <button onClick={() => handleItemClick(id)}>Remove</button>
    </ul>
  );
};

export default App;
