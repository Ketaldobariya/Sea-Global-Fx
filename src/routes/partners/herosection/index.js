import "./herosection.scss";
import Partners from "../../../assets/images/Partners.png";
import User from "../../../assets/images/user.svg";
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
                  <button>Seaglobal FX IB Partners Program</button>
                </div>
                <h1
                  className="platform-header animate__animated animate__fadeInUp wow"
                  data-wow-offset="100"
                  data-wow-delay="0.5s"
                >
                  Grow Your Forex <br />
                  <span> Business </span> With Us
                </h1>
                <p
                  className="account-paragraph-width animate__animated animate__fadeInUp wow"
                  data-wow-offset="100"
                  data-wow-delay="0.9s"
                >
                  Build long-term revenue by partnering with Seaglobal FX, a
                  global forex broker focused on transparency, advanced trading
                  technology, and partner success.
                </p>
                <div className="towbutton-alignment">
                  <a href="/" aria-label="Open Account" target="_blank" rel="noreferrer">
                    <div
                      className="open-account-btn animate__animated animate__fadeInUp wow"
                      data-wow-offset="100"
                      data-wow-delay="1s"
                    >
                      <button>
                        <img src={User} alt="User" />
                        Become a Partner
                      </button>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="hero-grid-items-right">
              <div className="hero-right-image">
                <img className="animate__animated animate__fadeInRight wow" data-wow-offset="100"  data-wow-delay="0.1s" src={Partners} alt="Partners" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
