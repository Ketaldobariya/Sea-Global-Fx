import "./herosection.scss";
import Openaccountbtn from "../../../components/openaccountbtn";
import Trydemo from "../../../components/trydemo";
import ContactBanner from "../../../assets/images/contact-banner.png";
export default function Herosection() {
  return (
    <section>
      <div className="comman-banner-forex-market">
        <div className="left-alignment left-alignment-padding">
          <div className="contect-grid-banner">
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
                  className="account-header animate__animated animate__fadeInUp wow"
                  data-wow-offset="100"
                  data-wow-delay="0.5s"
                >
                  We’re here to support <br/> you at <span> every </span> step
                </h1>
                <p
                  className="account-paragraph-width animate__animated animate__fadeInUp wow"
                  data-wow-offset="100"
                  data-wow-delay="0.9s"
                >
                  At Paradise Global Markets, open communication and reliable support are part of how we work. Whether you have a question about your account, need platform assistance, or want to explore partnership opportunities, our team is here to help.
                </p>
                <div className="towbutton-alignment">
                  <a href="/" aria-label="Open Account" target="_blank" rel="noreferrer">
                    <div
                      className="animate__animated animate__fadeInUp wow"
                      data-wow-offset="100"
                      data-wow-delay="1s"
                    >
                      <Openaccountbtn />
                    </div>
                  </a>
                  <a href="/" aria-label="Try Demo" target="_blank" rel="noreferrer">
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
                <img className="animate__animated animate__fadeInRight wow" data-wow-offset="100"  data-wow-delay="0.1s" src={ContactBanner} alt="contact-banner" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
