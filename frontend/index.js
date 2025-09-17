import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import App from "./App";

console.log('[INFO] index.html 已載入，開始渲染 React App');
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
