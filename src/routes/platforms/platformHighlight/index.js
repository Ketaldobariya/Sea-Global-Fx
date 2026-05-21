import react from "react";
import "./platformHighlight.scss";
import Ipadimg from "../../../assets/images/ipad.png";
export default function PlatformHighlight() {
  return (
    <section>
      <div className="platformHighlight-section">
        <div className="container-xl">
          <div className="platformHighlight-grid">
            <div>
              <div className="platformHighlight-left-image">
                <img src={Ipadimg} alt="Ipadimg" />
              </div>
            </div>
            <div>
              <h2>
                Platform <span>Highlights</span>
              </h2>
              <div className="platformHighlight-boxgrid">
                <div className="platformHighlight-item">
                  <h3>Advanced Charting & Indicators</h3>
                  <p>Analyze markets using multiple chart types, timeframes, and a wide range of technical indicators for informed decision-making.</p>
                </div>
                <div className="platformHighlight-item">
                  <h3>Automated Trading (EAs / Scripts)</h3>
                  <p>Deploy automated strategies and custom scripts to execute trades systematically and reduce emotional bias.</p>
                </div>
                <div className="platformHighlight-item">
                  <h3>Real-Time Execution</h3>
                  <p>Trade with live pricing and fast order execution designed to perform reliably during active and volatile market conditions</p>
                </div>
                <div className="platformHighlight-item">
                  <h3>Customizable Interface</h3>
                  <p>Personalize layouts, charts, and tools to match your trading style and workflow</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
