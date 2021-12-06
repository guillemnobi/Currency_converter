import "./AppList.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import DropDown from "../components/DropDown";

function AppList() {
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
        <DropDown data={data} />
      </div>
    </>
  );
}

export default AppList;
