import "./tradingHours.scss";
export default function TradingHours() {
  return (
    <section>
      <div className="tradingHours-section">
        <div className="container-xl">
          <div className="tradingHours-grid">
            <div className="tradingHours-card">
              <h3>Trading Hours</h3>
              <h4>Monday To Friday</h4>
              <p>
                Market opening and closing times may vary by instrument, public
                holidays, and daylight saving changes.
              </p>
            </div>
            <div className="tradingHours-card">
              <h3>Contract Specs</h3>
              <p>
                Each instrument has defined contract specifications to ensure
                transparency and consistent trading conditions.
              </p>
              <p>Full details are available within the trading platform and instrument specification pages.</p>
            </div>
            <div className="tradingHours-card  last-card-border">
              <h3>What Traders Should Know</h3>
              <ul>
                <li>Margin requirements may increase during periods of high volatility</li>
                <li>Swap rates differ by instrument and may change based on market conditions</li>
                <li>Tick size determines the minimum price movement for each instrument</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
