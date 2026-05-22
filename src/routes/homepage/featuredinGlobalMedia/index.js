import react from "react";
import "./featuredinGlobalMedia.scss";
import Marquee from "react-fast-marquee";
import AP from "../../../assets/images/ap-icon.png";
import Silogonew from "../../../assets/images/silogo-new.png";
import DigitalJournal from "../../../assets/images/Digital-Journal.webp";
import Fcon from "../../../assets/images/fcon.svg";
import TechBullionLogo from "../../../assets/images/TechBullionLogo.webp";
import MarketsInsider from "../../../assets/images/markets-insider.svg";
import Manilalogomain from "../../../assets/images/manila-logo-main.png";
import Marketwatch from "../../../assets/images/market-watch.svg";
export default function FeaturedinGlobalMedia() {
  return (
    <section>
      <div className="featured-global-section">
        <div className="featured-global-section-flexbox">
          <div className="featured-section-items">
            <div className="featured-section-text">
              <h2>
                Featured in <br />
                <span> Global </span> Media
              </h2>
              <p>
                Our brand and market insights have been featured across leading
                financial and industry media outlets, reinforcing our reputation
                as a trusted market participant.
              </p>
            </div>
          </div>
          <div className="feautured-section-right-items">
            <Marquee className="marquee" pauseOnHover direction="left" speed={30}>
              <a href="/" aria-label="#" target="_blank">
                <div className="marquee-light-box">
                    <img src={AP} alt="AP"/>
                </div>
              </a>
              <a href="/" aria-label="#" target="_blank">
                <div className="marquee-light-box">
                    <img src={Silogonew} alt="Silogonew"/>
                </div>
              </a>
              <a href="/" aria-label="#" target="_blank">
                <div className="marquee-light-box">
                    <img src={DigitalJournal} alt="DigitalJournal"/>
                </div>
              </a>
              <a href="/" aria-label="#" target="_blank">
                <div className="marquee-light-box">
                    <img src={Fcon} alt="Fcon"/>
                </div>
              </a>
              <a href="/" aria-label="#" target="_blank">
                <div className="marquee-light-box">
                    <img src={TechBullionLogo} alt="TechBullionLogo"/>
                </div>
              </a>
              <a href="/" aria-label="#" target="_blank">
                <div className="marquee-light-box">
                    <img src={MarketsInsider} alt="MarketsInsider"/>
                </div>
              </a>
              <a href="/" aria-label="#" target="_blank">
                <div className="marquee-light-box">
                    <img src={Manilalogomain} alt="Manilalogomain"/>
                </div>
              </a>
              <a href="/" aria-label="#" target="_blank">
                <div className="marquee-light-box">
                    <img src={Marketwatch} alt="Marketwatch"/>
                </div>
              </a>
            </Marquee>
             <div className="marquee-padding"></div>
            <Marquee className="marquee" pauseOnHover direction="right" speed={30}>
              <a href="/" aria-label="#" target="_blank">
                <div className="marquee-light-box">
                    <img src={AP} alt="AP"/>
                </div>
              </a>
              <a href="/" aria-label="#" target="_blank">
                <div className="marquee-light-box">
                    <img src={Silogonew} alt="Silogonew"/>
                </div>
              </a>
              <a href="/" aria-label="#" target="_blank">
                <div className="marquee-light-box">
                    <img src={DigitalJournal} alt="DigitalJournal"/>
                </div>
              </a>
              <a href="/" aria-label="#" target="_blank">
                <div className="marquee-light-box">
                    <img src={Fcon} alt="Fcon"/>
                </div>
              </a>
              <a href="/" aria-label="#" target="_blank">
                <div className="marquee-light-box">
                    <img src={TechBullionLogo} alt="TechBullionLogo"/>
                </div>
              </a>
              <a href="/" aria-label="#" target="_blank">
                <div className="marquee-light-box">
                    <img src={MarketsInsider} alt="MarketsInsider"/>
                </div>
              </a>
              <a href="/" aria-label="#" target="_blank">
                <div className="marquee-light-box">
                    <img src={Manilalogomain} alt="Manilalogomain"/>
                </div>
              </a>
              <a href="/" aria-label="#" target="_blank">
                <div className="marquee-light-box">
                    <img src={Marketwatch} alt="Marketwatch"/>
                </div>
              </a>
            </Marquee>
            <div className="marquee-padding"></div>
            <Marquee className="marquee" pauseOnHover direction="left" speed={30}>
              <a href="/" aria-label="#" target="_blank">
                <div className="marquee-light-box">
                    <img src={Fcon} alt="Fcon"/>
                </div>
              </a>
              <a href="/" aria-label="#" target="_blank">
                <div className="marquee-light-box">
                    <img src={TechBullionLogo} alt="TechBullionLogo"/>
                </div>
              </a>
              <a href="/" aria-label="#" target="_blank">
                <div className="marquee-light-box">
                    <img src={MarketsInsider} alt="MarketsInsider"/>
                </div>
              </a>
              <a href="/" aria-label="#" target="_blank">
                <div className="marquee-light-box">
                    <img src={AP} alt="AP"/>
                </div>
              </a>
              <a href="/" aria-label="#" target="_blank">
                <div className="marquee-light-box">
                    <img src={Silogonew} alt="Silogonew"/>
                </div>
              </a>
              <a href="/" aria-label="#" target="_blank">
                <div className="marquee-light-box">
                    <img src={DigitalJournal} alt="DigitalJournal"/>
                </div>
              </a>
              <a href="/" aria-label="#" target="_blank">
                <div className="marquee-light-box">
                    <img src={Manilalogomain} alt="Manilalogomain"/>
                </div>
              </a>
              <a href="/" aria-label="#" target="_blank">
                <div className="marquee-light-box">
                    <img src={Marketwatch} alt="Marketwatch"/>
                </div>
              </a>
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
}
