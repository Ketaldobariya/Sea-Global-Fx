import React from "react";
import "./ourForexPartner.scss";
import Leftlayer from "../../../assets/images/left-layer.png";
import Rightlayer from "../../../assets/images/right-layer.svg";
import BlackArrow from "../../../assets/images/black-arrow.svg";
export default function OurForexPartner() {
  return (
    <section>
      <div className="ourForexPartner-section">
        <div className="ourForexPartner-left-layer">
          <img src={Leftlayer} alt="Leftlayer" />
        </div>
        <div className="ourForexPartner-right-layer">
          <img src={Rightlayer} alt="Rightlayer" />
        </div>
        <div className="container-xs8">
          <div className="ourForexPartner-title">
            <h2 className="animate__animated animate__fadeInUp wow" data-wow-offset="100"  data-wow-delay="0.2s">
              Our Forex Partner <span> Program </span>
            </h2>
          </div>
          <div className="ourForexPartner-box">
            <div className="ourForexPartner-box-header">
              <h3>Introducing Broker (IB) Program</h3>
            </div>
            <div className="ourForexPartner-box-body">
              <div className="ourForexPartner-body-content">
                <div>
                  <p>Suitable for:</p>
                  <ul>
                    <li>Trading educators</li>
                    <li>Signal providers</li>
                    <li>Trading communities</li>
                    <li>Professional marketers with trader audiences</li>
                  </ul>
                </div>
                <div className="ourForexPartner-line"></div>
                <div>
                  <p>Key Benefits:</p>
                  <ul>
                    <li>Earn commissions based on client trading activity</li>
                    <li>Flexible rebate structures</li>
                    <li>Dedicated IB account manager</li>
                    <li>Long-term partnership model</li>
                  </ul>
                </div>
              </div>
              <div className="ourForexPartner-grid-button">
                <div className="ourForexPartner-left-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="171"
                    height="59"
                    viewBox="0 0 171 59"
                    fill="none"
                  >
                    <line
                      x1="112"
                      y1="29.5"
                      x2="4.37114e-08"
                      y2="29.5"
                      stroke="url(#paint0_linear_4130_568)"
                    ></line>
                    <circle
                      cx="141.5"
                      cy="29.5"
                      r="29"
                      stroke="url(#paint1_linear_4130_568)"
                    ></circle>
                    <defs>
                      <linearGradient
                        id="paint0_linear_4130_568"
                        x1="112"
                        y1="28.5"
                        x2="-4.37114e-08"
                        y2="28.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#252525"></stop>
                        <stop
                          offset="1"
                          stop-color="#F1F1F1"
                          stop-opacity="0"
                        ></stop>
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_4130_568"
                        x1="171"
                        y1="29.5"
                        x2="112"
                        y2="29.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop
                          offset="0.393941"
                          stop-color="#F1F1F1"
                          stop-opacity="0"
                        ></stop>
                        <stop offset="1" stop-color="#252525"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="ourForexPartner-right-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="171"
                    height="59"
                    viewBox="0 0 171 59"
                    fill="none"
                  >
                    <line
                      y1="-0.5"
                      x2="112"
                      y2="-0.5"
                      transform="matrix(1 8.74228e-08 8.74228e-08 -1 59 29)"
                      stroke="url(#paint0_linear_4130_571)"
                    ></line>
                    <circle
                      cx="29.5"
                      cy="29.5"
                      r="29"
                      transform="matrix(-1 0 0 1 59 0)"
                      stroke="url(#paint1_linear_4130_571)"
                    ></circle>
                    <defs>
                      <linearGradient
                        id="paint0_linear_4130_571"
                        x1="0"
                        y1="0.5"
                        x2="112"
                        y2="0.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#252525"></stop>
                        <stop
                          offset="1"
                          stop-color="#F1F1F1"
                          stop-opacity="0"
                        ></stop>
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_4130_571"
                        x1="59"
                        y1="29.5"
                        x2="0"
                        y2="29.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop
                          offset="0.393941"
                          stop-color="#F1F1F1"
                          stop-opacity="0"
                        ></stop>
                        <stop offset="1" stop-color="#252525"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                  <button>
                    <img src={BlackArrow} alt="BlackArrow" />
                    Open Account
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
