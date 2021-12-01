import React, { useState, useEffect } from "react";
import axios from "axios";

const List = ({ currency }) => {
  const [list, setList] = useState(false);
  const [date, setDate] = useState("");

  useEffect(() => {
    axios
      .get(`https://altexchangerateapi.herokuapp.com/latest?from=${currency}`)
      .then((res) => {
        setList(res.data.rates);
        setDate(res.data.date);
      })

      .catch((error) => console.log(error));
  }, [currency]);

  return (
    <>
      <table>
        <thead>
          <tr className="tableHeader">
            <td>CURRENCY</td>
            <td>VALUE</td>
          </tr>
        </thead>
        <tbody>
          {list &&
            Object.keys(list).map((keyName, i) => (
              <tr className="tableList" key={i}>
                <td>{keyName}</td>
                <td>{list[keyName]}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <p id="date">* Updated at {date}</p>
    </>
  );
};

export default List;
