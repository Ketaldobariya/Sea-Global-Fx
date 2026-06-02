import React from "react";
import "./startTradingForex.scss"
import Openaccountbtn from "../../../components/openaccountbtn";
import Trydemo from "../../../components/trydemo";
import Earth from "../../../assets/images/earth.png"
export default function StartTradingForex(){
    return(
        <section>
            <div className="startTradingForex-section">
                <div className="container-xl">
                    <div className="startTradingForex-box">
                        <div className="startTradingForex-box-grid">
                            <div className="startTradingForex-box-leftside">
                                <h3 className="animate__animated animate__fadeInUp wow" data-wow-offset="70"  data-wow-delay="0.1s">Start Trading <span>Forex</span> Today</h3>
                                <h6 className="animate__animated animate__fadeInUp wow" data-wow-offset="70"  data-wow-delay="0.2s">Trade forex market with Sea Global’s professional trading infrastructure, competitive pricing, and reliable execution—designed to support traders at every level.</h6>
                                <div className="startTrading-twobutton-alignment">
                                    <div className="open-account-button animate__animated animate__fadeInUp wow" data-wow-offset="70"  data-wow-delay="0.4s">
                                        <Openaccountbtn/>
                                    </div>
                                    <div className="trydemo-button animate__animated animate__fadeInUp wow" data-wow-offset="70"  data-wow-delay="0.6s">
                                        <Trydemo/>
                                    </div>
                                </div>
                            </div>
                            <div className="startTradingForex-box-rightside">
                                <div className="startTradingForex-box-rightside-image animate__animated animate__fadeInRight wow" data-wow-offset="70"  data-wow-delay="0.1s">
                                    <img src={Earth} alt="Earth"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}