import React from "react";
import "./latestBlog.scss";
import { ChevronDown } from "lucide-react";
import Money from "../../../assets/images/money transfer.jpeg";
import Currency from "../../../assets/images/Currency_Pairs_Explained_Major_Minor_Exotic_37e197a267.jpeg";
import ECN from "../../../assets/images/ECN_vs_Market_Maker_Which_Broker_Is_Better_68830cf0bb.jpeg";
import Cognitive from "../../../assets/images/Cognitive.jpeg";
import Why_Forex from "../../../assets/images/Why_Forex.jpeg";
import Oil_Surge from "../../../assets/images/Oil_Surge_.jpg";
import Central_Bank from "../../../assets/images/Central_Bank.jpeg";
import Why_Gold from "../../../assets/images/Why_Gold.jpeg";
import Gold_at_4_500 from "../../../assets/images/Gold_at_4_500.jpeg";
import Oil_Shock from "../../../assets/images/Oil_Shock.jpeg";
import Geopolitical_Risk from "../../../assets/images/Geopolitical_Risk.jpeg";
import CBD from "../../../assets/images/CBD.jpeg";
export default function LatestBlog() {
  return (
    <section>
      <div className="latestBlog-section">
        <div className="container-xl">
          <div className="latestBlog-title-alignment">
            <div className="latestBlog-text-alignment">
              <h2>
                Latest <span>Blogs</span>
              </h2>
            </div>
            <div className="latestBlog-title-button">
              <button>
                All Categories
                <ChevronDown />
              </button>
              <div className="latestBlog-dropdown-menu">
                <div className="latestBlog-dropdown-menu-spacing">
                  <span>Forex </span>
                  <span>Ai Trading </span>
                  <span>About Sea Global Fx</span>
                  <span>Commodity Market</span>
                </div>
              </div>
            </div>
            <div className="latestBlog-title-line"></div>
          </div>
          <div className="latestBlog-card-grid">
            <a href="/" aria-label="#" target="_blank" rel="noreferrer">
              <div className="latestBlog-card">
                <div className="latestBlog-card-image">
                  <img src={Money} alt="Money" />
                </div>
                <div className="latestBlog-card-details">
                  <h3>
                    How to Trade Around NFP: A Step-by-Step Strategy for News
                    Events{" "}
                  </h3>
                  <div className="latestBlog-card-text-alignment">
                    <span>Sea Global Fx Team</span>
                    <span>. 29 April 2026</span>
                  </div>
                </div>
              </div>
            </a>
            <a href="/" aria-label="#" target="_blank" rel="noreferrer">
              <div className="latestBlog-card">
                <div className="latestBlog-card-image">
                  <img src={Currency} alt="Currency" />
                </div>
                <div className="latestBlog-card-details">
                  <h3>Currency Pairs Explained: Major, Minor, Exotic </h3>
                  <div className="latestBlog-card-text-alignment">
                    <span>Sea Global Fx Team</span>
                    <span>. 27 April 2026</span>
                  </div>
                </div>
              </div>
            </a>
            <a href="/" aria-label="#" target="_blank" rel="noreferrer">
              <div className="latestBlog-card">
                <div className="latestBlog-card-image">
                  <img src={ECN} alt="ECN" />
                </div>
                <div className="latestBlog-card-details">
                  <h3>
                    ECN vs Market Maker Brokers: Which One Should You Trade
                    With?
                  </h3>
                  <div className="latestBlog-card-text-alignment">
                    <span>Sea Global Fx Team</span>
                    <span>. 22 April 2026</span>
                  </div>
                </div>
              </div>
            </a>
            <a href="/" aria-label="#" target="_blank" rel="noreferrer">
              <div className="latestBlog-card">
                <div className="latestBlog-card-image">
                  <img src={Cognitive} alt="Cognitive" />
                </div>
                <div className="latestBlog-card-details">
                  <h3>
                    The 5 Cognitive Biases Destroying Your Forex Trades (And How
                    to Fix Them)
                  </h3>
                  <div className="latestBlog-card-text-alignment">
                    <span>Sea Global Fx Team</span>
                    <span>. 20 April 2026</span>
                  </div>
                </div>
              </div>
            </a>
            <a href="/" aria-label="#" target="_blank" rel="noreferrer">
              <div className="latestBlog-card">
                <div className="latestBlog-card-image">
                  <img src={Why_Forex} alt="Why_Forex" />
                </div>
                <div className="latestBlog-card-details">
                  <h3>
                    Why 90% of Forex Traders Lose Money: The Psychology Behind
                    It
                  </h3>
                  <div className="latestBlog-card-text-alignment">
                    <span>Sea Global Fx Team</span>
                    <span>. 16 April 2026</span>
                  </div>
                </div>
              </div>
            </a>
            <a href="/" aria-label="#" target="_blank" rel="noreferrer">
              <div className="latestBlog-card">
                <div className="latestBlog-card-image">
                  <img src={Oil_Surge} alt="Oil_Surge" />
                </div>
                <div className="latestBlog-card-details">
                  <h3>
                    U.S.–Iran Ceasefire Collapse Triggers Oil Surge and Renewed Stagflation Fears
                  </h3>
                  <div className="latestBlog-card-text-alignment">
                    <span>Sea Global Fx Team</span>
                    <span>. 14 April 2026</span>
                  </div>
                </div>
              </div>
            </a>
            <a href="/" aria-label="#" target="_blank" rel="noreferrer">
              <div className="latestBlog-card">
                <div className="latestBlog-card-image">
                  <img src={Central_Bank} alt="Central_Bank" />
                </div>
                <div className="latestBlog-card-details">
                  <h3>
                   The Central Bank Divergence Trade: Why the Fed, ECB, and BoJ Are Moving in Different Directions — And What It Means for Forex Traders in 2026
                  </h3>
                  <div className="latestBlog-card-text-alignment">
                    <span>Sea Global Fx Team</span>
                    <span>. 08 April 2026</span>
                  </div>
                </div>
              </div>
            </a>
            <a href="/" aria-label="#" target="_blank" rel="noreferrer">
              <div className="latestBlog-card">
                <div className="latestBlog-card-image">
                  <img src={Why_Gold} alt="Why_Gold" />
                </div>
                <div className="latestBlog-card-details">
                  <h3>
                    Why Gold Is Falling Despite War — And Whether the Safe Haven Story Is Really Over
                  </h3>
                  <div className="latestBlog-card-text-alignment">
                    <span>Sea Global Fx Team</span>
                    <span>. 06 April 2026</span>
                  </div>
                </div>
              </div>
            </a>
            <a href="/" aria-label="#" target="_blank" rel="noreferrer">
              <div className="latestBlog-card">
                <div className="latestBlog-card-image">
                  <img src={ Gold_at_4_500} alt="Gold_at_4_500" />
                </div>
                <div className="latestBlog-card-details">
                  <h3>
                   Gold at $4,500: What the Historic Rally Means for Forex and CFD Traders in 2026
                  </h3>
                  <div className="latestBlog-card-text-alignment">
                    <span>Sea Global Fx Team</span>
                    <span>. 02 April 2026</span>
                  </div>
                </div>
              </div>
            </a>
            <a href="/" aria-label="#" target="_blank" rel="noreferrer">
              <div className="latestBlog-card">
                <div className="latestBlog-card-image">
                  <img src={ Oil_Shock} alt="Oil_Shock" />
                </div>
                <div className="latestBlog-card-details">
                  <h3>
                    The Oil Shock Currency Playbook: How Brent's Surge from $70 to $120 Is Redrawing Forex Markets in 2026
                  </h3>
                  <div className="latestBlog-card-text-alignment">
                    <span>Sea Global Fx Team</span>
                    <span>. 30 March 2026</span>
                  </div>
                </div>
              </div>
            </a>
            <a href="/" aria-label="#" target="_blank" rel="noreferrer">
              <div className="latestBlog-card">
                <div className="latestBlog-card-image">
                  <img src={ Geopolitical_Risk} alt="Geopolitical_Risk" />
                </div>
                <div className="latestBlog-card-details">
                  <h3>
                    Geopolitical Risk Forex Trading Has Changed in 2026 — And What CFD Traders Must Do
                  </h3>
                  <div className="latestBlog-card-text-alignment">
                    <span>Sea Global Fx Team</span>
                    <span>. 26 March 2026</span>
                  </div>
                </div>
              </div>
            </a>
            <a href="/" aria-label="#" target="_blank" rel="noreferrer">
              <div className="latestBlog-card">
                <div className="latestBlog-card-image">
                  <img src={CBD} alt="CBD" />
                </div>
                <div className="latestBlog-card-details">
                  <h3>
                   How CBDCs Could Reshape Global Forex Markets: The Next Evolution of Currency Trading
                  </h3>
                  <div className="latestBlog-card-text-alignment">
                    <span>Sea Global Fx Team</span>
                    <span>. 23 March 2026</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="latestBlog-paginationAlignment">
            <div className="latestBlog-paginationAlignment-disable-text">Prev</div>
            <div className="latestBlog-paginationAlignment-Activepage active-page">1</div>
            <div className="latestBlog-paginationAlignment-Activepage">2</div>
            <div className="latestBlog-paginationAlignment-Activepage">3</div>
            <div className="latestBlog-paginationAlignment-text">Next</div>
          </div>
        </div>
      </div>
    </section>
  );
}
