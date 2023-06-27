import React from "react";
import { Link } from "react-router-dom";
import { FaCross } from "react-icons/fa";

function Navbar() {
  return (
    <nav>
      <div className="center">
        <div className="navbar-container">
          <Link to="/" className="logo">
            <FaCross />
            H.F.B.C
          </Link>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/ministries">MINISTRIES</Link>
            </li>
            <li>
              <Link
                to="https://donate.stripe.com/test_14kcQv7nLfKm7II000"
                className="give-btn"
              >
                GIVE
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
