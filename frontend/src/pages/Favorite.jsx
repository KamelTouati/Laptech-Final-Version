import React, { useEffect, useState } from "react";
import { Card } from "../components";
import axios from "axios";

export default function Favorite() {
  const [laptopsData, setLaptopsData] = useState([]);

  useEffect(() => {
    axios
      .get("/data/data.json")
      .then((response) => {
        setLaptopsData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div>
      <div className="flex justify-around items-center">
        <div className="flex flex-col">
          <h1 className="text-5xl font-bold">Your chosen favorites :</h1>
          <h4>A personalized lineup of laptops tailored just for you.</h4>
        </div>
        <img src="./assets/robot2.png" />
      </div>
      <div class="p-4 flex-1 md:grid md:grid-cols-2 gap-4 ">
        {/* {laptopsData.map((laptop) => (
          <Card key={laptop.id} laptop={laptop} />
        ))} */}
      </div>
    </div>
  );
}
