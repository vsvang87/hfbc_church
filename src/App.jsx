import { useState } from "react";
import Navbar from "./components/Navbar";
import Navigation from "./routes/Navigation";
import Footer from "./components/Footer";
import "./sass/style.scss";

function App() {
  return (
    <>
      <Navbar />
      <Navigation />
      <Footer />
    </>
  );
}

export default App;
