import axios from "axios";
import React, { useEffect, useState } from "react";

const APIHandling = () => {
  const [value, setValue] = useState([]);
  //   const data = fetch("https://jsonplaceholder.typicode.com/posts");
  //   data.json();

  const fetchData = async () => {
    const data = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log(data.data);
    setValue(data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-2">
      {value.map((item, index) => {
        return (
          <div className="h-50 border-2">
            <h1 className="text-2xl font-bold">{item.title}</h1>
            <p>{item.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default APIHandling;
