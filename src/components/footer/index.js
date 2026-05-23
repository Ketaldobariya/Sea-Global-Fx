import "./footer.scss";
import FooterLogo from "../../assets/logo/footer-logo.svg";
export default function Footer() {
  return (
    <footer>
      <div className="container-xl">
        <div className="footer-grid">
          <div className="footer-leftside">
            <div className="footer-logo">
              <img src={FooterLogo} alt="FooterLogo" />
            </div>
            <p>
              Sea Global – Delivering advanced trading solutions across Forex,
              Commodities, Indices, and Digital Assets, supported by secure
              infrastructure and transparent trading conditions.
            </p>
            <div className="footer-socialmedia">
              <a
                href="https://www.facebook.com/"
                aria-label="facebook"
                target="_blank" rel="noreferrer"
              >
                <div className="footer-icon-round">
                  <svg
                    className="facebook-icon"
                    width="18"
                    height="20"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      d="M14 8h2V4h-2c-2.2 0-4 1.8-4 4v2H8v4h2v6h4v-6h2.5l.5-4H14V8z"
                    />
                  </svg>
                </div>
              </a>
              <a
                href="https://x.com/"
                aria-label="twitter"
                target="_blank" rel="noreferrer"
              >
                <div className="footer-icon-round">
                  <svg
                    className="social-icon"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      d="M23 3.01a9.14 9.14 0 0 1-2.63.72A4.6 4.6 0 0 0 22.4 1.2a9.2 9.2 0 0 1-2.91 1.11A4.58 4.58 0 0 0 16.1 1c-2.63 0-4.67 2.45-4.07 5A13 13 0 0 1 2.57 2.1a4.58 4.58 0 0 0 1.42 6.11A4.52 4.52 0 0 1 2 7.62v.06a4.58 4.58 0 0 0 3.67 4.49 4.6 4.6 0 0 1-2.06.08 4.59 4.59 0 0 0 4.28 3.18A9.2 9.2 0 0 1 1 18.58 12.94 12.94 0 0 0 8.03 21c8.45 0 13.22-7.16 12.93-13.58A9.3 9.3 0 0 0 23 3.01z"
                    />
                  </svg>
                </div>
              </a>
              <a
                href="https://www.instagram.com/"
                aria-label="Instagram"
                target="_blank" rel="noreferrer"
              >
                <div className="footer-icon-round">
                  <svg
                    className="social-icon"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm11.5 1a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>
          <div className="footer-center">
            <div className="footer-center-content">
                <h3>Company Information</h3>
                <div className="footer-title-underline"></div>
                <p>Registered Address: 1st Floor, The Sotheby Building,, Rodney Bay, Gros-Islet, Castries, Saint Lucia – 838</p>
                <p>Physical Address:<br/>1st Floor, The Sotheby Building,, Rodney Bay, Gros-Islet, Castries, Saint Lucia – 838</p>
                <p>Registration Number: 2025- 00352</p>
                <a href="/" aria-label="mail">Email: support@seaglobalfx.com</a>
                <a href="callto:+919586818795" aria-label="phone number">Phone: <br/>+971 58 261 9955</a>
            </div>
            <div className="footer-center-content">
                <h3>Quick Links</h3>
                <div className="footer-title-underline"></div>
                <a href="/" aria-label="link">Accounts</a>
                <a href="/" aria-label="link">Platforms</a>
                <a href="/" aria-label="link">Blogs</a>
                <a href="/" aria-label="link">About Us</a>
                <a href="/" aria-label="link">Trading Solutions</a>
            </div>
            <div className="footer-center-content">
                 <h3>Support</h3>
                <div className="footer-title-underline"></div>
                <a href="/" aria-label="link">Terms of Service</a>
                <a href="/" aria-label="link">Privacy Policy</a>
                <a href="/" aria-label="link">Telegram Group</a>
                <a href="/" aria-label="link">Refund Policy</a>
            </div>
          </div>
          <div className="footer-rightside">
            <h5>Subscribe to Newsletter</h5>
            <p>Get Monthly insights from founders around the globe. No spam   promise.</p>
             <div className="footer-input-relative">
                <input type="text" placeholder="Enter your Email"/>
                <div className="button-alignment-input">
                    <button>Submit</button>
                </div>
             </div>
             <div className="footer-checkbox-text">
                <input type="checkbox"/>
                <span>I agree to the Privacy Policy</span>
             </div>
          </div>
        </div>
        <div className="footer-bottom-text-style">
          <p>Risk warning <br/>Trading in Foreign Exchange and Contracts for Difference carries a high level of risk to your capital and unexpected price movements. A key risk of leveraged trading is that if a market moves against your position, you can incur additional liabilities far in excess of your initial margin deposit. Only speculate with money you can afford to lose. The products listed on this website may not be suitable for all customers; therefore, ensure you fully understand the risks involved and seek independent financial advice if necessary.</p>
          <p>Restricted Countries <br/>Sea Global Ltd. does not provide services to residents of the United States, Canada, North Korea, and Cuba, or any other sanctioned jurisdiction where such services would be contrary to local law or regulation.</p>
          <p>Disclaimer <br/>Sea Global Ltd. operates solely as an execution service and does not offer advisory services. Occasionally, Sea Global Ltd. may release general market insights; however, such communications should not be interpreted as advice, an invitation, or an endorsement for any financial instrument. Sea Global Ltd. bears no liability for the application of this content or any outcomes thereof. The completeness of this information is not guaranteed, and reliance upon it is at the sole discretion and risk of the user.</p>        
        </div>
      </div>
    </footer>
  );
}
