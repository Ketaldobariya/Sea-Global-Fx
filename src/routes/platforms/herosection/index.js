import react from "react";
import "./herosection.scss";
import Openaccountbtn from "../../../components/openaccountbtn";
import Trydemo from "../../../components/trydemo";
import Platformsbanner from "../../../assets/images/platforms-banner.png";
export default function Herosection() {
  return (
    <section>
      <div className="comman-banner-forex-market">
        <div className="left-alignment left-alignment-padding">
          <div className="platformsbanner-grid-banner">
            <div className="hero-grid-items-left">
              <div className="grid-items-text">
                <div
                  className="text-button animate__animated animate__fadeInUp wow"
                  data-wow-offset="100"
                  data-wow-delay="0.2s"
                >
                  <button>Desktop • Web • Mobile</button>
                </div>
                <h1
                  className="platform-header animate__animated animate__fadeInUp wow"
                  data-wow-offset="100"
                  data-wow-delay="0.5s"
                >
                  Trade Your Way with Powerful,  Flexible Trading <span> Platforms </span>
                </h1>
                <p
                  className="account-paragraph-width animate__animated animate__fadeInUp wow"
                  data-wow-offset="100"
                  data-wow-delay="0.9s"
                >
                  Trade your way with Sea Global’s powerful and flexible trading platforms, designed to support different trading styles, experience levels, and market strategies—whether you trade from desktop, web, or mobile.
                </p>
                <div className="towbutton-alignment">
                  <a href="#" aria-label="Open Account" target="_blank ">
                    <div
                      className="animate__animated animate__fadeInUp wow"
                      data-wow-offset="100"
                      data-wow-delay="1s"
                    >
                      <Openaccountbtn />
                    </div>
                  </a>
                  <a href="#" aria-label="Try Demo" target="_blank">
                    <div
                      className="animate__animated animate__fadeInUp wow"
                      data-wow-offset="100"
                      data-wow-delay="1.5s"
                    >
                      <Trydemo />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="hero-grid-items-right">
              <div className="hero-right-image">
                <img src={Platformsbanner} alt="Platformsbanner" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
