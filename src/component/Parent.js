import React, { useState } from "react";
import "./Child";
import Child from "./Child";

const Parent = () => {
  const [cartItem, setCartItem] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [newPrice, setPriceItem] = useState("");

  const handleAddItem = () => {
    if (newItem && newPrice) {
      const newItemObject = {
        id: cartItem.length + 1,
        name: newItem,
        price: parseFloat(newPrice),
      };

      setCartItem((prevItems) => [...prevItems, newItemObject]);
      setNewItem("");
      setPriceItem("");
    }
  };
  const handleRemoveItem = (itemId) => {
    setCartItem((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };
  return (
    <div className="Parent">
      <h3>Parent Component</h3>
      <div className="Fld-input">
        <label>
          Input Name:
          <input
            type="text"
            id="itemInput"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
        </label>
        <label>
          Input price:
          <input
            type="number"
            id="newPrice"
            value={newPrice}
            onChange={(e) => setPriceItem(e.target.value)}
          />
        </label>
        <button onClick={handleAddItem}>Add Item</button>
      </div>
      <Child cartItem={cartItem} onRemoveItem={handleRemoveItem} />
    </div>
  );
};

export default Parent;
