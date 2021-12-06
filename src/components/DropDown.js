import React, { useState } from "react";
import List from "./List";

const DropDown = ({ data }) => {
  const [baseCurrency, setBaseCurrency] = useState("EUR");

  const handleChange = (e) => {
    setBaseCurrency(e.target.value);
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
      <List baseCurrency={baseCurrency} />
    </div>
  );
};

export default DropDown;
