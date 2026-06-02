import React from "react";
import "./partnerTool.scss"
import BackLayer from "../../../assets/images/layer-black.png"
import Tools from "../../../assets/images/tools.png"
export default function PartnerTool(){
    return(
        <section>
            <div className="partnerTool-section">
                <div className="background-layer">
                    <img src={BackLayer} alt="BackLayer"/>
                </div>
                <div className="container-xl">
                    <div className="partnerTool-grid">
                        <div className="partnerTool-items">
                            <div className="partnerTool-items-image">
                                <img src={Tools} alt="Tools"/>
                            </div>
                        </div>
                        <div className="partnerTool-items">
                            <div className="partnerTool-text">
                                <h2>Partner <span> Tools </span> & Dedicated Support</h2>
                                <div className="partnerTool-grid-box">
                                    <div className="partnerTool-grid-box-items">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 12L11 14L15 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        <p>Advanced performance analytics</p>
                                    </div>
                                    <div className="partnerTool-grid-box-items">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 12L11 14L15 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        <p>Real-time commission tracking</p>
                                    </div>
                                    <div className="partnerTool-grid-box-items">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 12L11 14L15 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        <p>Custom IB referral links</p>
                                    </div>
                                    <div className="partnerTool-grid-box-items">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 12L11 14L15 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        <p>Dedicated partner manager</p>
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