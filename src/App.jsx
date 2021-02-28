import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";
const App = () => {
  const onClickButton = () => alert();
  const contentStyle = {
    color: "blue",
    fontSize: "18px"
  };
  const contentLedyStyle = {
    color: "pink",
    fontSize: "18px"
  };
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは!</h1>
      <ColorfulMessage color="blue" maessage="お元気ですか？" />
      <p style={contentStyle}>お元気ですか？</p>
      <p style={contentLedyStyle}>元気です！</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
