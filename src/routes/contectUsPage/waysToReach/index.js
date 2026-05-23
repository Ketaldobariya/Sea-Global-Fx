import "./waysToReach.scss";
import BackLayer from "../../../assets/images/layer-black.png";
import EmailFill from "../../../assets/images/email-fill.svg";
import Call from "../../../assets/images/Call.svg";
import Clock from "../../../assets/images/Clock-fill.svg";
export default function WaysToReach() {
  return (
    <section>
      <div className="waysToReach-section">
        <div className="back-layer">
          <img src={BackLayer} alt="BackLayer" />
        </div>
        <div className="container-sm">
          <h2 className="animate__animated animate__fadeInUp wow"
                  data-wow-offset="100"
                  data-wow-delay="0.1s">
            Ways To Reach <span> Us</span>
          </h2>
          <div className="waysToReach-gridbox">
            <div className="waysToReach-cardbox animate__animated animate__fadeInUp wow"
                  data-wow-offset="100"
                  data-wow-delay="0.2s">
              <div className="waysToReach-icon-center">
                <img src={EmailFill} alt="email-fill" />
              </div>
              <a href="/" aria-label="#">
                support@seaglobalfx.com
              </a>
            </div>
            <div className="waysToReach-cardbox animate__animated animate__fadeInUp wow"
                  data-wow-offset="100"
                  data-wow-delay="0.4s">
              <div className="waysToReach-icon-center">
                <img src={Call} alt="Call" />
              </div>
              <a href="/" aria-label="#">
                +971 58 261 9955
              </a>
            </div>
            <div className="waysToReach-cardbox animate__animated animate__fadeInUp wow"
                  data-wow-offset="100"
                  data-wow-delay="0.6s">
              <div className="waysToReach-icon-center">
                <img src={Clock} alt="Clock-fill" />
              </div>
              <a href="/" aria-label="#">
                support@seaglobalfx.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
