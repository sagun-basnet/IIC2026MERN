import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SinglePage = () => {
  const { postId } = useParams();
  const [value, setValue] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    await axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => {
        console.log(res);
        setValue(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <h1 className="text-6xl text-center">LOADING....</h1>;
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-6xl font-extrabold">TITLE: {value.title}</h1>
      <p>{value.body}</p>
    </div>
  );
};

export default SinglePage;
