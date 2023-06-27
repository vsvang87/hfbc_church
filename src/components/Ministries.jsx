import React from "react";
import Location from "./Location";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import children1 from "../images/children1.jpg";
import youth1 from "../images/youth1.jpg";
import churchcamp from "../images/churchcamp.jpg";
import women2 from "../images/women2.jpg";
import song from "../images/song.jpg";
import outreach from "../images/outreach.jpg";
import worship from "../images/worship.jpg";
function Ministries() {
  return (
    <div>
      <Section1 />
      <Section2
        children1={children1}
        youth1={youth1}
        churchcamp={churchcamp}
        women2={women2}
        song={song}
        outreach={outreach}
      />
      <Section3 worship={worship} />
      <Location />
    </div>
  );
}

export default Ministries;
