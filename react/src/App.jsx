import React from "react";
import Navbar from "./Navbar";
import Button from "./Button";

const App = () => {
  const name = "jhon";

  return (
    <>
      <Navbar user={name} />

      {name.length !== 0 && <h1 className="text-4xl">Welcome {name}</h1>}
      {/* <Button text="View More" color="blue" />
      <Button text="Login" color="red" />
      <Button text="Register" color="black" /> */}
    </>
  );
};

export default App;
