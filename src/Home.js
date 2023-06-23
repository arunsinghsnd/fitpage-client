import React, { useEffect, useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    getStockData();
  }, []);

  const getStockData = async () => {
    try {
      const response = await fetch("http://localhost:3001/");
      const responseData = await response.json();
      console.log(responseData);
      setDatas(responseData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <div className="phone-section">
        <ul className="text-left mb-4 headers">
          {datas.map((data) => {
            return (
              <li key={data.id}>
                <Link to={`/details/${data.id}`}>
                  <div>{data.name}</div>
                  <div className="subtext" style={{ color: `${data.color}` }}>
                    {data.tag}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Home;
