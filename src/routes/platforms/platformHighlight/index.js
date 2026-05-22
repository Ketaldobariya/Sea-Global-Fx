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
              <div className="platformHighlight-left-image animate__animated animate__fadeInLeft wow" data-wow-offset="70"  data-wow-delay="0.1s">
                <img src={Ipadimg} alt="Ipadimg" />
              </div>
            </div>
            <div>
              <h2 className="animate__animated animate__fadeInUp wow" data-wow-offset="70"  data-wow-delay="0.1s">
                Platform <span>Highlights</span>
              </h2>
              <div className="platformHighlight-boxgrid">
                <div className="platformHighlight-item animate__animated animate__fadeInUp wow" data-wow-offset="70"  data-wow-delay="0.2s">
                  <h3>Advanced Charting & Indicators</h3>
                  <p>Analyze markets using multiple chart types, timeframes, and a wide range of technical indicators for informed decision-making.</p>
                </div>
                <div className="platformHighlight-item animate__animated animate__fadeInUp wow" data-wow-offset="70"  data-wow-delay="0.3s">
                  <h3>Automated Trading (EAs / Scripts)</h3>
                  <p>Deploy automated strategies and custom scripts to execute trades systematically and reduce emotional bias.</p>
                </div>
                <div className="platformHighlight-item animate__animated animate__fadeInUp wow" data-wow-offset="70"  data-wow-delay="0.4s">
                  <h3>Real-Time Execution</h3>
                  <p>Trade with live pricing and fast order execution designed to perform reliably during active and volatile market conditions</p>
                </div>
                <div className="platformHighlight-item animate__animated animate__fadeInUp wow" data-wow-offset="70"  data-wow-delay="0.5s">
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
