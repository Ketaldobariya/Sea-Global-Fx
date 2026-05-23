import "./availableInstruments.scss";
import CA from "../../../assets/images/CA.svg";
import AU from "../../../assets/images/AU.svg";
export default function AvailableInstruments() {
  return (
    <section>
      <div className="availableInstruments-section">
        <div className="container-xs2">
          <div className="availableInstruments-title">
            <h2
              className="animate__animated animate__fadeInUp wow"
              data-wow-offset="100"
              data-wow-delay="0.5s"
            >
              Available <span>Instruments</span>
            </h2>
            <p
              className="animate__animated animate__fadeInUp wow"
              data-wow-offset="100"
              data-wow-delay="0.9s"
            >
              Trade a carefully selected range of instruments within this
              market, offering liquidity, transparency, and global exposure. Sea
              Global provides access to popular and actively traded instruments
              designed to support diverse trading strategies.
            </p>
          </div>
          <div className="tradingview-container">
            <div className="tradingview-container-widget">
              <div className="tradingview-container-widget-height">
                <div className="tradingview-table-alignment">
                  <div className="right-image-hover-logo">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="18"
                      fill="none"
                      viewBox="0 0 21 18"
                    >
                      <path
                        fill="currentColor"
                        fill-rule="evenodd"
                        d="M8 4H0v4h4v6h4zm8 10h-5l4-10h5zm-5-6a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="85"
                      height="18"
                      fill="none"
                      viewBox="0 0 85 18"
                    >
                      <g fill="currentColor" clip-path="url(#a)">
                        <path d="M63.67 4.52c0 .67-.56 1.22-1.27 1.22-.69 0-1.27-.55-1.27-1.22 0-.68.58-1.22 1.27-1.22s1.27.54 1.27 1.22M63.42 14h-2.06V6.43h2.06zM32.24 5.8c.71 0 1.28-.55 1.28-1.22 0-.68-.57-1.22-1.28-1.22-.68 0-1.26.54-1.26 1.22s.58 1.22 1.26 1.22M31.18 14h2.06V6.47h-2.06zM5.8 14H3.74V6H1V4h7.55v2H5.8zM10.6 14H8.55V6.46h2.05v1.3c.25-.7.92-1.22 1.74-1.22h.02q.29-.02.64.07v1.95c-.3-.1-.56-.13-.9-.13-.94 0-1.5.69-1.5 1.85zM36.67 14H34.6V6.48l2.06-.01v.69q.59-.85 2-.84c1.75 0 2.8 1.24 2.8 3.06V14H39.4V9.9c0-1-.38-1.82-1.21-1.82-.93 0-1.53.63-1.53 1.98zM56.56 14l4.17-10h-2.4l-2.8 7.1L52.5 4h-2.4l4.4 10zM81.5 14h-2l-1.33-4.25L76.8 14h-2.01l-2.45-7.51h2.15l1.4 4.83 1.5-4.83h1.55l1.5 4.83 1.39-4.83H84z"></path>
                        <path
                          fill-rule="evenodd"
                          d="M16.72 14.2c1.04 0 1.77-.54 2.11-1.02V14h2.06V6.47h-2.05v.84a2.6 2.6 0 0 0-2.12-1c-2 0-3.55 1.8-3.55 3.94s1.54 3.94 3.55 3.94m.44-1.9c-1.15 0-1.9-.86-1.9-2.05 0-1.2.75-2.06 1.9-2.06s1.9.86 1.9 2.06c0 1.19-.75 2.05-1.9 2.05M27.75 13.18a2.6 2.6 0 0 1-2.11 1.01c-2 0-3.55-1.81-3.55-3.94s1.54-3.95 3.55-3.95c1.04 0 1.77.53 2.11 1.02V3.36h2.06V14h-2.06zm-3.58-2.93c0 1.2.76 2.05 1.9 2.05 1.15 0 1.9-.86 1.9-2.05 0-1.2-.75-2.06-1.9-2.06-1.14 0-1.9.86-1.9 2.06M46.43 17.35c2.3 0 3.96-1.18 3.96-3.9V6.5h-2.06v.84a2.5 2.5 0 0 0-2.1-1c-1.98 0-3.56 1.68-3.56 3.82 0 2.11 1.58 3.9 3.56 3.9.97 0 1.7-.53 2.1-1.1v.52c0 1.2-.71 2.07-1.93 2.07-.85 0-1.7-.29-2.36-.94l-1.13 1.54a5 5 0 0 0 3.52 1.21m.24-5.27a1.9 1.9 0 0 1-1.92-1.93c0-1.17.88-1.94 1.92-1.94s1.92.77 1.92 1.94c0 1.14-.88 1.93-1.92 1.93M72.19 12.7a4.1 4.1 0 0 1-3.5 1.69c-2.25 0-4-1.56-4-3.95a3.86 3.86 0 0 1 3.97-3.94c1.97 0 3.71 1.25 3.71 3.72v.1q0 .28-.03.68H66.7c.12 1 1 1.5 2 1.5.95 0 1.6-.42 1.95-.95zm-3.6-4.5c-.76 0-1.62.4-1.82 1.32h3.53c-.18-.9-.93-1.31-1.7-1.31"
                          clip-rule="evenodd"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="a">
                          <path fill="#fff" d="M0 0h85v18H0z"></path>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="tradingview-table-alignment-overflow-hidden">
                    <div className="tradingview-header">
                      <div className="tradingview-header-overviewbtn">
                        <div className="tradingview-header-overviewbtn-toolbar-btn">
                          Overview
                        </div>
                      </div>
                      <div className="tradingview-header-wrap-btn">
                        <div className="tradingview-header-wrap-btn-alignment">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 14 12"
                            width="14"
                            height="12"
                            fill="none"
                            class="tv-screener-toolbar__button-icon"
                          >
                            <path
                              fill="currentColor"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M2.71 1.29H1.3v9.42H2.7V1.3zM1.3 0C.58 0 0 .58 0 1.29v9.42C0 11.42.58 12 1.29 12H2.7C3.42 12 4 11.42 4 10.71V1.3C4 .58 3.42 0 2.71 0H1.3zM7.7 1.29H6.3v9.42H7.7V1.3zM6.3 0C5.58 0 5 .58 5 1.29v9.42c0 .71.58 1.29 1.29 1.29H7.7C8.42 12 9 11.42 9 10.71V1.3C9 .58 8.42 0 7.71 0H6.3zm5 1.29h1.42v9.42H11.3V1.3zm-1.29 0C10 .58 10.58 0 11.29 0h1.42C13.42 0 14 .58 14 1.29v9.42c0 .71-.58 1.29-1.29 1.29H11.3c-.71 0-1.29-.58-1.29-1.29V1.3z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="tradingview-favorite"></div>
                      <div className="tradingview-allpair-btn">
                        <div className="tradingview-allpair-btn-alignment">
                          <span>All Pairs</span>
                        </div>
                      </div>
                      <div className="tradingview-allpair-btn">
                        <div className="tradingview-allpair-btn-alignment">
                          <span>General</span>
                        </div>
                      </div>
                      <div className="background-blue">
                        <div className="tradingview-filter-btn-alignment">
                          <span>Filters</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 19 22"
                            width="19"
                            height="22"
                            fill="none"
                            class="tv-screener-toolbar__button-icon tv-screener-toolbar__button-icon--filters"
                          >
                            <path
                              fill="currentColor"
                              fill-rule="evenodd"
                              d="M5 1v9.13a4 4 0 0 1 0 7.75V21a1 1 0 1 1-2 0v-3-.12a4 4 0 0 1 0-7.75V1a1 1 0 0 1 2 0zM2 14a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm12-9.88V1a1 1 0 1 1 2 0v3.12a4 4 0 0 1 0 7.75V21a1 1 0 1 1-2 0v-9.13a4 4 0 0 1 0-7.75zM15 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="table-alignment">
                      <table className="table">
                        <thead className="thead">
                          <tr className="tr">
                            <th className="th">
                              <div className="ticker-matches-view-btn">
                                <div className="ticker-matches-view-btn-alignment">
                                  <div className="head-left-text">
                                    <div className="head-left-text-alignment">
                                      Ticker
                                    </div>
                                  </div>
                                  <div className="head-left-text-bottom-text">
                                    NO matches
                                  </div>
                                </div>
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 8 3"
                                    width="8"
                                    height="3"
                                  >
                                    <path d="M0 3 L4 0 L8 3 Z"></path>
                                  </svg>
                                </span>
                              </div>
                            </th>
                            <th className="th">
                              <div className="ticker-matches-view-btn">
                                <div className="ticker-matches-view-btn-alignment">
                                  <div className="head-left-text">
                                    <div className="head-left-text-alignment">
                                      Price
                                    </div>
                                  </div>
                                  <div className="head-right-hover-svg">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 19 22"
                                      width="19"
                                      height="22"
                                      fill="none"
                                    >
                                      <path
                                        fill="currentColor"
                                        fill-rule="evenodd"
                                        d="M5 1v9.13a4 4 0 0 1 0 7.75V21a1 1 0 1 1-2 0v-3-.12a4 4 0 0 1 0-7.75V1a1 1 0 0 1 2 0zM2 14a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm12-9.88V1a1 1 0 1 1 2 0v3.12a4 4 0 0 1 0 7.75V21a1 1 0 1 1-2 0v-9.13a4 4 0 0 1 0-7.75zM15 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                                      ></path>
                                    </svg>
                                  </div>
                                </div>
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 8 3"
                                    width="8"
                                    height="3"
                                  >
                                    <path d="M0 3 L4 0 L8 3 Z"></path>
                                  </svg>
                                </span>
                              </div>
                            </th>
                            <th className="th">
                              <div className="ticker-matches-view-btn">
                                <div className="ticker-matches-view-btn-alignment">
                                  <div className="head-left-text">
                                    <div className="head-left-text-alignment">
                                      Chg %
                                    </div>
                                  </div>
                                  <div className="head-right-hover-svg">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 19 22"
                                      width="19"
                                      height="22"
                                      fill="none"
                                    >
                                      <path
                                        fill="currentColor"
                                        fill-rule="evenodd"
                                        d="M5 1v9.13a4 4 0 0 1 0 7.75V21a1 1 0 1 1-2 0v-3-.12a4 4 0 0 1 0-7.75V1a1 1 0 0 1 2 0zM2 14a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm12-9.88V1a1 1 0 1 1 2 0v3.12a4 4 0 0 1 0 7.75V21a1 1 0 1 1-2 0v-9.13a4 4 0 0 1 0-7.75zM15 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                                      ></path>
                                    </svg>
                                  </div>
                                </div>
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 8 3"
                                    width="8"
                                    height="3"
                                  >
                                    <path d="M0 3 L4 0 L8 3 Z"></path>
                                  </svg>
                                </span>
                              </div>
                            </th>
                            <th className="th">
                              <div className="ticker-matches-view-btn">
                                <div className="ticker-matches-view-btn-alignment">
                                  <div className="head-left-text">
                                    <div className="head-left-text-alignment">
                                      Chg
                                    </div>
                                  </div>
                                  <div className="head-right-hover-svg">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 19 22"
                                      width="19"
                                      height="22"
                                      fill="none"
                                    >
                                      <path
                                        fill="currentColor"
                                        fill-rule="evenodd"
                                        d="M5 1v9.13a4 4 0 0 1 0 7.75V21a1 1 0 1 1-2 0v-3-.12a4 4 0 0 1 0-7.75V1a1 1 0 0 1 2 0zM2 14a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm12-9.88V1a1 1 0 1 1 2 0v3.12a4 4 0 0 1 0 7.75V21a1 1 0 1 1-2 0v-9.13a4 4 0 0 1 0-7.75zM15 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                                      ></path>
                                    </svg>
                                  </div>
                                </div>
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 8 3"
                                    width="8"
                                    height="3"
                                  >
                                    <path d="M0 3 L4 0 L8 3 Z"></path>
                                  </svg>
                                </span>
                              </div>
                            </th>
                            <th className="th">
                              <div className="ticker-matches-view-btn">
                                <div className="ticker-matches-view-btn-alignment">
                                  <div className="head-left-text">
                                    <div className="head-left-text-alignment">
                                      Bid
                                    </div>
                                  </div>
                                  <div className="head-right-hover-svg">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 19 22"
                                      width="19"
                                      height="22"
                                      fill="none"
                                    >
                                      <path
                                        fill="currentColor"
                                        fill-rule="evenodd"
                                        d="M5 1v9.13a4 4 0 0 1 0 7.75V21a1 1 0 1 1-2 0v-3-.12a4 4 0 0 1 0-7.75V1a1 1 0 0 1 2 0zM2 14a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm12-9.88V1a1 1 0 1 1 2 0v3.12a4 4 0 0 1 0 7.75V21a1 1 0 1 1-2 0v-9.13a4 4 0 0 1 0-7.75zM15 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                                      ></path>
                                    </svg>
                                  </div>
                                </div>
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 8 3"
                                    width="8"
                                    height="3"
                                  >
                                    <path d="M0 3 L4 0 L8 3 Z"></path>
                                  </svg>
                                </span>
                              </div>
                            </th>
                            <th className="th">
                              <div className="ticker-matches-view-btn">
                                <div className="ticker-matches-view-btn-alignment">
                                  <div className="head-left-text">
                                    <div className="head-left-text-alignment">
                                      ASK
                                    </div>
                                  </div>
                                  <div className="head-right-hover-svg">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 19 22"
                                      width="19"
                                      height="22"
                                      fill="none"
                                    >
                                      <path
                                        fill="currentColor"
                                        fill-rule="evenodd"
                                        d="M5 1v9.13a4 4 0 0 1 0 7.75V21a1 1 0 1 1-2 0v-3-.12a4 4 0 0 1 0-7.75V1a1 1 0 0 1 2 0zM2 14a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm12-9.88V1a1 1 0 1 1 2 0v3.12a4 4 0 0 1 0 7.75V21a1 1 0 1 1-2 0v-9.13a4 4 0 0 1 0-7.75zM15 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                                      ></path>
                                    </svg>
                                  </div>
                                </div>
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 8 3"
                                    width="8"
                                    height="3"
                                  >
                                    <path d="M0 3 L4 0 L8 3 Z"></path>
                                  </svg>
                                </span>
                              </div>
                            </th>
                            <th className="th">
                              <div className="ticker-matches-view-btn">
                                <div className="ticker-matches-view-btn-alignment">
                                  <div className="head-left-text">
                                    <div className="head-left-text-alignment">
                                      HIGH
                                    </div>
                                  </div>
                                  <div className="head-right-hover-svg">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 19 22"
                                      width="19"
                                      height="22"
                                      fill="none"
                                    >
                                      <path
                                        fill="currentColor"
                                        fill-rule="evenodd"
                                        d="M5 1v9.13a4 4 0 0 1 0 7.75V21a1 1 0 1 1-2 0v-3-.12a4 4 0 0 1 0-7.75V1a1 1 0 0 1 2 0zM2 14a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm12-9.88V1a1 1 0 1 1 2 0v3.12a4 4 0 0 1 0 7.75V21a1 1 0 1 1-2 0v-9.13a4 4 0 0 1 0-7.75zM15 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                                      ></path>
                                    </svg>
                                  </div>
                                </div>
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 8 3"
                                    width="8"
                                    height="3"
                                  >
                                    <path d="M0 3 L4 0 L8 3 Z"></path>
                                  </svg>
                                </span>
                              </div>
                            </th>
                            <th className="th">
                              <div className="ticker-matches-view-btn">
                                <div className="ticker-matches-view-btn-alignment">
                                  <div className="head-left-text">
                                    <div className="head-left-text-alignment">
                                      LOW
                                    </div>
                                  </div>
                                  <div className="head-right-hover-svg">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 19 22"
                                      width="19"
                                      height="22"
                                      fill="none"
                                    >
                                      <path
                                        fill="currentColor"
                                        fill-rule="evenodd"
                                        d="M5 1v9.13a4 4 0 0 1 0 7.75V21a1 1 0 1 1-2 0v-3-.12a4 4 0 0 1 0-7.75V1a1 1 0 0 1 2 0zM2 14a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm12-9.88V1a1 1 0 1 1 2 0v3.12a4 4 0 0 1 0 7.75V21a1 1 0 1 1-2 0v-9.13a4 4 0 0 1 0-7.75zM15 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                                      ></path>
                                    </svg>
                                  </div>
                                </div>
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 8 3"
                                    width="8"
                                    height="3"
                                  >
                                    <path d="M0 3 L4 0 L8 3 Z"></path>
                                  </svg>
                                </span>
                              </div>
                            </th>
                            <th className="th technical-button-width">
                              <div className="ticker-matches-view-btn">
                                <div className="ticker-matches-view-btn-alignment">
                                  <div className="head-left-text">
                                    <div className="head-left-text-alignment">
                                      Technical Rating
                                    </div>
                                  </div>
                                  <div className="head-right-hover-svg">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 19 22"
                                      width="19"
                                      height="22"
                                      fill="none"
                                    >
                                      <path
                                        fill="currentColor"
                                        fill-rule="evenodd"
                                        d="M5 1v9.13a4 4 0 0 1 0 7.75V21a1 1 0 1 1-2 0v-3-.12a4 4 0 0 1 0-7.75V1a1 1 0 0 1 2 0zM2 14a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm12-9.88V1a1 1 0 1 1 2 0v3.12a4 4 0 0 1 0 7.75V21a1 1 0 1 1-2 0v-9.13a4 4 0 0 1 0-7.75zM15 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                                      ></path>
                                    </svg>
                                  </div>
                                </div>
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 8 3"
                                    width="8"
                                    height="3"
                                  >
                                    <path d="M0 3 L4 0 L8 3 Z"></path>
                                  </svg>
                                </span>
                              </div>
                            </th>
                            <th className="more-details-svg">
                              <div className="more-details-svg-alignment">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 6 26"
                                  width="3"
                                  height="13"
                                  fill="currentColor"
                                >
                                  <circle cx="3" cy="3" r="3"></circle>
                                  <circle cx="3" cy="13" r="3"></circle>
                                  <circle cx="3" cy="23" r="3"></circle>
                                </svg>
                              </div>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="tbody">
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data td-data-last-icon">
                              <span className="td-data-last">Neutral</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data  buy-data">
                              <span className="td-data-last  blue">Buy</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data sell-data ">
                              <span className="td-data-last red">Sell</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data td-data-last-icon">
                              <span className="td-data-last">Neutral</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data  buy-data">
                              <span className="td-data-last  blue">Buy</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data sell-data ">
                              <span className="td-data-last red">Sell</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data td-data-last-icon">
                              <span className="td-data-last">Neutral</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data  buy-data">
                              <span className="td-data-last  blue">Buy</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data sell-data ">
                              <span className="td-data-last red">Sell</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data td-data-last-icon">
                              <span className="td-data-last">Neutral</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data  buy-data">
                              <span className="td-data-last  blue">Buy</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data sell-data ">
                              <span className="td-data-last red">Sell</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data td-data-last-icon">
                              <span className="td-data-last">Neutral</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data  buy-data">
                              <span className="td-data-last  blue">Buy</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data sell-data ">
                              <span className="td-data-last red">Sell</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data td-data-last-icon">
                              <span className="td-data-last">Neutral</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data  buy-data">
                              <span className="td-data-last  blue">Buy</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data sell-data ">
                              <span className="td-data-last red">Sell</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data td-data-last-icon">
                              <span className="td-data-last">Neutral</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data  buy-data">
                              <span className="td-data-last  blue">Buy</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data sell-data ">
                              <span className="td-data-last red">Sell</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data td-data-last-icon">
                              <span className="td-data-last">Neutral</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data  buy-data">
                              <span className="td-data-last  blue">Buy</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data sell-data ">
                              <span className="td-data-last red">Sell</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data td-data-last-icon">
                              <span className="td-data-last">Neutral</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data  buy-data">
                              <span className="td-data-last  blue">Buy</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data sell-data ">
                              <span className="td-data-last red">Sell</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data td-data-last-icon">
                              <span className="td-data-last">Neutral</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data  buy-data">
                              <span className="td-data-last  blue">Buy</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data sell-data ">
                              <span className="td-data-last red">Sell</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data td-data-last-icon">
                              <span className="td-data-last">Neutral</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data  buy-data">
                              <span className="td-data-last  blue">Buy</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data sell-data ">
                              <span className="td-data-last red">Sell</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data td-data-last-icon">
                              <span className="td-data-last">Neutral</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data  buy-data">
                              <span className="td-data-last  blue">Buy</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data sell-data ">
                              <span className="td-data-last red">Sell</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data td-data-last-icon">
                              <span className="td-data-last">Neutral</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data  buy-data">
                              <span className="td-data-last  blue">Buy</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data sell-data ">
                              <span className="td-data-last red">Sell</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data td-data-last-icon">
                              <span className="td-data-last">Neutral</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data  buy-data">
                              <span className="td-data-last  blue">Buy</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data sell-data ">
                              <span className="td-data-last red">Sell</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data td-data-last-icon">
                              <span className="td-data-last">Neutral</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data  buy-data">
                              <span className="td-data-last  blue">Buy</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data sell-data ">
                              <span className="td-data-last red">Sell</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data td-data-last-icon">
                              <span className="td-data-last">Neutral</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data  buy-data">
                              <span className="td-data-last  blue">Buy</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data sell-data ">
                              <span className="td-data-last red">Sell</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data td-data-last-icon">
                              <span className="td-data-last">Neutral</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data  buy-data">
                              <span className="td-data-last  blue">Buy</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data sell-data ">
                              <span className="td-data-last red">Sell</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data td-data-last-icon">
                              <span className="td-data-last">Neutral</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data  buy-data">
                              <span className="td-data-last  blue">Buy</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data sell-data ">
                              <span className="td-data-last red">Sell</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data td-data-last-icon">
                              <span className="td-data-last">Neutral</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data  buy-data">
                              <span className="td-data-last  blue">Buy</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data sell-data ">
                              <span className="td-data-last red">Sell</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data td-data-last-icon">
                              <span className="td-data-last">Neutral</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data  buy-data">
                              <span className="td-data-last  blue">Buy</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data sell-data ">
                              <span className="td-data-last red">Sell</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data td-data-last-icon">
                              <span className="td-data-last">Neutral</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data  buy-data">
                              <span className="td-data-last  blue">Buy</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data sell-data ">
                              <span className="td-data-last red">Sell</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data td-data-last-icon">
                              <span className="td-data-last">Neutral</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data  buy-data">
                              <span className="td-data-last  blue">Buy</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data sell-data ">
                              <span className="td-data-last red">Sell</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data td-data-last-icon">
                              <span className="td-data-last">Neutral</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data  buy-data">
                              <span className="td-data-last  blue">Buy</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data sell-data ">
                              <span className="td-data-last red">Sell</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data td-data-last-icon">
                              <span className="td-data-last">Neutral</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data  buy-data">
                              <span className="td-data-last  blue">Buy</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data sell-data ">
                              <span className="td-data-last red">Sell</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data td-data-last-icon">
                              <span className="td-data-last">Neutral</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data  buy-data">
                              <span className="td-data-last  blue">Buy</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data sell-data ">
                              <span className="td-data-last red">Sell</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data td-data-last-icon">
                              <span className="td-data-last">Neutral</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data  buy-data">
                              <span className="td-data-last  blue">Buy</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data sell-data ">
                              <span className="td-data-last red">Sell</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data td-data-last-icon">
                              <span className="td-data-last">Neutral</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data  buy-data">
                              <span className="td-data-last  blue">Buy</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data sell-data ">
                              <span className="td-data-last red">Sell</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data td-data-last-icon">
                              <span className="td-data-last">Neutral</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data  buy-data">
                              <span className="td-data-last  blue">Buy</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data sell-data ">
                              <span className="td-data-last red">Sell</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data td-data-last-icon">
                              <span className="td-data-last">Neutral</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data  buy-data">
                              <span className="td-data-last  blue">Buy</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data sell-data ">
                              <span className="td-data-last red">Sell</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data td-data-last-icon">
                              <span className="td-data-last">Neutral</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data  buy-data">
                              <span className="td-data-last  blue">Buy</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data sell-data ">
                              <span className="td-data-last red">Sell</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data td-data-last-icon">
                              <span className="td-data-last">Neutral</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data  buy-data">
                              <span className="td-data-last  blue">Buy</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data sell-data ">
                              <span className="td-data-last red">Sell</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data td-data-last-icon">
                              <span className="td-data-last">Neutral</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data  buy-data">
                              <span className="td-data-last  blue">Buy</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data sell-data ">
                              <span className="td-data-last red">Sell</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data td-data-last-icon">
                              <span className="td-data-last">Neutral</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data  buy-data">
                              <span className="td-data-last  blue">Buy</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data sell-data ">
                              <span className="td-data-last red">Sell</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data td-data-last-icon">
                              <span className="td-data-last">Neutral</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data  buy-data">
                              <span className="td-data-last  blue">Buy</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data sell-data ">
                              <span className="td-data-last red">Sell</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data td-data-last-icon">
                              <span className="td-data-last">Neutral</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data  buy-data">
                              <span className="td-data-last  blue">Buy</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data sell-data ">
                              <span className="td-data-last red">Sell</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data td-data-last-icon">
                              <span className="td-data-last">Neutral</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data  buy-data">
                              <span className="td-data-last  blue">Buy</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data sell-data ">
                              <span className="td-data-last red">Sell</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data td-data-last-icon">
                              <span className="td-data-last">Neutral</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data  buy-data">
                              <span className="td-data-last  blue">Buy</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data sell-data ">
                              <span className="td-data-last red">Sell</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data td-data-last-icon">
                              <span className="td-data-last">Neutral</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data  buy-data">
                              <span className="td-data-last  blue">Buy</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data sell-data ">
                              <span className="td-data-last red">Sell</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data td-data-last-icon">
                              <span className="td-data-last">Neutral</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data  buy-data">
                              <span className="td-data-last  blue">Buy</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data sell-data ">
                              <span className="td-data-last red">Sell</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data td-data-last-icon">
                              <span className="td-data-last">Neutral</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data  buy-data">
                              <span className="td-data-last  blue">Buy</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data sell-data ">
                              <span className="td-data-last red">Sell</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data td-data-last-icon">
                              <span className="td-data-last">Neutral</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data  buy-data">
                              <span className="td-data-last  blue">Buy</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data sell-data ">
                              <span className="td-data-last red">Sell</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data td-data-last-icon">
                              <span className="td-data-last">Neutral</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data  buy-data">
                              <span className="td-data-last  blue">Buy</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data sell-data ">
                              <span className="td-data-last red">Sell</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data td-data-last-icon">
                              <span className="td-data-last">Neutral</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data  buy-data">
                              <span className="td-data-last  blue">Buy</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data sell-data ">
                              <span className="td-data-last red">Sell</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data td-data-last-icon">
                              <span className="td-data-last">Neutral</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data  buy-data">
                              <span className="td-data-last  blue">Buy</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data sell-data ">
                              <span className="td-data-last red">Sell</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data td-data-last-icon">
                              <span className="td-data-last">Neutral</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data  buy-data">
                              <span className="td-data-last  blue">Buy</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data sell-data ">
                              <span className="td-data-last red">Sell</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data td-data-last-icon">
                              <span className="td-data-last">Neutral</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data  buy-data">
                              <span className="td-data-last  blue">Buy</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data sell-data ">
                              <span className="td-data-last red">Sell</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data td-data-last-icon">
                              <span className="td-data-last">Neutral</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data  buy-data">
                              <span className="td-data-last  blue">Buy</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data sell-data ">
                              <span className="td-data-last red">Sell</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data td-data-last-icon">
                              <span className="td-data-last">Neutral</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data  buy-data">
                              <span className="td-data-last  blue">Buy</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data sell-data ">
                              <span className="td-data-last red">Sell</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data td-data-last-icon">
                              <span className="td-data-last">Neutral</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data  buy-data">
                              <span className="td-data-last  blue">Buy</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data sell-data ">
                              <span className="td-data-last red">Sell</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data td-data-last-icon">
                              <span className="td-data-last">Neutral</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data  buy-data">
                              <span className="td-data-last  blue">Buy</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data sell-data ">
                              <span className="td-data-last red">Sell</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data td-data-last-icon">
                              <span className="td-data-last">Neutral</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data  buy-data">
                              <span className="td-data-last  blue">Buy</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data sell-data ">
                              <span className="td-data-last red">Sell</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data td-data-last-icon">
                              <span className="td-data-last">Neutral</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data  buy-data">
                              <span className="td-data-last  blue">Buy</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data sell-data ">
                              <span className="td-data-last red">Sell</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data td-data-last-icon">
                              <span className="td-data-last">Neutral</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data  buy-data">
                              <span className="td-data-last  blue">Buy</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data sell-data ">
                              <span className="td-data-last red">Sell</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data td-data-last-icon">
                              <span className="td-data-last">Neutral</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data  buy-data">
                              <span className="td-data-last  blue">Buy</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data sell-data ">
                              <span className="td-data-last red">Sell</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data td-data-last-icon">
                              <span className="td-data-last">Neutral</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data  buy-data">
                              <span className="td-data-last  blue">Buy</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data sell-data ">
                              <span className="td-data-last red">Sell</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data td-data-last-icon">
                              <span className="td-data-last">Neutral</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data  buy-data">
                              <span className="td-data-last  blue">Buy</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data sell-data ">
                              <span className="td-data-last red">Sell</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data td-data-last-icon">
                              <span className="td-data-last">Neutral</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data  buy-data">
                              <span className="td-data-last  blue">Buy</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data sell-data ">
                              <span className="td-data-last red">Sell</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data td-data-last-icon">
                              <span className="td-data-last">Neutral</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data  buy-data">
                              <span className="td-data-last  blue">Buy</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data sell-data ">
                              <span className="td-data-last red">Sell</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data td-data-last-icon">
                              <span className="td-data-last">Neutral</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="green">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data  buy-data">
                              <span className="td-data-last  blue">Buy</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                          <tr className="tr">
                            <td className="td">
                              <div className="symbol-container">
                                <span>
                                  <img
                                    className="bottom-image"
                                    src={CA}
                                    alt="CA"
                                  />
                                  <img
                                    className="top-image"
                                    src={AU}
                                    alt="AU"
                                  />
                                </span>
                                <div className="symbol-container-description">
                                  <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                                    AUDCAD
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.37%</span>
                            </td>
                            <td className="td-data">
                              <span className="red">0.003640</span>
                            </td>
                            <td className="td-data">
                              <span>0.980430</span>
                            </td>
                            <td className="td-data">
                              <span>0.580480</span>
                            </td>
                            <td className="td-data">
                              <span>0.983430</span>
                            </td>
                            <td className="td-data">
                              <span>0.480430</span>
                            </td>
                            <td className="td-data sell-data ">
                              <span className="td-data-last red">Sell</span>
                            </td>
                            <td className="td-more-details"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
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
