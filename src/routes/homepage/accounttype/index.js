import react from "react";
import "./accounttype.scss"
export default function Accounttype(){
    return(
        <section>
            <div className="account-type-section">
                <div className="container-xl">
                    <div className="account-type-G-title">
                        <h2>
                            <span>Account </span> Types
                        </h2>
                        <p>Pick an account that matches your trading style and experience level. Our MT5 trading accounts are designed with transparent pricing, competitive spreads, and flexible conditions.</p>
                    </div>
                    <div className="account-type-cards">
                        <div className="account-bottom-card">
                            <div className="account-card">
                                <div className="card-header">
                                    <h3>Pro</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}