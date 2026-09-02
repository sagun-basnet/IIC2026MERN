import React from "react";

const Button = ({ text, color }) => {
  //   console.log(props);

  return (
    <button style={{ backgroundColor: color }} className={` text-white`}>
      {text}
    </button>
  );
};

export default Button;
