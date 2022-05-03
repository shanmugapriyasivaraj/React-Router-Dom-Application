import React from "react";
import Hero from "./Components/hero/Hero";
import Navbar from "./Components/navbar/Navbar";
import Data from "./Components/Data/Data";
import Cloud from "./Components/Cloud/Cloud";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Data />
      <Cloud />
      <Footer />
    </>
  );
}

export default App;
