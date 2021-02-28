import React from "react";

const ColorfulMessage = (props) => {
  console.log(props);
  const contentStyle = {
    color: "blue",
    fontSize: "18px"
  };
  return <p style={contentStyle}>お元気ですか？</p>;
};

export default ColorfulMessage;
