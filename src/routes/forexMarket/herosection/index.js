import React from "react";
import "./herosection.scss";
import Openaccountbtn from "../../../components/openaccountbtn";
import Trydemo from "../../../components/trydemo";
import ForexBanner from "../../../assets/images/forex-banner.png"
export default function Herosection(){
    return(
         <section>
            <div className="comman-banner-forex-market">
                <div className="left-alignment left-alignment-padding">
                    <div className="hero-section-grid forex-grid-banner">
                        <div className="hero-grid-items-left">
                            <div className="grid-items-text">
                                <div className="text-button animate__animated animate__fadeInUp wow" data-wow-offset="100"  data-wow-delay="0.2s">
                                    <button>Tight spreads • Fast execution • Deep liquidity</button>
                                </div>
                                <h1 className="animate__animated animate__fadeInUp wow" data-wow-offset="100"  data-wow-delay="0.5s">Trade the World’s Most Liquid <span> Financial </span> Market</h1>
                                <p className="market-paragraph-width animate__animated animate__fadeInUp wow" data-wow-offset="100" data-wow-delay="0.9s">Access global Forex markets through Sea Global’s secure trading infrastructure, offering transparent pricing, fast execution, and reliable liquidity across market conditions.</p>
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
                            <div className="hero-right-image ">
                                <img className=" animate__animated animate__fadeInRight wow" data-wow-offset="100"  data-wow-delay="0.1s" src={ForexBanner} alt="ForexBanner"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}