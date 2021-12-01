import React, { useState } from "react";
import List from "./List";

const DropDown = ({ data }) => {
  const [currency, setCurrency] = useState("EUR");

  const handleChange = (e) => {
    setCurrency(e.target.value);
  };

  return (
    <div className="exchange">
      <h3>Select a BaseCoin</h3>
      <select onChange={handleChange}>
        <option value="Select a coin"> -- -- </option>

        {data &&
          Object.keys(data).map((keyName, i) => (
            <option key={keyName}>{keyName}</option>
          ))}
      </select>
      <List currency={currency} />
    </div>
  );
};

export default DropDown;
