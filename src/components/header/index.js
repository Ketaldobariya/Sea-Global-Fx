import React from "react";
import "./header.scss";
import Logo from "../../assets/logo/logo.svg";
import Share from "../../assets/images/login share.svg"
import { TextAlignJustify } from "lucide-react";
export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="header-alignment">
          <div className="left-logo">
            <a href="/" aria-label="logo">
              <img src={Logo} alt="logo" />
            </a>
          </div>
          <div className="right-alignment">
            <div className="header-menu-alignment">
              <div className="market-dropdown-menu">
                <a className="dropdown-menu" href="/" aria-label="dropdown">
                  Markets
                </a>
                <div className="dropdown">
                  <div className="dropdown-spacing">
                    <a href="/" aria-label="menu">
                      Forex
                    </a>
                    <a href="/" aria-label="menu">
                      Indices
                    </a>
                    <a href="/" aria-label="menu">
                      Commodities
                    </a>
                    <a href="/" aria-label="menu">
                      Stocks
                    </a>
                    <a href="/" aria-label="menu">
                      Crypto
                    </a>
                    <a href="/" aria-label="menu">
                      ETFs
                    </a>
                  </div>
                </div>
              </div>
              <a href="/" aria-label="menu">
                Accounts
              </a>
              <div className="market-dropdown-menu">
                <a className="dropdown-menu" href="/" aria-label="dropdown">
                  Trade
                </a>
                <div className="dropdown trade-dropdown">
                  <div className="dropdown-spacing">
                    <a href="/" aria-label="menu">
                      Platforms
                    </a>
                    <a href="/" aria-label="menu">
                      Trading Solutions
                    </a>
                    <a href="/" aria-label="menu">
                      Trade and Achieve
                    </a>
                  </div>
                </div>
              </div>
              <a className="dropdown-menu" href="/" aria-label="dropdown">
                Partners
              </a>
              <div className="market-dropdown-menu">
                <a className="dropdown-menu" href="/" aria-label="dropdown">
                  Company
                </a>
                <div className="dropdown trade-dropdown">
                  <div className="dropdown-spacing">
                    <a href="/" aria-label="menu">
                      About Us
                    </a>
                    <a href="/" aria-label="menu">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
              <a className="dropdown-menu" href="/" aria-label="dropdown">
                Blogs
              </a>
              <a className="dropdown-menu" href="/" aria-label="dropdown">
                Contact Us
              </a>
            </div>
            <div className="login-button-design">
                <a href="/" aria-label="login-button">
                    <button>
                        <img src={Share} alt="Share"/>
                        <span>Login</span>
                    </button>
                </a>
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
