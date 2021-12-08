import React, { useState } from "react";
import axios from "axios";

const Pair = ({ data }) => {
  const [list, setList] = useState(false);
  const [date, setDate] = useState("");
  const [ammount, setAmmount] = useState(null);
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

  return (
    <div data-aos="fade-right" data-aos-duration="3000">
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
            <label>Select Ammount</label>
            <br />
            <input
              type="text"
              placeholder="Ammount"
              onInput={(e) => {
                setAmmount(e.target.value);
                getRate(currencyA, currencyB, e.target.value);
              }}
            />
          </div>
        </div>
        {list && conversion && ammount && (
          <div className="card2">
            <div className="pair">
              {ammount} {currencyA} = {conversion} {currencyB}
            </div>
            <div class="card3">* Updated at {date}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pair;
