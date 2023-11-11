import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import Routes from "./routes.tsx";
import Navbar from "./components/Navbar/index.tsx";
import Footer from "./components/Footer/index.tsx";

import "./assets/sass/global.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <main style={{}}>
        <Navbar />
        <Routes />
        <Footer />
      </main>
    </BrowserRouter>
  </React.StrictMode>
);
