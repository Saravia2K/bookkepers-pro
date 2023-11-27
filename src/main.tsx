import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Routes from "./routes.tsx";
import Navbar from "./components/Navbar/index.tsx";
import Footer from "./components/Footer/index.tsx";

import "./assets/sass/global.scss";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <main>
        <Navbar />
        <Routes />
        <Footer />
      </main>
      <ToastContainer hideProgressBar limit={3} />
    </BrowserRouter>
  </React.StrictMode>
);
