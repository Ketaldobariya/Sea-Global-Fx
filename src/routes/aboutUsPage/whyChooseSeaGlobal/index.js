import React from "react";
import "./whyChooseSeaGlobal.scss"
import Openaccountbtn from "../../../components/openaccountbtn/index.js";
import Disclosures from "../../../assets/images/disclosures.png";
import Secure from "../../../assets/images/Secure.png";
import Transparent from "../../../assets/images/Transparent.png";
import Professional from "../../../assets/images/Professional.png";
export default function WhyChooseSeaGlobal(){
    return(
        <section>
             <div className="whyChoose-SeaGlobal-section">
                    <div className="container-xl">
                      <div className="openYourAccount-title">
                        <h2 className="whyChoose-heading animate__animated animate__fadeInUp wow" data-wow-offset="10"  data-wow-delay="0.1s">
                         Why Choose <span> Sea Global FX? </span>
                        </h2>
                        <p className="animate__animated animate__fadeInUp wow" data-wow-offset="10"  data-wow-delay="0.3s">Trade with confidence through Sea Global, a broker committed to global standards, robust compliance, and professional-grade trading infrastructure. Every aspect of our service is designed to protect clients, ensure fairness, and deliver a reliable trading environment.</p>
                      </div>
                      <div className="easy-steps-cards">
                        <div className="easy-step-card animate__animated animate__fadeInUp wow" data-wow-offset="10"  data-wow-delay="0.5s">
                        <div className="card-text-container">
                          <div className="easy-steps-card-counter">1</div>
                          <h3>Clear regulatory disclosures</h3>
                          </div>
                          <div className="easy-steps-card-iconRight">
                            <img src={Disclosures} alt="Disclosures" />
                          </div>
                        </div>
                        <div className="easy-step-card animate__animated animate__fadeInUp wow" data-wow-offset="10"  data-wow-delay="0.6s">
                          <div className="card-text-container">
                          <div className="easy-steps-card-counter">2</div>
                          <h3>Secure handling of client funds and data</h3>
                          </div>
                          <div className="easy-steps-card-iconRight">
                            <img src={Secure} alt="Secure" />
                          </div>
                        </div>
                        <div className="easy-step-card animate__animated animate__fadeInUp wow" data-wow-offset="10"  data-wow-delay="0.7s">
                          <div className="card-text-container">
                          <div className="easy-steps-card-counter">3</div>
                          <h3>Transparent trading conditions and pricing</h3>
                          </div>
                          <div className="easy-steps-card-iconRight">
                            <img src={Transparent} alt="Transparent" />
                          </div>
                        </div>
                        <div className="easy-step-card animate__animated animate__fadeInUp wow" data-wow-offset="10"  data-wow-delay="0.8s">
                        <div className="card-text-container">
                          <div className="easy-steps-card-counter">4</div>
                          <h3 className="why-choose-heading-card">Professional tools and infrastructure</h3>
                          </div>
                          <div className="easy-steps-card-iconRight">
                            <img src={Professional} alt="Professional" />
                          </div>
                        </div>
                      </div>
                      <div className="account-center-button animate__animated animate__fadeInUp wow" data-wow-offset="50"  data-wow-delay="0.8s">
                        <a href="/" aria-label="account button" target="_blank" rel="noreferrer">
                            <Openaccountbtn/>
                        </a>
                      </div>
                    </div>
                  </div>
        </section>
    );
}