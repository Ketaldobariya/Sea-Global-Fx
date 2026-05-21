import react from "react";
import "./herosection.scss";
import Openaccountbtn from "../../../components/openaccountbtn";
import Trydemo from "../../../components/trydemo";
import ForexBanner from "../../../assets/images/forex-banner.png";
import AccountBanner from "../../../assets/images/etfs-banner.png";
export default function Herosection() {
  return (
    <section>
      <div className="comman-banner-forex-market">
        <div className="left-alignment left-alignment-padding">
          <div className="account-grid-banner">
            <div className="hero-grid-items-left">
              <div className="grid-items-text">
                <div
                  className="text-button animate__animated animate__fadeInUp wow"
                  data-wow-offset="100"
                  data-wow-delay="0.2s"
                >
                  <button>Transparent pricing • Flexible conditions</button>
                </div>
                <h1
                  className="account-header animate__animated animate__fadeInUp wow"
                  data-wow-offset="100"
                  data-wow-delay="0.5s"
                >
                  Find the Best Account for Your <span> Goals </span>
                </h1>
                <p
                  className="account-paragraph-width animate__animated animate__fadeInUp wow"
                  data-wow-offset="100"
                  data-wow-delay="0.9s"
                >
                  Choose an account that matches your experience level, trading
                  strategy, and cost preferences. Sea Global offers clearly
                  defined account types with transparent pricing and flexible
                  trading conditions, so you can select what’s right for you
                  with confidence.
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
                <img src={AccountBanner} alt="AccountBanner" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
