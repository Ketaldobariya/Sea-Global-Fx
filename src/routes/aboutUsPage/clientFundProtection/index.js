import "./clientFundProtection.scss";
import BackLayer from "../../../assets/images/layer-black.png";
import Lock from "../../../assets/images/lock.png";
export default function ClientFundProtection() {
  return (
    <section>
      <div className="ClientFundProtection-section">
        <div className="background-layer">
          <img src={BackLayer} alt="BackLayer" />
        </div>
        <div className="container-sm">
          <div className="ClientFundProtection-grid">
            <div className="ClientFundProtection-items-img">
              <div className="ClientFundProtection-items-image animate__animated animate__fadeInLeft wow" data-wow-offset="10"  data-wow-delay="0.1s">
                <img src={Lock} alt="Lock" />
              </div>
            </div>
            <div className="ClientFundProtection-items">
              <div className="ClientFundProtection-text">
                <div className="ClientFundProtection-heading-paragraph">
                  <h2 className="animate__animated animate__fadeInUp wow" data-wow-offset="10"  data-wow-delay="0s">
                    Client Fund <span> Protection</span>
                  </h2>
                  <p className="animate__animated animate__fadeInUp wow" data-wow-offset="10"  data-wow-delay="0.1s">
                    Protecting client funds is a core priority at Sea Global.
                    Our fund-handling framework is designed to promote
                  </p>
                  <p className="animate__animated animate__fadeInUp wow" data-wow-offset="10"  data-wow-delay="0.2s">
                    security, transparency, and responsible risk management
                    across all regulated entities.
                  </p>
                </div>
                <div className="ClientFundProtection-grid-box">
                  <div className="ClientFundProtection-grid-box-items animate__animated animate__fadeInUp wow" data-wow-offset="10"  data-wow-delay="0.1s">
                    <h3>Segregated Client Accounts</h3>
                    <p>Client funds are held separately from company operating funds in accordance with applicable regulatory requirements.</p>
                  </div>
                  <div className="ClientFundProtection-grid-box-items animate__animated animate__fadeInUp wow" data-wow-offset="10"  data-wow-delay="0.2s">
                    <h3>Funds Held with Tier-1 Banks</h3>
                    <p>Client funds are maintained with reputable, well-capitalized financial institutions to support fund security and stability.</p>
                  </div>
                  <div className="ClientFundProtection-grid-box-items animate__animated animate__fadeInUp wow" data-wow-offset="10"  data-wow-delay="0.3s">
                    <h3>Strict Internal Risk Controls</h3>
                    <p>Robust internal policies and monitoring systems are in place to manage financial, operational, and counterparty risk.</p>
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
