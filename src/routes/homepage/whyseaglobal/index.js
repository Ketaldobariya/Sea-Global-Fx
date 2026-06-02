import React from "react";
import "./whyseaglobal.scss";
import Sea from "../../../assets/images/sea.png"
import Coin from "../../../assets/images/coin.png"
export default function WhySeaGlobal() {
    return(
        <section>
            <div className="why-sea-global-section">
                <div className="container-sm">
                    <div className="why-sea-section-grid">
                        <div className="sea-section-grid-items">
                            <div className="sea-section-width-box">
                                <div className="sea-section-width-box-flex animate__animated animate__fadeInUp wow" data-wow-offset="30"  data-wow-delay="0s">
                                    <img src={Sea} alt="Sea"/>
                                    <div className="sea-section-coin-image">
                                        <img  src={Coin} alt="Coin"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sea-section-grid-items-right">
                            <h2 className="animate__animated animate__fadeInUp wow" data-wow-offset="10"  data-wow-delay="0.2s">Why <span>Sea Global?</span></h2>
                            <div className="sea-section-box-grid">
                                <div className="sea-section-box animate__animated animate__fadeInUp wow" data-wow-offset="10"  data-wow-delay="0.2s">
                                    <h3>Low Spreads</h3>
                                    <p>Trade with tight, competitive spreads across major Forex pairs, indices, commodities, and crypto—designed to reduce trading costs and improve efficiency.</p>
                                </div>
                                <div className="sea-section-box animate__animated animate__fadeInUp wow" data-wow-offset="10"  data-wow-delay="0.3s">
                                    <h3>Fast Execution</h3>
                                    <p>Experience low-latency order execution powered by institutional-grade infrastructure, helping minimize slippage in fast-moving markets.</p>
                                </div>
                                <div className="sea-section-box animate__animated animate__fadeInUp wow" data-wow-offset="10"  data-wow-delay="0.4s">
                                    <h3>Regulation</h3>
                                    <p>We operate under strict regulatory standards and employ advanced security protocols to safeguard client funds and data.</p>
                                </div>
                                <div className="sea-section-box animate__animated animate__fadeInUp wow" data-wow-offset="10"  data-wow-delay="0.5s">
                                    <h3>Global Access</h3>
                                    <p>Access a wide range of global financial markets from a single platform, with deep liquidity and reliable pricing.</p>
                                </div>
                                <div className="sea-section-box animate__animated animate__fadeInUp wow" data-wow-offset="10"  data-wow-delay="0.6s">
                                    <h3>24/7 Support</h3>
                                    <p>Our dedicated support team is available 24 hours a day, 7 days a week, ensuring help is always within reach when you need it.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
