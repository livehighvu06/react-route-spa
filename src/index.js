import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "./context/navigation";
const el = document.querySelector("#root");

const root = createRoot(el);

root.render(
  <Provider>
    <App />
  </Provider>
);
