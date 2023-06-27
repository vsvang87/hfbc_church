import React from "react";
import { Link } from "react-router-dom";
import { GrLocation } from "react-icons/gr";
import { AiOutlinePhone } from "react-icons/ai";
import { BiEnvelope } from "react-icons/bi";

function Location() {
  return (
    <>
      <section className="sect-6">
        <div className="center">
          <div className="sect6-container">
            <h2>
              <GrLocation className="icon" /> Hmong First Baptist Church
            </h2>
            <p>6693 N 99th St</p>
            <p>Milwaukee, WI 53224</p>
            <p>414-358-2610 | hfbc.milw@gmail.com</p>
            <Link
              href="https://www.facebook.com/HmongFirstBaptistChurch/"
              target="_blank"
            >
              <i className="fa-brands fa-facebook"></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Location;
