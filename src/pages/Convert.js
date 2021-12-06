import Pair from "../components/Pair";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AppList.css";

const Convert = () => {
  const [data, setData] = useState(false);

  useEffect(() => {
    axios
      .get("https://altexchangerateapi.herokuapp.com/currencies")
      .then((res) => {
        setData(res.data);
      })
      .then(() => {})
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="cuerpo">
        <Pair data={data} />
      </div>
    </>
  );
};

export default Convert;
