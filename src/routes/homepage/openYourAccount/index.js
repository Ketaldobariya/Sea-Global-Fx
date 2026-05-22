import react from "react";
import "./openYourAccount.scss";
import Openaccountbtn from "../../../components/openaccountbtn/index.js"
import System from "../../../assets/images/system.png";
import Kyc from "../../../assets/images/kyc.png";
import Fund from "../../../assets/images/fund.png";
import Trading from "../../../assets/images/trading.png";
export default function OpenYourAccount() {
  return (
    <section>
      <div className="openYourAccount-section">
        <div className="container-xl">
          <div className="openYourAccount-title">
            <h2 className="animate__animated animate__fadeInUp wow" data-wow-offset="10"  data-wow-delay="0.1s">
              Open Your Account in 4<span> Easy Steps</span>
            </h2>
            <p className="animate__animated animate__fadeInUp wow" data-wow-offset="10"  data-wow-delay="0.3s">
              Start trading with confidence through a fast, secure, and fully
              guided onboarding process—designed to get you from signup to your
              first trade with minimal friction.
            </p>
          </div>
          <div className="easy-steps-cards">
            <div className="easy-steps-card animate__animated animate__fadeInUp wow" data-wow-offset="10"  data-wow-delay="0.5s">
              <div className="easy-steps-card-counter">1</div>
              <h3>SignUp</h3>
              <p>Create your account in minutes</p>
              <div className="easy-steps-card-iconRight">
                <img src={System} alt="System" />
              </div>
            </div>
            <div className="easy-steps-card animate__animated animate__fadeInUp wow" data-wow-offset="10"  data-wow-delay="0.6s">
              <div className="easy-steps-card-counter">2</div>
              <h3>KYC Verification</h3>
              <p>Fast & secure identity verification</p>
              <div className="easy-steps-card-iconRight">
                <img src={Kyc} alt="Kyc" />
              </div>
            </div>
            <div className="easy-steps-card animate__animated animate__fadeInUp wow" data-wow-offset="10"  data-wow-delay="0.7s">
              <div className="easy-steps-card-counter">3</div>
              <h3>Fund Account</h3>
              <p>Add funds securely to start trading</p>
              <div className="easy-steps-card-iconRight">
                <img src={Fund} alt="Fund" />
              </div>
            </div>
            <div className="easy-steps-card animate__animated animate__fadeInUp wow" data-wow-offset="10"  data-wow-delay="0.8s">
              <div className="easy-steps-card-counter">4</div>
              <h3>Start Trading</h3>
              <p>Access global markets instantly</p>
              <div className="easy-steps-card-iconRight">
                <img src={Trading} alt="Trading" />
              </div>
            </div>
          </div>
          <div className="account-center-button animate__animated animate__fadeInUp wow" data-wow-offset="50"  data-wow-delay="0.9s">
            <a href="/" aria-label="account button" target="_blank">
                <Openaccountbtn/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
