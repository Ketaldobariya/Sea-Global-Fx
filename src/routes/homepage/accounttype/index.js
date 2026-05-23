import "./accounttype.scss";
import BlackArro from "../../../assets/images/black-arrow.svg";
import PrimaryArro from "../../../assets/images/arrow-primary.svg"
import RotateArro from "../../../assets/images/rotate-arrow.svg"
import Market from "../../../assets/images/market.svg"
import Calculator from "../../../assets/images/Calculators.svg"
import Analysis from "../../../assets/images/Analysis.svg"
import Economic from "../../../assets/images/Economic.svg"
export default function Accounttype() {
  return (
    <section>
      <div className="account-type-section">
        <div className="container-xl">
          <div className="account-type-G-title">
            <h2 className="animate__animated animate__fadeInUp wow" data-wow-offset="10"  data-wow-delay="0.1s">
              <span>Account </span> Types
            </h2>
            <p className="animate__animated animate__fadeInUp wow" data-wow-offset="10"  data-wow-delay="0.3s">
              Pick an account that matches your trading style and experience
              level. Our MT5 trading accounts are designed with transparent
              pricing, competitive spreads, and flexible conditions.
            </p>
          </div>
          <div className="account-type-cards">
            <div className="account-bottom-card animate__animated animate__fadeInUp wow" data-wow-offset="50" data-wow-duration="1.5s"  data-wow-delay="0.4s">
              <div className="account-card">
                <div className="card-header">
                  <h3>Pro</h3>
                </div>
                <div className="card-bottom-details">
                  <div className="card-bottom-paragraph">
                    <p>
                      A straightforward account with no separate commission,
                      designed for ease of use and cost transparency.
                    </p>
                  </div>
                  <div className="card-bottom-allTextStyle">
                    <div className="accountType-text-flex">
                      <p>Minimum Deposit:</p>
                      <span>$1,000</span>
                    </div>
                    <div className="accountType-text-flex">
                      <p>Commission:</p>
                      <span>$0</span>
                    </div>
                    <div className="accountType-text-flex">
                      <p>Spread:</p>
                      <span>From 20 Cents</span>
                    </div>
                    <div className="accountType-text-flex">
                      <p>Leverage:</p>
                      <span>50 to 500</span>
                    </div>
                    <div className="accountType-text-flex">
                      <p>Currencies</p>
                      <span>USD</span>
                    </div>
                  </div>
                </div>
                <div className="accountType-grid-button">
                  <div className="buton-left-design">
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
                  <div className="button-right-design">
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
                  <a href="/" aria-label="open Account btn" target="_blank" rel="noreferrer">
                    <button>
                      <img src={BlackArro} alt="BlackArro" />
                      Open Account
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className="account-bottom-card center-card-direction animate__animated animate__fadeInUp wow" data-wow-duration="1.5s" data-wow-offset="50"  data-wow-delay="0.5s">
              <div className="account-card">
                <div className="card-header card-header-yelllow">
                  <h3>Standard</h3>
                </div>
                <div className="card-bottom-details">
                  <div className="card-bottom-paragraph">
                    <p>
                      Built for traders who want tighter spreads and enhanced
                      support while maintaining simple pricing.
                    </p>
                  </div>
                  <div className="card-bottom-allTextStyle">
                    <div className="accountType-text-flex">
                      <p>Minimum Deposit:</p>
                      <span>$500</span>
                    </div>
                    <div className="accountType-text-flex">
                      <p>Commission:</p>
                      <span>$0</span>
                    </div>
                    <div className="accountType-text-flex">
                      <p>Spread:</p>
                      <span>25 Cents</span>
                    </div>
                    <div className="accountType-text-flex">
                      <p>Leverage:</p>
                      <span>1000</span>
                    </div>
                    <div className="accountType-text-flex">
                      <p>Currencies</p>
                      <span>USD</span>
                    </div>
                  </div>
                </div>
                <div className="accountType-grid-button">
                  <div className="buton-left-design">
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
                  <div className="button-right-design">
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
                  <a href="/" aria-label="open Account btn" target="_blank" rel="noreferrer">
                    <button className="card-header-yelllow">
                      <img src={PrimaryArro} alt="PrimaryArro" />
                      Open Account
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className="account-bottom-card animate__animated animate__fadeInUp wow" data-wow-offset="50" data-wow-duration="1.5s" data-wow-delay="0.6s">
              <div className="account-card">
                <div className="card-header">
                  <h3>Plus</h3>
                </div>
                <div className="card-bottom-details">
                  <div className="card-bottom-paragraph">
                    <p>
                      Designed for active traders who prioritize pricing
                      efficiency and execution quality. For cost-focused traders
                      using raw pricing
                    </p>
                  </div>
                  <div className="card-bottom-allTextStyle">
                    <div className="accountType-text-flex">
                      <p>Minimum Deposit:</p>
                      <span>$1,000</span>
                    </div>
                    <div className="accountType-text-flex">
                      <p>Commission:</p>
                      <span>$0</span>
                    </div>
                    <div className="accountType-text-flex">
                      <p>Spread:</p>
                      <span>From 20 Cents</span>
                    </div>
                    <div className="accountType-text-flex">
                      <p>Leverage:</p>
                      <span>50 to 500</span>
                    </div>
                    <div className="accountType-text-flex">
                      <p>Currencies</p>
                      <span>USD</span>
                    </div>
                  </div>
                </div>
                <div className="accountType-grid-button">
                  <div className="buton-left-design">
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
                  <div className="button-right-design">
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
                  <a href="/" aria-label="open Account btn" target="_blank" rel="noreferrer">
                    <button>
                      <img src={BlackArro} alt="BlackArro" />
                      Open Account
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="education-section">
            <div className="education-section-grid">
              <div className="education-section-grid-itemes-left">
                <div className="education-section-item-text">
                  <h2>
                    <span>Education &</span>
                    Trading Tools
                  </h2>
                  <p>Enhance your trading knowledge and decision-making with our education hub and professional trading tools, designed to support traders at every stage of their journey.</p>
                </div>
              </div>
              <div className="education-section-grid-itemes-right">
                <div className="education-section-grid-leftside-details">
                    <div className="leftside-details-margin">
                        <div className="left-side-card market-hidden-cards"></div>
                        <div className="left-side-card">
                            <h3>Know Your Markets</h3>
                            <div className="rotate-arro">
                                <img src={RotateArro} alt="RotateArro"/>
                            </div>
                            <div className="card-bottom-icon">
                                <img src={Market} alt="Market"/>
                            </div>
                        </div>
                        <div className="left-side-card">
                            <h3>Trading Calculators</h3>
                            <div className="rotate-arro">
                                <img src={RotateArro} alt="RotateArro"/>
                            </div>
                            <div className="card-bottom-icon">
                                <img src={Calculator} alt="Calculator"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="education-section-grid-leftside-details">
                    <div className="leftside-details-margin right-margin">
                        <div className="left-side-card">
                            <h3>Market Analysis</h3>
                            <div className="rotate-arro">
                                <img src={RotateArro} alt="RotateArro"/>
                            </div>
                            <div className="card-bottom-icon">
                                <img src={Analysis} alt="Analysis"/>
                            </div>
                        </div>
                        <div className="left-side-card">
                            <h3>Economic Calendar</h3>
                            <div className="rotate-arro">
                                <img src={RotateArro} alt="RotateArro"/>
                            </div>
                            <div className="card-bottom-icon">
                                <img src={Economic} alt="Economic"/>
                            </div>
                        </div>
                        <div className="left-side-card market-hidden-cards"></div>
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
