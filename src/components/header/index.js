
import React from "react";
import "./header.scss";
import Logo from "../../assets/logo/logo.svg";
import Share from "../../assets/images/login share.svg"
import {TextAlignJustify } from "lucide-react";
import { NavLink } from "react-router";
export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="header-alignment">
          <div className="left-logo">
            <NavLink className="logo" to="/" aria-label="logo">
              <img src={Logo} alt="logo" />
            </NavLink>
          </div>
          <div className="right-alignment">
            <div className="header-menu-alignment">
              <div className="market-dropdown-menu">
                <NavLink className="dropdown-menu" to="/forex-market" aria-label="dropdown">
                  Markets
                </NavLink>
                <div className="dropdown">
                  <div className="dropdown-spacing">
                    <NavLink className="nav" to="/forex-market">
                      Forex
                    </NavLink>
                    <NavLink className="nav" to="/" aria-label="menu">
                      Indices
                    </NavLink>
                    <NavLink  className="nav" to="/" aria-label="menu">
                      Commodities
                    </NavLink>
                    <NavLink className="nav" to="/" aria-label="menu">
                      Stocks
                    </NavLink>
                    <NavLink className="nav" to="/" aria-label="menu">
                      Crypto
                    </NavLink>
                    <NavLink className="nav" to="/" aria-label="menu">
                      ETFs
                    </NavLink>
                  </div>
                </div>
              </div>
              <NavLink className="dropdown-menu"  to="/accounts" aria-label="menu">
                Accounts
              </NavLink>
              <div className="market-dropdown-menu">
                <NavLink className="dropdown-menu" to="/" aria-label="dropdown">
                  Trade
                </NavLink>
                <div className="dropdown trade-dropdown">
                  <div className="dropdown-spacing">
                    <NavLink className="nav" to="/platforms" aria-label="menu">
                      Platforms
                    </NavLink>
                    <NavLink className="nav" to="/" aria-label="menu">
                      Trading Solutions
                    </NavLink>
                    <NavLink className="nav" to="/" aria-label="menu">
                      Trade and Achieve
                    </NavLink>
                  </div>
                </div>
              </div>
              <NavLink className="dropdown-menu" to="/partners" aria-label="dropdown">
                Partners
              </NavLink>
              <div className="market-dropdown-menu">
                <NavLink className="dropdown-menu" to="/" aria-label="dropdown">
                  Company
                </NavLink>
                <div className="dropdown trade-dropdown">
                  <div className="dropdown-spacing">
                    <NavLink className="nav" to="/about-us" aria-label="menu">
                      About Us
                    </NavLink>
                    <NavLink className="nav"  to="/" aria-label="menu">
                      Contact Us
                    </NavLink>
                  </div>
                </div>
              </div>
              <NavLink className="dropdown-menu" to="/blogs"aria-label="dropdown">
                Blogs
              </NavLink>
              <NavLink className="dropdown-menu" to="/contact-us" aria-label="dropdown">
                Contact Us
              </NavLink>
            </div>
            <div className="login-button-design">
                <NavLink className="login" to="/" aria-label="login-button">
                    <button>
                        <img src={Share} alt="Share"/>
                        <span>Login</span>
                    </button>
                </NavLink>
                  <div className="mobile-menu">
                    <TextAlignJustify />
                  </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
