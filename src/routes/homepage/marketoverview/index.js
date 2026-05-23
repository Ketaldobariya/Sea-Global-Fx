import "./marketoverview.scss";
import Forex from "../../../assets/images/forex.png"
import Indices from "../../../assets/images/Indices.png"
import Commodities from "../../../assets/images/Commodities.png"
import Stocks from "../../../assets/images/Stocks.png"
import Crypto from "../../../assets/images/Crypto.png"
import ETFs from "../../../assets/images/ETFs.png"
import Dolor from "../../../assets/images/dolor.png"
export default function MarketsOverview(){
    return (
        <section>
            <div className="market-overview-section">
                <div className="container-xl">
                    <div className="market-overview-grid">
                        <div className="market-overview-items animate__animated animate__zoomIn wow" data-wow-offset="10"  data-wow-delay="0s">
                            <h2><span>Markets</span> Overview</h2>
                        </div>
                        <div className="market-items-cards animate__animated animate__fadeInUp wow" data-wow-offset="10"  data-wow-delay="0.2s">
                            <a href="/" aria-label="market-card">
                                <div className="market-card-image">
                                    <img src={Forex} alt="Forex"/>
                                </div>
                                <div className="market-card-text">
                                    <h4>Forex</h4>
                                    <p>Access major, minor, and selected exotic currency pairs with deep liquidity and competitive spreads.</p>
                                </div>
                            </a>
                        </div>
                        <div className="market-items-cards animate__animated animate__fadeInUp wow" data-wow-offset="10"  data-wow-delay="0.4s">
                            <a href="/" aria-label="market-card">
                                <div className="market-card-image">
                                    <img src={Indices} alt="Indices"/>
                                </div>
                                <div className="market-card-text">
                                    <h4>Indices</h4>
                                    <p>Trade leading global indices representing major economies, with broader market exposure.</p>
                                </div>
                            </a>
                        </div>
                        <div className="market-items-cards animate__animated animate__fadeInUp wow" data-wow-offset="10"  data-wow-delay="0.6s">
                            <a href="/" aria-label="market-card">
                                <div className="market-card-image">
                                    <img src={Commodities} alt="Commodities"/>
                                </div>
                                <div className="market-card-text">
                                    <h4>Commodities</h4>
                                    <p>Speculate on key commodities, enabling portfolio diversification and inflation-hedging strategies.</p>
                                </div>
                            </a>
                        </div>
                         <div className="market-items-cards animate__animated animate__fadeInUp wow" data-wow-offset="10"  data-wow-delay="0.8s">
                            <a href="/" aria-label="market-card">
                                <div className="market-card-image">
                                    <img src={Stocks} alt="Stocks"/>
                                </div>
                                <div className="market-card-text">
                                    <h4>Stocks</h4>
                                    <p>Trade shares of well-known global companies, gaining exposure to equity markets across sectors.</p>
                                </div>
                            </a>
                        </div>
                        <div className="market-items-cards animate__animated animate__fadeInUp wow" data-wow-offset="10"  data-wow-delay="1s">
                            <a href="/" aria-label="market-card">
                                <div className="market-card-image">
                                    <img src={Crypto} alt="Crypto"/>
                                </div>
                                <div className="market-card-text">
                                    <h4>Crypto</h4>
                                    <p>Participate in the digital asset market with cryptocurrencies, available for trading in real-time.</p>
                                </div>
                            </a>
                        </div>
                        <div className="market-items-cards animate__animated animate__fadeInUp wow" data-wow-offset="10"  data-wow-delay="1.2s">
                            <a href="/" aria-label="market-card">
                                <div className="market-card-image">
                                    <img src={ETFs} alt="ETFs"/>
                                </div>
                                <div className="market-card-text">
                                    <h4>ETFs</h4>
                                    <p>Gain diversified exposure through Exchange-Traded Funds, combining multiple assets.</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="dolor-Image">
                    <img src={Dolor} alt="Dolor"/>
                </div>
            </div>
        </section>
    );
}