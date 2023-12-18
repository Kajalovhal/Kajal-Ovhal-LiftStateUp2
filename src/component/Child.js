import React from "react";

const Child = ({ cartItem, onRemoveItem }) => {
  return (
    <div className="Child">
      <h4>Child Component</h4>
      <ul>
        {cartItem.map((item) => (
          <li key={item.id}>
            <span>{item.id}.</span>
            <span id="itemName">{item.name}</span>||
            <span id="itemPrice">${item.price}</span>||
            <button onClick={() => onRemoveItem(item.id)}>Remove</button>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Child;
