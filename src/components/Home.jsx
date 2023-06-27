import React from "react";
import Hero from "./Hero";
import Service from "./Service";
import Prayer from "./Prayer";
import Ministry from "./Ministry";
import Location from "./Location";
import men from "../images/men.jpg";
import women from "../images/women.jpg";
import youth2 from "../images/youth2.jpg";

function Home() {
  return (
    <div>
      <Hero />
      <Service />
      <Prayer />
      <Ministry men={men} women={women} youth2={youth2} />
      <Location />
    </div>
  );
}

export default Home;
