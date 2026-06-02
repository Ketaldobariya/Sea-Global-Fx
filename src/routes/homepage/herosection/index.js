import React from "react";
import "./herosection.scss";
import Openaccountbtn from "../../../components/openaccountbtn";
import Trydemo from "../../../components/trydemo";
import Herocoin from "../../../assets/videos/hero.mp4"
export default function Herosection(){
    return(
        <section>
            <div className="comman-banner">
                <div className="left-alignment">
                    <div className="hero-section-grid">
                        <div className="hero-grid-items-left">
                            <div className="grid-items-text">
                                <div className="text-button animate__animated animate__fadeInUp wow" data-wow-offset="100"  data-wow-delay="0.2s">
                                    <div className="button">Low spreads • Fast execution • Regulated</div>
                                </div>
                                <h1 className="animate__animated animate__fadeInUp wow" data-wow-offset="100"  data-wow-delay="0.5s">Institutional-Grade Trading for <span> Global </span> Markets</h1>
                                <p className="animate__animated animate__fadeInUp wow" data-wow-offset="100" data-wow-delay="0.9s">Experience tight spreads with high-speed execution. Trade in a secure, fully regulated trading environment.</p>
                                <div className="towbutton-alignment">
                                    <a  href="/" aria-label="Open Account" target="_blank" rel="noreferrer">
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
                            <div className="hero-right-image">
                                <video src={Herocoin} loop autoPlay muted ></video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}