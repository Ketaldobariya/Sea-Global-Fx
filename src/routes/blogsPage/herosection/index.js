import React from "react";
import "./herosection.scss";
import RSI from "../../../assets/images/RSI_Indicator.jpeg";
import Chart from "../../../assets/images/How_to_Read_MT_5_Chart.jpg";
import ForexLaptop from "../../../assets/images/Top_10_Fore.jpg";
import Calculate from "../../../assets/images/How_to_Calculate_Position.jpeg";
export default function Herosection() {
  return (
    <section>
      <div className="herosection-section">
        <div className="container-xl">
          <div className="herosection-top-gridbox">
            <div className="herosection-top-gridbox-items">
              <a href="/" aria-label="#" target="_blank" rel="noreferrer">
                <div className="herosection-top-items-image">
                  <img src={RSI} alt="RSI" />
                </div>
                <div className="blog-banner-layer"></div>
                <div className="herosection-top-items-text-alignment">
                  <div className="herosection-top-items-text-spacing">
                    <h3>
                      RSI Indicator Explained: How to Use It to Time Your Trades
                    </h3>
                    <div className="herosection-top-items-bottom-text">
                      <span>20 May 2026</span>
                      <span>|</span>
                      <span>By Sea Global Fx Team</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="herosection-top-gridbox-right-items">
              <div className="herosection-top-subgridbox-twocol-grid">
                <a className="herosection-items-imgbox" href="/" aria-label="#" target="_blank" rel="noreferrer">
                  <div className="herosection-subbox-image-container">
                    <img src={Chart} alt="Chart" />
                  </div>
                  <div className="blog-black-banner-layer"></div>
                  <div className="herosection-bottom-text-content">
                    <div className="herosection-bottom-text-content-spacing">
                      <h3>
                        How to Read MT5 Charts: Candlesticks, Indicators and
                        Timeframes
                      </h3>
                      <div className="herosection-card-bottom-textcontent">
                        <span>18 May 2026</span>
                        <span>|</span>
                        <span>By Sea Global Fx Team</span>
                      </div>
                    </div>
                  </div>
                </a>
                <a className="herosection-items-imgbox" href="/" aria-label="#" target="_blank" rel="noreferrer">
                  <div className="herosection-subbox-image-container">
                    <img src={ForexLaptop} alt="ForexLaptop" />
                  </div>
                  <div className="blog-black-banner-layer"></div>
                  <div className="herosection-bottom-text-content">
                    <div className="herosection-bottom-text-content-spacing">
                      <h3>
                        Top 10 Forex Candlestick Patterns Every Trader Should Know
                      </h3>
                      <div className="herosection-card-bottom-textcontent">
                        <span>15 May 2026</span>
                        <span>|</span>
                        <span>By Sea Global Fx Team</span>
                      </div>
                    </div>
                  </div>
                </a>
                <a className="herosection-items-imgbox" href="/" aria-label="#" target="_blank" rel="noreferrer">
                  <div className="herosection-subbox-image-container">
                    <img src={Calculate} alt="Calculate" />
                  </div>
                  <div className="blog-black-banner-layer"></div>
                  <div className="herosection-bottom-text-content">
                    <div className="herosection-bottom-text-content-spacing">
                      <h3>
                        How to Calculate Position Size in Forex So You Never Blow an Account Again
                      </h3>
                      <div className="herosection-card-bottom-textcontent">
                        <span>13 May 2026</span>
                        <span>|</span>
                        <span>By Sea Global Fx Team</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
