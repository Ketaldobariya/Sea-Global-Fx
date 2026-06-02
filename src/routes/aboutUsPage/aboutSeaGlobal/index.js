import React from "react";
import "./aboutSeaGlobal.scss";
import About from "../../../assets/images/about.png"
export default function AboutSeaGlobal(){
    return(
        <section>
            <div className="aboutSeaGlobal-section">
                <div className="container-sm">
                    <div className="aboutSeaGlobal-grid">
                        <div className="aboutSeaGlobal-grid-items">
                            <div className="aboutSeaGlobal-grid-items-image animate__animated animate__fadeInLeft wow" data-wow-offset="70"  data-wow-delay="0.1s">
                                <img src={About} alt="About"/>
                            </div>
                        </div>
                        <div className="aboutSeaGlobal-grid-items-text">
                            <h2 className="animate__animated animate__fadeInUp wow" data-wow-offset="50"  data-wow-delay="0.1s">About <span> Sea Global FX </span></h2>
                            <p className="animate__animated animate__fadeInUp wow" data-wow-offset="50"  data-wow-delay="0.2s">Sea Global FX is a global trading broker focused on delivering a transparent, secure, and professionally managed trading environment.</p>
                            <p className="animate__animated animate__fadeInUp wow" data-wow-offset="50"  data-wow-delay="0.3s">We are committed to maintaining clear operational standards, robust infrastructure, and reliable client support. Our approach is built on trust, responsibility, and long-term relationships with traders across global markets.</p>
                            <p className="animate__animated animate__fadeInUp wow" data-wow-offset="50"  data-wow-delay="0.4s">Every feature, process, and service at Sea Global FX is designed to support fair trading conditions and help clients trade with clarity and confidence.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}