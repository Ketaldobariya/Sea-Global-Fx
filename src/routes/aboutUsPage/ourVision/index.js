import react from "react";
import "./ourVision.scss"
import BackLayer from "../../../assets/images/layer-black.png"
import Mission from "../../../assets/images/mission.png"
export default function OurVision(){
    return(
        <section>
            <div className="ourVision-section">
                <div className="backlayer">
                    <img src={BackLayer} alt="BackLayer"/>
                </div>
                <div className="container-sm">
                    <div className="ourVision-grid">
                        <div>
                            <div className="ourVision-subgrid">
                                <div className="animate__animated animate__fadeInUp wow" data-wow-offset="100"  data-wow-delay="0.1s">
                                    <h3 className="animate__animated animate__fadeInUp wow" data-wow-offset="100"  data-wow-delay="0.1s">Our <span>Vision</span></h3>
                                    <div className="visionmision-items">
                                        <p>To build a transparent and secure trading ecosystem where traders operate with confidence, clarity, and trust.</p>
                                    </div>
                                </div>
                                <div className="animate__animated animate__fadeInUp wow" data-wow-offset="100"  data-wow-delay="0.4s">
                                    <h3>Our <span>Mission</span></h3>
                                    <div className="visionmision-items">
                                        <p>Our mission is to provide traders with reliable infrastructure, secure fund handling, professional tools, and responsive support — while maintaining high operational discipline and global best practices.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="over-vision-image animate__animated animate__fadeInRight wow" data-wow-offset="100"  data-wow-delay="0.4s">
                                <img src={Mission} alt="Mission"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}