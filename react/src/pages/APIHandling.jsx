import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const APIHandling = () => {
  const [value, setValue] = useState([]);
  //   const data = fetch("https://jsonplaceholder.typicode.com/posts");
  //   data.json();

  const fetchData = async () => {
    try {
      const data = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
      );
      console.log(data.data);
      setValue(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-2">
      {value.map((item, index) => {
        return (
          <Link to={`/products/${item.id}`}>
            <div className="h-50 border-2">
              <h1 className="text-2xl font-bold">
                {item.title.slice(0, 25)}...
              </h1>
              <p>{item.body.slice(0, 120)}...</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default APIHandling;
