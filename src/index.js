import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootEl = document.querySelector("#root");

// 并发模式从 0 - 2 - 3
ReactDOM.unstable_createRoot(rootEl).render(<App />);

// 同步模式从 0 - 1 -// ReactDOM.render(<App/>, rootEl);
