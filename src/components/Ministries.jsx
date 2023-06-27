import React from "react";

function Ministries() {
  return (
    <div>
      <section className="sect-1">
        <div className="center">
          <div className="sect-1-container">
            <div className="sect1-content">
              <h1>GET INVOLVED AT HMONG FIRST BAPTIST CHURCH</h1>
              <p>
                Hmong First Baptist has many ministries available for you to be
                involved in. From helping in the children's ministry to greeting
                newcomers as they arrive at the front doors. Serving at Hmong
                First Baptist Church is a great way to help make this church
                your home and deepen your relationship with Christ.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section sect-2>
        <div className="center">
          <h1>OUR MINISTRIES</h1>
          <div className="sect2-container">
            <div className="sect2-content">
              <div className="children ministry-col">
                <img src="../static/images/children1.jpg" alt="" />
                <h2>Children</h2>
              </div>
              <div className="youth ministry-col">
                <img src="../static/images/youth2.jpg" alt="" />
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

      <section className="sect-3">
        <div className="center">
          <div className="sect3-container">
            <div className="sect3-content">
              <div className="serve-info serve-col">
                <h1>VOLUNTEER & SERVE</h1>
                <p>
                  We are passinonate about showing you who Jesus is. Whether it
                  is in our won neighborhood or across the globe, we can
                  tangibly express God's love for humanity through our outreach
                  projects and mission trips. Join us as we extend our mission
                  beyond our walls and share the love Jesus in our local and
                  global community.
                </p>
                <div className="serve-btn-div">
                  <p>hfbc.milw@gmail.com</p>
                </div>
              </div>
              <div className="serve-img serve-col">
                <img src="../static/images/scripture.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Ministries;
