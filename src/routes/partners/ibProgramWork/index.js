import "./ibProgramWork.scss";
import Openaccountbtn from "../../../components/openaccountbtn/index.js";
import Register from "../../../assets/images/Register.svg";
import Refer from "../../../assets/images/Refer.svg";
import Clients from "../../../assets/images/Clients.svg";
import Earn from "../../../assets/images/Earn.svg";
export default function IbProgramWork() {
  return (
    <section>
      <div className="openYourAccount">
        <div className="container-xl">
          <div className="openYourAccount-title">
            <h2 className="openYourAccount-heading animate__animated animate__fadeInUp wow" data-wow-offset="10"  data-wow-delay="0.1s">
              How the Sea Global FX IB Program<span> Works</span>
            </h2>
          </div>
          <div className="easy-steps-cards">
            <div className="easy-step-card animate__animated animate__fadeInUp wow" data-wow-offset="10"  data-wow-delay="0.5s">
              <div className="easy-steps-card-counter">1</div>
              <h3>Register as a Partner</h3>
              <p>Complete the online IB registration form.</p>
              <div className="easy-steps-card-iconRight">
                <img src={Register} alt="Register" />
              </div>
            </div>
            <div className="easy-step-card animate__animated animate__fadeInUp wow" data-wow-offset="10"  data-wow-delay="0.6s">
              <div className="easy-steps-card-counter">2</div>
              <h3>Refer Clients</h3>
              <p>Share your unique IB referral link or code.</p>
              <div className="easy-steps-card-iconRight">
                <img src={Refer} alt="Refer" />
              </div>
            </div>
            <div className="easy-step-card animate__animated animate__fadeInUp wow" data-wow-offset="10"  data-wow-delay="0.7s">
              <div className="easy-steps-card-counter">3</div>
              <h3>Clients Start Trading</h3>
              <p>Referred clients trade forex and CFDs on Seaglobal FX.</p>
              <div className="easy-steps-card-iconRight">
                <img src={Clients} alt="Clients" />
              </div>
            </div>
            <div className="easy-step-card animate__animated animate__fadeInUp wow" data-wow-offset="10"  data-wow-delay="0.8s">
              <div className="easy-steps-card-counter">4</div>
              <h3>Earn Commissions</h3>
              <p>Receive commissions based on client trading activity and rebate structure.</p>
              <div className="easy-steps-card-iconRight">
                <img src={Earn} alt="Earn" />
              </div>
            </div>
          </div>
          <div className="account-center-button animate__animated animate__fadeInUp wow" data-wow-offset="50"  data-wow-delay="0.9s">
            <a href="/" aria-label="account button" target="_blank" rel="noreferrer">
                <Openaccountbtn/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
