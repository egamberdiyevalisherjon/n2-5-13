import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Toast
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";

// axios
import axios from "axios";
axios.defaults.baseURL = "https://fakestoreapi.com";

// Router
import { BrowserRouter as Router } from "react-router-dom";

// Style
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
      <ToastContainer position="bottom-right" theme="colored" />
    </Router>
  </React.StrictMode>
);
