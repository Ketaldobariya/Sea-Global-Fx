import React from "react";
import "./whyPartner.scss"
import LayerBack from "../../../assets/images/layer-black.png"
import Competitive from "../../../assets/images/Competitive.svg"
import Transparent from "../../../assets/images/Transparent.png"
import Global from "../../../assets/images/Global.svg"
import Support from "../../../assets/images/Support.svg"
export default function WhyPartner(){
    return(
        <section>
            <div className="WhyPartner-section">
                <div className="WhyPartner-black-background">
                    <img src={LayerBack} alt="LayerBack"/>
                </div>
                <div className="container-xl">
                    <div className="WhyPartner-title">
                        <h2 className="animate__animated animate__fadeInUp wow" data-wow-offset="100"  data-wow-delay="0.1s">Why Partner With <span> Sea Global FX? </span></h2>
                    </div>
                    <div className="WhyPartner-grid-box">
                        <div className="WhyPartner-grid-items animate__animated animate__fadeInUp wow" data-wow-offset="100"  data-wow-delay="0.2s">
                            <div className="WhyPartner-iconCenter">
                                <img src={Competitive} alt="Competitive"/>
                            </div>
                            <p>Competitive IB Commissions</p>
                        </div>
                        <div className="WhyPartner-grid-items animate__animated animate__fadeInUp wow" data-wow-offset="100"  data-wow-delay="0.3s">
                            <div className="WhyPartner-iconCenter">
                                <img src={Transparent} alt="Transparent"/>
                            </div>
                            <p>Transparent Reporting</p>
                        </div>
                        <div className="WhyPartner-grid-items animate__animated animate__fadeInUp wow" data-wow-offset="100"  data-wow-delay="0.4s">
                            <div className="WhyPartner-iconCenter">
                                <img src={Global} alt="Global"/>
                            </div>
                            <p>Global Client Reach</p>
                        </div>
                        <div className="WhyPartner-grid-items animate__animated animate__fadeInUp wow" data-wow-offset="100"  data-wow-delay="0.5s">
                            <div className="WhyPartner-iconCenter">
                                <img src={Support} alt="Support"/>
                            </div>
                            <p>Dedicated Partner Support</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}