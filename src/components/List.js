import React, { useState, useEffect } from "react";
import axios from "axios";
// import Chart from "./Chart";
import Chart from "chart.js/auto";
import Charty from "./Charty";

let chart;

const List = ({ baseCurrency }) => {
  const [list, setList] = useState(false);
  const [date, setDate] = useState("");
  const [currencyB, setCurrencyB] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://altexchangerateapi.herokuapp.com/latest?from=${baseCurrency}`
      )
      .then((res) => {
        setList(res.data.rates);
        setDate(res.data.date);
      })

      .catch((error) => console.log(error));
  }, [baseCurrency]);

  const buildChart = (labels, data, label) => {
    // const chartRef = document.getElementById('chart-canvas').getContext("2d");
    if (typeof chart !== "undefined") {
      chart.destroy();
    }

    chart = new Chart(
      document.getElementById("chart-canvas").getContext("2d"),
      {
        type: "line",
        data: {
          labels,
          datasets: [
            {
              label: label,
              data,
              borderColor: "#8e5ea2",
              fill: false,
              tension: 0,
            },
          ],
        },
        options: {
          responsive: true,
        },
      }
    );
  };

  useEffect(() => {
    axios
      .get(
        `https://altexchangerateapi.herokuapp.com/2021-01-01..${date}?from=${baseCurrency}&to=${currencyB}`
      )
      .then((res) => {
        const chartLabels = Object.keys(res.data.rates);
        const chartData = Object.values(res.data.rates).map(
          (rate) => rate[currencyB]
        );
        const chartLabel = `${baseCurrency}/${currencyB}`;
        buildChart(chartLabels, chartData, chartLabel);
      })
      .catch((error) => console.log(error));
  }, [currencyB]);

  const handleClick = (e) => {
    setCurrencyB(e.target.textContent);
  };

  const handleDestroy = () => {
    console.log(chart);
  };

  return (
    <>
      <div className="chartandlist">
        <div className="table">
          <table
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <thead>
              <tr className="tableHeader">
                <td>CURRENCY</td>
                <td>VALUE</td>
              </tr>
            </thead>
            <tbody>
              {list &&
                Object.keys(list).map((keyName, i) => (
                  <tr className="tableList" key={i} onClick={handleClick}>
                    <td>{keyName}</td>
                    <td>{list[keyName]}</td>
                  </tr>
                ))}
            </tbody>
          </table>
          <p id="date">* Updated at {date}</p>
        </div>
        {currencyB !== null && <Charty />}
      </div>
    </>
  );
};

export default List;
