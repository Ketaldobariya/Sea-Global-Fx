import React from "react";
import "./herosection.scss";
import Openaccountbtn from "../../../components/openaccountbtn";
import Trydemo from "../../../components/trydemo";
import Herocoin from "../../../assets/images/hero-coin.gif"
export default function Herosection(){
    return(
        <section>
            <div className="comman-banner">
                <div className="left-alignment">
                    <div className="hero-section-grid">
                        <div className="hero-grid-items-left">
                            <div className="grid-items-text">
                                <div className="text-button">
                                    <button>Low spreads • Fast execution • Regulated</button>
                                </div>
                                <h1>Institutional-Grade Trading for <span> Global </span> Markets</h1>
                                <p>Experience tight spreads with high-speed execution. Trade in a secure, fully regulated trading environment.</p>
                                <div className="towbutton-alignment">
                                    <a href="#" aria-label="Open Account" target="_blank">
                                        <Openaccountbtn/>
                                    </a>
                                    <a href="#" aria-label="Try Demo" target="_blank">
                                        <Trydemo/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="hero-grid-items-right">
                            <div className="hero-right-image">
                                <img src={Herocoin} alt="Herocoin"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}