import React from "react";
import "./startTradingOnPlatform.scss"
import Openaccountbtn from "../../../components/openaccountbtn";
import Trydemo from "../../../components/trydemo";
import Home from "../../../assets/images/home.png"
export default function StartTradingOnPlatform(){
    return(
        <section>
            <div className="startTradingForex-section">
                <div className="container-xl">
                    <div className="startTradingForex-box">
                        <div className="startTradingForex-box-grid">
                            <div className="startTradingForex-box-leftside">
                                <h3 className="platform-header-start animate__animated animate__fadeInUp wow" data-wow-offset="70"  data-wow-delay="0.1s">Start Trading on a <br/><span>Platform </span>That Fits You</h3>
                                <h6 className="animate__animated animate__fadeInUp wow" data-wow-offset="70"  data-wow-delay="0.2s">Choose the trading platform that matches your experience level and strategy, and access global markets with Sea Global’s reliable trading infrastructure.</h6>
                                <div className="startTrading-twobutton-alignment">
                                    <div className="open-account-button animate__animated animate__fadeInUp wow" data-wow-offset="70"  data-wow-delay="0.5s">
                                        <Openaccountbtn/>
                                    </div>
                                    <div className="trydemo-button animate__animated animate__fadeInUp wow" data-wow-offset="70"  data-wow-delay="0.7s">
                                        <Trydemo/>
                                    </div>
                                </div>
                            </div>
                            <div className="startTradingForex-box-rightside">
                                <div className="startTradingForex-box-rightside-image animate__animated animate__fadeInRight wow" data-wow-offset="70"  data-wow-delay="0.1s">
                                    <img src={Home} alt="Home"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}