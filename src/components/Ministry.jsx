import React from "react";

function Ministry({ men, women, youth2 }) {
  return (
    <>
      <section className="sect-4" id="ministries">
        <div className="sect4-container">
          <div className="center">
            <h1>OUR MINISTRIES</h1>
            <div className="sect4-content">
              <div className="men m-col">
                <img src={men} alt="" />
                <h3>Men</h3>
              </div>
              <div className="women m-col">
                <img src={women} alt="" />
                <h3>Women</h3>
              </div>
              <div className="youth m-col">
                <img src={youth2} alt="" />
                <h3>Youth</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Ministry;
