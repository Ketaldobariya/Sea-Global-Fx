import react from "react";
import "./tradThisMarketOn.scss"
import Thinkpade from "../../../assets/images/thinkpadd.png";
import Mobile from "../../../assets/images/mobile.png";
import Star from "../../../assets/images/star.png";
import MT4 from "../../../assets/images/mt4.svg"
import Mobile1 from "../../../assets/images/mobile (1).png"
import MT5 from "../../../assets/images/mt5.png"
import WEB from "../../../assets/images/web.png"
export default function TradThisMarketOn(){
    return(
        <section>
            <div className=" tradThisMarketOn-section">
                <div className=" thinkpad-position animate__animated animate__fadeInUp wow" data-wow-offset="10"  data-wow-delay="0.2s">
                    <img src={Thinkpade} alt="Thinkpad"/>
                </div>
                <div className="mobile-image-position animate__animated animate__zoomIn wow" data-wow-offset="10"  data-wow-delay="0.2s">
                    <img src={Mobile} alt="Mobile"/>
                </div>
                <div className="starimage-position">
                    <img src={Star} alt="Star"/>
                </div>
                <div className="container-sm">
                    <h2 className="heading-trade animate__animated animate__fadeInUp wow" data-wow-offset="10"  data-wow-delay="0s"><span>Trade </span>this Market on</h2>
                    <p className="animate__animated animate__fadeInUp wow" data-wow-offset="10"  data-wow-delay="0.4s">Access this market using Sea Global’s supported trading platforms, built for speed, stability, and flexibility across desktop, web, and mobile environments.</p>
                    <div className="onmarket-icontext-alignment onmarket-icontext-alignment-padding">
                        <div className="animate__animated animate__fadeInUp wow" data-wow-offset="10"  data-wow-delay="1s">
                            <div className="onmarket-icon-center">
                                <img src={MT4} alt="MT4"/>
                            </div>
                            <span>MT4</span>
                        </div>
                        <div className="animate__animated animate__fadeInUp wow" data-wow-offset="10"  data-wow-delay="1.1s">
                            <div className="onmarket-icon-center">
                                <img src={MT5} alt="MT5"/>
                            </div>
                            <span>MT5</span>
                        </div>
                        <div className="animate__animated animate__fadeInUp wow" data-wow-offset="10"  data-wow-delay="1.2s">
                            <div className="onmarket-icon-center">
                                <img src={WEB} alt="Web Platform"/>
                            </div>
                            <span>Web<br/> Platform</span>
                        </div>
                        <div className="animate__animated animate__fadeInUp wow" data-wow-offset="10"  data-wow-delay="1.3s">
                            <div className="onmarket-icon-center">
                                <img src={Mobile1} alt="Mobile"/>
                            </div>
                            <span>Mobile<br/> App</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}