// import React from "react";
// import Navbar from "./Navbar";
// import Button from "./Button";

import { useEffect, useState } from "react";

const App = () => {
  // let count = 0;

  const [count, setCount] = useState(0);
  const [data, setData] = useState(true);

  const addCount = () => {
    // setData(true);
    setCount((prev) => prev + 1);
    console.log(count);
  };

  useEffect(() => {
    console.log("From useEffect");
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        {data ? <span>{count}</span> : <h1>Nothing to show</h1>}
        <button
          // onClick={()=> addCount(23)}
          onClick={addCount}
          className="p-2 px-4 bg-blue-500 text-white rounded-md"
        >
          +
        </button>
      </div>
      {/* <Navbar user={name} /> */}

      {/* {name.length !== 0 && <h1 className="text-4xl">Welcome {name}</h1>} */}
      {/* <Button text="View More" color="blue" />
      <Button text="Login" color="red" />
      <Button text="Register" color="black" /> */}
    </>
  );
};

export default App;
