import "./whyTradeWithForex.scss"
import Liquidity from "../../../assets/images/Liquidity.svg"
import Access from "../../../assets/images/Access.svg"
import Volatility from "../../../assets/images/Volatility.svg"
import Minor from "../../../assets/images/Minor.svg"
import Risk from "../../../assets/images/Risk.svg"
import Execution from "../../../assets/images/Execution.svg"
export default function WhyTradeWithForex(){
    return(
        <section>
            <div className="WhyTradeWithForex-section">
                <div className="container-xl">
                    <div className="WhyTradeWithForex-section-grid">
                        <div className="WhyTradeWithForex-grid-items-leftside">
                            <h1 className="animate__animated animate__fadeInUp wow" data-wow-offset="10"  data-wow-delay="0.1s">Why Trade Forex with <span> Sea Global</span></h1>
                            <div className="leftside-bottom-paragraph animate__animated animate__fadeInUp wow" data-wow-offset="10"  data-wow-delay="0.3s">
                                <p>The foreign exchange market offers continuous opportunities driven by global economic activity. Trading Forex with Sea Global gives you access to deep liquidity, efficient execution, and the flexibility required to operate across different market conditions.</p>
                            </div>
                        </div>
                        <div className="WhyTradeWithForex-grid-items-right">
                            <div className="WhyTradeWithForex-right-darkbox">
                                <div className="WhyTradeWithForex-right-darkbox-card animate__animated animate__fadeInUp wow" data-wow-offset="10"  data-wow-delay="0.5s">
                                    <div className="WhyTradeWithForex-right-darkbox-card-content">
                                        <img src={Liquidity} alt="Liquidity"/>
                                        <h3>High Liquidity</h3>
                                        <p>Forex is the most liquid financial market in the world, allowing for smoother price movement and efficient trades.</p>
                                    </div>
                                    <div className="WhyTradeWithForex-card-content-bottom-line"></div>
                                </div>
                                <div className="WhyTradeWithForex-right-darkbox-card animate__animated animate__fadeInUp wow" data-wow-offset="10"  data-wow-delay="0.7s">
                                    <div className="WhyTradeWithForex-right-darkbox-card-content">
                                        <img src={Access} alt="Access"/>
                                        <h3>24/5 Market Access</h3>
                                        <p>Trade currency markets around the clock during the trading week, enabling participation across major global sessions.</p>
                                    </div>
                                    <div className="WhyTradeWithForex-card-content-bottom-line"></div>
                                </div>
                                <div className="WhyTradeWithForex-right-darkbox-card darkbox-card-right-border animate__animated animate__fadeInUp wow" data-wow-offset="10"  data-wow-delay="0.9s">
                                    <div className="WhyTradeWithForex-right-darkbox-card-content">
                                        <img src={Volatility} alt="Volatility"/>
                                        <h3>Market Volatility</h3>
                                        <p>Currency price movements create frequent trading opportunities for both short-term and longer-term strategies.</p>
                                    </div>
                                    <div className="WhyTradeWithForex-card-content-bottom-line"></div>
                                </div>
                                <div className="WhyTradeWithForex-right-darkbox-card animate__animated animate__fadeInUp wow" data-wow-offset="10"  data-wow-delay="1.1s">
                                    <div className="WhyTradeWithForex-right-darkbox-card-content">
                                        <img src={Minor} alt="Minor"/>
                                        <h3>Major & Minor Pairs</h3>
                                        <p>Access a wide range of currency pairs, including major, minor, and selected exotic pairs tied to global economies.</p>
                                    </div>
                                </div>
                                <div className="WhyTradeWithForex-right-darkbox-card animate__animated animate__fadeInUp wow" data-wow-offset="10"  data-wow-delay="1.3s">
                                    <div className="WhyTradeWithForex-right-darkbox-card-content">
                                        <img src={Risk} alt="Risk"/>
                                        <h3>Risk Management Tools</h3>
                                        <p>Utilize advanced order types and platform tools to manage exposure and control risk effectively.</p>
                                    </div>
                                </div>
                                <div className="WhyTradeWithForex-right-darkbox-card darkbox-card-right-border animate__animated animate__fadeInUp wow" data-wow-offset="10"  data-wow-delay="1.5s">
                                    <div className="WhyTradeWithForex-right-darkbox-card-content">
                                        <img src={Execution} alt="Execution"/>
                                        <h3>Fast Execution</h3>
                                        <p>Sea Global’s trading infrastructure is optimized for low-latency execution, helping reduce slippage during volatile conditions.</p>
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
    