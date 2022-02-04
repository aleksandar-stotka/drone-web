import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./grid.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthContexProvider } from "./contex/AuthContex";

import { AppProvider } from "./context";
ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter>
        <AuthContexProvider>
          <App />
        </AuthContexProvider>
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
