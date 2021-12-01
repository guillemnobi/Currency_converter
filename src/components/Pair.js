import React, { useState } from "react";
import axios from "axios";

const Pair = ({ data }) => {
  const [list, setList] = useState(false);
  const [date, setDate] = useState("");
  const [ammount, setAmmount] = useState(1);
  const [conversion, setConversion] = useState(false);
  const [currencyA, setCurrencyA] = useState(false);
  const [currencyB, setCurrencyB] = useState(false);

  const getRate = (currencyA, currencyB, ammount) => {
    axios
      .get(
        `https://altexchangerateapi.herokuapp.com/latest?from=${currencyA}&to=${currencyB}`
      )
      .then((res) => {
        setList(res.data);
        setDate(res.data.date);
        setConversion(Object.values(Object.values(list)[3]) * ammount);
      })
      .catch((error) => console.log(error));
  };

  let handleChangeA = (e) => {
    console.log(e.target.value);
    setCurrencyA(e.target.value);
  };

  let handleChangeB = (e) => {
    console.log(e.target.value);
    setCurrencyB(e.target.value);
  };

  // console.log(date, list);
  // console.log(Object.values(Object.values(list)[3]));

  return (
    <div className="convert">
      <div className="card1">
        <h3>Select a pair</h3>
        <div className="pair">
          <div className="element">
            <p>Currency A: </p>
            <select onChange={handleChangeA}>
              <option value="EUR"> -- -- </option>
              {data &&
                Object.keys(data).map((keyName, i) => (
                  <option key={keyName}>{keyName}</option>
                ))}
            </select>
          </div>
          <div className="element">
            <p>Currency B: </p>
            <select onChange={handleChangeB}>
              <option value="USD"> -- -- </option>
              {data &&
                Object.keys(data).map((keyName, i) => (
                  <option key={keyName}>{keyName}</option>
                ))}
            </select>
          </div>
          <div className="element">
            <form>
              <label>Select Ammount</label>
              <br />
              <input
                type="text"
                placeholder="Ammount"
                onInput={(e) => {
                  setAmmount(e.target.value);
                }}
              />
            </form>
            <button
              onClick={() => {
                getRate(currencyA, currencyB, ammount);
              }}
            >
              Convert
            </button>
          </div>
        </div>
        {list && conversion && (
          <div className="card2">
            <div className="pair">
              {ammount} {currencyA} = {conversion} {currencyB}
            </div>
            <div class="mini">Updated at * {date}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pair;
