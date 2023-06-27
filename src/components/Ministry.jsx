import React from "react";

function Ministry() {
  return (
    <>
      <section className="sect-4" id="ministries">
        <div className="sect4-container">
          <div className="center">
            <h1>OUR MINISTRIES</h1>
            <div className="sect4-content">
              <div className="men m-col">
                <img src="../images/children1.jpg" alt="" />
                <h3>Men</h3>
              </div>
              <div className="women m-col">
                <img src="../static/images/women1.jpg" alt="" />
                <h3>Women</h3>
              </div>
              <div className="youth m-col">
                <img src="../static/images/youth1.jpg" alt="" />
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
