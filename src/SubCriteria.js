import React, { useEffect, useState } from "react";
import "./App.css";
import { useParams } from "react-router-dom";

const SubCriteria = () => {
  const { id } = useParams();
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
    <div class="phone-section">
      {datas
        .filter((value) => value.id == id)
        .map((data) => {
          return (
            <div>
              <div class="header-section">
                <div class="header">{data.name}</div>
                <div class="subtext green">{data.tag}</div>
              </div>
              <div class="body-section">
                {data?.criteria[0]?.text}
                <br />
                {data?.criteria[1]?.text && <p>and</p>}
                {data?.criteria[1]?.text}
                <br />
                {data?.criteria[1]?.text && <p>and</p>}
                {data?.criteria[2]?.text}
                <br />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default SubCriteria;
