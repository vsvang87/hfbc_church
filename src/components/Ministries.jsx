import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import children1 from "../images/children1.jpg";
import youth1 from "../images/youth1.jpg";

function Ministries() {
  return (
    <div>
      <Section1 />
      <Section2 children1={children1} youth1={youth1} />
      <Section3 />
    </div>
  );
}

export default Ministries;
