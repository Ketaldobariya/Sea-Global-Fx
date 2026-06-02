import React from "react";
import "./reliableFunding.scss"
import MobileBanner from "../../../assets/images/mobile-banner.png"
export default function ReliableFunding(){
    return(
        <section>
            <div className="reliableFunding-section">
                <div className="container-xl">
                    <div className="reliableFunding-gridbox">
                        <div className="reliableFunding-text-container">
                            <div className="reliableFunding-heading">
                                <h2 className="animate__animated animate__fadeInUp wow" data-wow-offset="10"  data-wow-delay="0.1s">Reliable Funding & <span> Withdrawals </span></h2>
                                <p className="animate__animated animate__fadeInUp wow" data-wow-offset="10"  data-wow-delay="0.2s">Sea Global is committed to providing a smooth, secure, and transparent funding experience, ensuring clients can deposit and withdraw funds efficiently and with confidence.</p>
                            </div>
                        <div className="reliableFunding-subbox-grid">
                            <div className="reliableFunding-subbox-grid-item animate__animated animate__fadeInUp wow" data-wow-offset="10"  data-wow-delay="0.2s">
                                <h3>Wide Range of Global Payment Methods</h3>
                                <p>Access multiple deposit and withdrawal options, including cards, bank transfers, and other regionally supported payment solutions.</p>
                            </div>
                            <div className="reliableFunding-subbox-grid-item animate__animated animate__fadeInUp wow" data-wow-offset="10"  data-wow-delay="0.4s">
                                <h3>Instant Deposits</h3>
                                <p>Most deposit methods are processed instantly, allowing traders to fund accounts and access markets without unnecessary delays.</p>
                            </div>
                            <div className="reliableFunding-subbox-grid-item animate__animated animate__fadeInUp wow" data-wow-offset="10"  data-wow-delay="0.8s">
                                <h3>Fast & Transparent Withdrawals</h3>
                                <p>Withdrawal requests are processed promptly, with clear timelines and no hidden charges under normal conditions.</p>
                            </div>
                            <div className="reliableFunding-subbox-grid-item animate__animated animate__fadeInUp wow" data-wow-offset="10"  data-wow-delay="1s">
                                <h3>Secure Payment Processing</h3>
                                <p>All transactions are handled through encrypted, secure payment systems to protect client iformation.</p>
                            </div>
                        </div>
                        </div>
                        <div className="reliableFunding-image-container">
                            <div className="reliableFunding-image-animation">
                                <img src={MobileBanner} alt="MobileBanner"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}