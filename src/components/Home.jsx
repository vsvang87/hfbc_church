import React from "react";
import Hero from "./Hero";
import Service from "./Service";
import Prayer from "./Prayer";
import Ministry from "./Ministry";
import Location from "./Location";

function Home() {
  return (
    <div>
      <Hero />
      <Service />
      <Prayer />
      <Ministry />
      <Location />
    </div>
  );
}

export default Home;
