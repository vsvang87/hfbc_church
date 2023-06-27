import React from "react";

function Section2({ children1, youth1 }) {
  return (
    <div>
      <section sect-2>
        <div className="center">
          <h1>OUR MINISTRIES</h1>
          <div className="sect2-container">
            <div className="sect2-content">
              <div className="children ministry-col">
                <img src={children1} alt="" />
                <h2>Children</h2>
              </div>
              <div className="youth ministry-col">
                <img src={youth1} alt="" />
                <h2>Youth</h2>
              </div>
              <div className="men ministry-col">
                <img src="../static/images/churchcamp.jpg" alt="" />
                <h2>Men</h2>
              </div>
              <div className="women ministry-col">
                <img src="../static/images/women.jpg" alt="" />
                <h2>Women</h2>
              </div>
              <div className="ministry-col">
                <img src="../static/images/songbook.jpg" alt="" />
                <h2>Music</h2>
              </div>
              <div className="ministry-col">
                <img src="../static/images/tee.JPG" alt="" />
                <h2>Outreach</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section2;
