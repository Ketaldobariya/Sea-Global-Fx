import React from "react";
import "./herosection.scss";
import Openaccountbtn from "../../../components/openaccountbtn";
import Trydemo from "../../../components/trydemo";
import CompanyBanner from "../../../assets/images/company-banner.png";
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
                  <button>We’re Here to Help</button>
                </div>
                <h1
                  className="platform-header animate__animated animate__fadeInUp wow"
                  data-wow-offset="100"
                  data-wow-delay="0.5s"
                >
                  A Trusted Global Trading <br />
                  <span> Partner </span>
                </h1>
                <p
                  className="account-paragraph-width animate__animated animate__fadeInUp wow"
                  data-wow-offset="100"
                  data-wow-delay="0.9s"
                >
                  Sea Global FX is a global trading broker focused on delivering
                  a transparent, secure, and professionally managed trading
                  environment.
                </p>
                 <div className="towbutton-alignment">
                                                    <a href="/" aria-label="Open Account" target="_blank" rel="noreferrer">
                                                        <div className="animate__animated animate__fadeInUp wow" data-wow-offset="100" data-wow-delay="1s">
                                                        <Openaccountbtn/>
                                                        </div>
                                                    </a>
                                                    <a href="/" aria-label="Try Demo" target="_blank" rel="noreferrer">
                                                        <div className="animate__animated animate__fadeInUp wow" data-wow-offset="100" data-wow-delay="1.5s">
                                                        <Trydemo/>
                                                        </div>
                                                    </a>
                                                </div>
              </div>
            </div>
            <div className="hero-grid-items-right">
              <div className="hero-right-image animate__animated animate__fadeInRight wow" data-wow-offset="100"  data-wow-delay="0.1s">
                <img src={CompanyBanner} alt="CompanyBanner" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
