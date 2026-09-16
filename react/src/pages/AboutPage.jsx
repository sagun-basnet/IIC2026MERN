import React, { useContext } from "react";
import Navbar from "../components/global/Navbar";
import { AuthContext } from "../context/AuthContext";

const AboutPage = ({asdf}) => {
  const { num, num1 } = useContext(AuthContext);

  return (
    <div>
      <h1>{num}</h1>
      <h1>{num1}</h1>
    </div>
  );
};

export default AboutPage;
