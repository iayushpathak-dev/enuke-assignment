import React, { useEffect, useState } from "react";
import "../src/App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const URL =
    "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo";

  const fetchData = () => {
    fetch(URL)
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        setData(response);
      });
  };

  // console.log(data["Time Series (5min)"], "----------------DATA----------------");
  const formatData = data["Time Series (5min)"];

  // console.log(formatData, "--------------DATA IN A FORMAT-------------");

  const header = ["DateTime", "Open", "High", "low", "Close", "Volume"];

  return (
    <div>
      <h1 className="heading">Assignment</h1>
      <table className="tableStyle">
        <thead>
          <tr className="rowHeading">
            {header.map((h, i) => (
              <th key={i}>{h}</th>
            ))}
          </tr>
        </thead>
        {formatData === undefined ? (
          "Data Not Found"
        ) : (
          <tbody>
            {Object.keys(formatData).map((k, i) => {
              let data = formatData[k];
              return (
                <tr key={i}>
                  <td>{k}</td>
                  <td>{data["1. open"]}</td>
                  <td>{data["2. high"]}</td>
                  <td>{data["3. low"]}</td>
                  <td>{data["4. close"]}</td>
                  <td>{data["5. volume"]}</td>
                </tr>
              );
            })}
          </tbody>
        )}
      </table>
    </div>
  );
}

export default App;
