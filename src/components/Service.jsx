import React from "react";
import { Link } from "react-router-dom";
import { BiLogoZoom } from "react-icons/bi";
import { FaBible } from "react-icons/fa";
import { BiChurch } from "react-icons/bi";

function Service() {
  return (
    <div>
      <section className="sect-2">
        <div className="center">
          <div className="sect2-container">
            <div className="three-columns-content">
              <div className="content1 g-col">
                <h2>
                  <BiChurch className="icon" />
                  SERVICE
                </h2>
                <p>Sunday: 10:30 AM - 12:00 PM</p>
                <p>WEDNESDAY NIGHT PRAYER</p>
                <p>7 PM - 8 PM</p>
              </div>

              <div className="content2 g-col">
                <h2>
                  <FaBible className="icon" />
                  BIBLE STUDY
                </h2>
                <p>Men, Women, Youth</p>
                <p>Sunday: 9:30 AM - 10:25 AM</p>

                <Link
                  to="https://us02web.zoom.us/j/88033768815?pwd=ZDBndWM1Z3Rid2MwUjlveDhMNGFWQT09"
                  target="_blank"
                >
                  <BiLogoZoom className="zoom" />
                </Link>
                <p>Audio & Video</p>
                <p>Meeting ID: 86814207799</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Service;
