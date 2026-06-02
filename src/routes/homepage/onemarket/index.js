
import React from "react";
import "./onemarket.scss"
import Thinkpade from "../../../assets/images/thinkpad.png";
import Mobile from "../../../assets/images/mobile.png";
import Star from "../../../assets/images/star.png";
import MT4 from "../../../assets/images/mt4.svg"
import Mobile1 from "../../../assets/images/mobile (1).png"
import MT5 from "../../../assets/images/mt5.png"
import WEB from "../../../assets/images/web.png"
export default function Onemarket(){
    return(
        <section>
            <div className="Onmarket-section">
                <div className="thinkpadimage animate__animated animate__fadeInUp wow" data-wow-offset="10"  data-wow-delay="0.2s">
                    <img src={Thinkpade} alt="Thinkpad"/>
                </div>
                <div className="mobile-image animate__animated animate__zoomIn wow" data-wow-offset="10"  data-wow-delay="0.2s">
                    <img src={Mobile} alt="Mobile"/>
                </div>
                <div className="starimage">
                    <img src={Star} alt="Star"/>
                </div>
                <div className="container-sm">
                    <h2 className="animate__animated animate__fadeInUp wow" data-wow-offset="10"  data-wow-delay="0s">One market. <br/>Multiple platforms.<br/><span>Zero</span> compromise.</h2>
                    <p className="animate__animated animate__fadeInUp wow" data-wow-offset="10"  data-wow-delay="0.4s">Access the markets through industry-leading trading platforms built for speed, flexibility, and performance. Whether you trade manually or algorithmically, on desktop or mobile, our platforms are designed to support every trading style.</p>
                    <div className="onmarket-icontext-alignment">
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