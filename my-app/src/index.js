// import react 的 api，讓我們可以簡單的用React的語法做開法
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./pages/Home"; // 如果把component宣告成index.js的話，是不需要把他打出來的

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById("root")
);
