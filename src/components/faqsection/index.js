import "./faqsection.scss";
import Down from "../../assets/images/down.svg";
export default function Faqsection() {
  return (
    <section>
      <div className="Faq-section">
        <div className="container-xs2">
          <div className="faq-title">
            <h2 className="animate__animated animate__fadeInUp wow" data-wow-offset="50"  data-wow-delay="0.4s">
              Frequently Asked <span>Questions</span>
            </h2>
          </div>
          <div className="faq-tow-col-grid">
            <div className="left-side">
              <div className="faq-items faq-small-hover">
                <div className="faq-items-main">
                  <div className="faq-header">
                    <h3>How Do I Open an Account with Sea Global FX?</h3>
                    <div className="faq-right-aroicon">
                      <img src={Down} alt="down" />
                    </div>
                  </div>
                  <div className="faq-body">
                    <div className="faq-spacing">
                      <p>
                        You can open an account by completing our online
                        registration form and verifying your identity. Once
                        approved, you can fund your account and start trading.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="faq-items">
                <div className="faq-items-main faq-items-height">
                  <div className="faq-header">
                    <h3>Are Funding and Withdrawal Requests Processed Immediately?</h3>
                    <div className="faq-right-aroicon">
                      <img src={Down} alt="down" />
                    </div>
                  </div>
                  <div className="faq-body">
                    <div className="faq-spacing">
                      <p>
                        Funding is usually instant, while withdrawals are processed as quickly as possible and may take a short time depending on the payment method used.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="faq-items ">
                <div className="faq-items-main faq-items-height">
                  <div className="faq-header">
                    <h3>What Is Forex Trading?</h3>
                    <div className="faq-right-aroicon">
                      <img src={Down} alt="down" />
                    </div>
                  </div>
                  <div className="faq-body">
                    <div className="faq-spacing">
                      <p>
                       Forex trading involves buying one currency and selling another to profit from changes in their exchange rates. For example, if you believe the Euro will rise against the US Dollar, you buy EUR/USD. If the Euro’s value increases, you can sell it later at a higher price and make a profit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="faq-items">
                <div className="faq-items-main">
                  <div className="faq-header">
                    <h3>Is MetaTrader 5 Good for Beginners?</h3>
                    <div className="faq-right-aroicon">
                      <img src={Down} alt="down" />
                    </div>
                  </div>
                  <div className="faq-body">
                    <div className="faq-spacing">
                      <p>
                       Yes. MetaTrader 5 is user-friendly, widely used, and offers helpful tools for both beginners and experienced traders.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="left-side">
              <div className="faq-items">
                <div className="faq-items-main faq-items-height">
                  <div className="faq-header">
                    <h3>Why is risk management important?</h3>
                    <div className="faq-right-aroicon">
                      <img src={Down} alt="down" />
                    </div>
                  </div>
                  <div className="faq-body">
                    <div className="faq-spacing">
                      <p>
                        Risk management helps protect your trading capital by controlling how much you risk on each trade. It involves setting limits like stop-loss orders and proper position sizing, which can reduce losses and support more consistent, disciplined trading decisions over time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="faq-items">
                <div className="faq-items-main">
                  <div className="faq-header">
                    <h3>What is the biggest mistake new traders make?</h3>
                    <div className="faq-right-aroicon">
                      <img src={Down} alt="down" />
                    </div>
                  </div>
                  <div className="faq-body">
                    <div className="faq-spacing">
                      <p>
                        The biggest mistake new traders make is risking too much on a single trade. This often comes from overconfidence or emotional decisions, and it can quickly lead to large losses.   
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="faq-items">
                <div className="faq-items-main">
                  <div className="faq-header">
                    <h3>Is trading suitable for everyone?</h3>
                    <div className="faq-right-aroicon">
                      <img src={Down} alt="down" />
                    </div>
                  </div>
                  <div className="faq-body">
                    <div className="faq-spacing">
                      <p>
                        Trading involves risk and may not be suitable for everyone. It’s important to understand the risks and trade responsibly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="faq-items">
                <div className="faq-items-main faq-items-height">
                  <div className="faq-header">
                    <h3>What is trading psychology?</h3>
                    <div className="faq-right-aroicon">
                      <img src={Down} alt="down" />
                    </div>
                  </div>
                  <div className="faq-body">
                    <div className="faq-spacing">
                      <p>
                        Trading psychology refers to how a trader manages emotions such as fear, greed, and stress. Maintaining emotional control helps traders stay disciplined, follow their strategy, and make rational decisions instead of impulsive ones.
                      </p>
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
