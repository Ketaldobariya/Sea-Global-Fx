import React from "react";
import "./professionalTradingTools.scss";
import ChartLine from "../../../assets/images/chart-line.png";
export default function ProfessionalTradingTools() {
  return (
    <section>
      <div className="ProfessionalTradingTools-section">
        <div className="container-xl">
          <div className="ProfessionalTradingTools-gridbox">
            <div className="ProfessionalTradingTools-image-container">
              <div className="ProfessionalTradingTools-image-animation">
                <img src={ChartLine} alt="ChartLine" />
              </div>
            </div>
            <div className="ProfessionalTradingTools-text-container">
              <div className="ProfessionalTradingTools-heading">
                <h2
                  className="animate__animated animate__fadeInUp wow"
                  data-wow-offset="10"
                  data-wow-delay="0.1s"
                >
                  Professional Trading <span> Tools </span>
                </h2>
                <p
                  className="animate__animated animate__fadeInUp wow"
                  data-wow-offset="10"
                  data-wow-delay="0.2s"
                >
                  Sea Global provides a suite of professional-grade trading
                  tools designed to support informed decision-making, precise
                  execution, and effective risk management across global
                  markets.
                </p>
              </div>
              <div className="ProfessionalTradingTools-subbox-grid">
                <div
                  className="ProfessionalTradingTools-subbox-grid-item animate__animated animate__fadeInUp wow"
                  data-wow-offset="10"
                  data-wow-delay="0.2s"
                >
                  <h3>Advanced Charting & Indicators</h3>
                  <p>
                    Access interactive charts with multiple timeframes,
                    technical indicators, and drawing tools to analyze market
                    movements in detail.
                  </p>
                </div>
                <div
                  className="ProfessionalTradingTools-subbox-grid-item animate__animated animate__fadeInUp wow"
                  data-wow-offset="10"
                  data-wow-delay="0.4s"
                >
                  <h3>Technical Analysis & Market Insights</h3>
                  <p>
                    Benefit from regularly updated market analysis covering key
                    price levels, trends, and macroeconomic factors across asset
                    classes.
                  </p>
                </div>
                <div
                  className="ProfessionalTradingTools-subbox-grid-item animate__animated animate__fadeInUp wow"
                  data-wow-offset="10"
                  data-wow-delay="0.6s"
                >
                  <h3>Trading Central & Research Tools</h3>
                  <p>
                    Utilize integrated third-party research tools such as
                    Trading Central to access technical setups, forecasts, and
                    analytical insights.
                  </p>
                </div>
                <div
                  className="ProfessionalTradingTools-subbox-grid-item animate__animated animate__fadeInUp wow"
                  data-wow-offset="10"
                  data-wow-delay="0.8s"
                >
                  <h3>Risk Management Features</h3>
                  <p>
                    Apply risk controls including stop-loss, take-profit, and
                    advanced order types to help manage exposure and protect
                    trading capital.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
