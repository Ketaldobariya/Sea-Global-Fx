
import React from "react";
import "./trustByTreders.scss"
import Quote from "../../../assets/images/quote.svg"
import Danial from "../../../assets/images/Danial.webp"
import Sarah from "../../../assets/images/Sarah.webp"
import Luca from "../../../assets/images/Luca.webp"
import Ana from "../../../assets/images/Ana.webp"
import Ahmed from "../../../assets/images/Ahmed.webp"
import Mithcel from "../../../assets/images/Mithcel.webp"
export default function TrustByTreders() {
    return (
        <section>
            <div className="trustByTreders-section">
                <div className="trustByTreders-section-title">
                    <h2 className="animate__animated animate__fadeInUp wow" data-wow-offset="10"  data-wow-delay="0.1s">Trusted by Traders 
                        <span> Worldwide</span>
                    </h2>
                    <p className="animate__animated animate__fadeInUp wow" data-wow-offset="10"  data-wow-delay="0.3s">Our platform is recognized for its commitment to transparent pricing, reliable execution, and professional service. Thousands of traders choose us for our technology, support, and trading conditions.</p>
                </div>
                <div className="trustByTreders-cards-swiper">
                    <div className="cards-swiper">
                        <div className="trustByTreders-card">
                            <img src={Quote} alt="Quote"/>
                            <div className="card-bottom-text">
                                <div className="card-gold-line"></div>
                                <div className="card-paragraph">
                                    <p>So I personally use this platform i genuinely say that this platform is very easy and very good to start and my opinion this this is one the best company.</p>
                                    <div className="card-profile">
                                        <div className="profile-image">
                                            <img src={Danial} alt="Danial"/>
                                        </div>
                                        <div>
                                            <h4>Daniel K</h4>
                                            <span>United Kingdom</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="trustByTreders-card">
                            <img src={Quote} alt="Quote"/>
                            <div className="card-bottom-text">
                                <div className="card-gold-line"></div>
                                <div className="card-paragraph">
                                    <p>I experienced a deposit delay caused by the bank, but Sea Global FX handled the situation with professionalism and care. Their support team communicated clearly and resolved the issue promptly. A reliable and well-managed platform.</p>
                                    <div className="card-profile">
                                        <div className="profile-image">
                                            <img src={Sarah} alt="Sarah"/>
                                        </div>
                                        <div>
                                            <h4>Sarah W.</h4>
                                            <span>Ireland</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="trustByTreders-card">
                            <img src={Quote} alt="Quote"/>
                            <div className="card-bottom-text">
                                <div className="card-gold-line"></div>
                                <div className="card-paragraph">
                                    <p>I’ve been using Sea Global FX Broker for some time now, and my experience has been excellent. Trading is smooth, spreads are stable, and execution is fast. What I appreciate most is the withdrawal process—it’s quick, hassle-free, and funds are credited on time.</p>
                                    <div className="card-profile">
                                        <div className="profile-image">
                                            <img src={Luca} alt="Luca"/>
                                        </div>
                                        <div>
                                            <h4>Luca M.</h4>
                                            <span>Italy  </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="trustByTreders-card">
                            <img src={Quote} alt="Quote"/>
                            <div className="card-bottom-text">
                                <div className="card-gold-line"></div>
                                <div className="card-paragraph">
                                    <p>Platform offers a truly world-class trading environment. The fast execution and low spreads make a real difference in my day-to-day trading. With over 4 years of professional trading experience, I can confidently say this platform stands out for its reliability and transparency.</p>
                                    <div className="card-profile">
                                        <div className="profile-image">
                                            <img src={Ana} alt="Ana"/>
                                        </div>
                                        <div>
                                            <h4>Ana P.</h4>
                                            <span>Brazil </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="trustByTreders-card">
                            <img src={Quote} alt="Quote"/>
                            <div className="card-bottom-text">
                                <div className="card-gold-line"></div>
                                <div className="card-paragraph">
                                    <p>Sea Global FX is really easy to use and nicely laid out. Everything is clear and straightforward, which makes the whole experience smooth. It’s a good option if you’re looking for a simple, no-stress platform.</p>
                                    <div className="card-profile">
                                        <div className="profile-image">
                                            <img src={Ahmed} alt="Ahmed"/>
                                        </div>
                                        <div>
                                            <h4>Ahmed H.</h4>
                                            <span>Egypt </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="trustByTreders-card">
                            <img src={Quote} alt="Quote"/>
                            <div className="card-bottom-text">
                                <div className="card-gold-line"></div>
                                <div className="card-paragraph">
                                    <p>It’s really good for crypto trading compared to many platforms. It offers 24/7 support, secure deposits, tight spreads, and allows trading with lower amounts, which makes it very convenient.</p>
                                    <div className="card-profile">
                                        <div className="profile-image">
                                            <img src={Mithcel} alt="Mithcel"/>
                                        </div>
                                        <div>
                                            <h4>Mitchel Bard</h4>
                                            <span>UAE</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
        