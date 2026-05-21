import react from "react";
import "./readyToBecomeAPartner.scss";
import Openaccountbtn from "../../../components/openaccountbtn";
import Trydemo from "../../../components/trydemo";
import Stemp from "../../../assets/images/stemp.png";
export default function ReadyToBecomeAPartner() {
  return (
    <section>
        <div className="readyToBecomeAPartner">
      <div className="startTradingForex-section">
        <div className="container-xl">
          <div className="startTradingForex-box">
            <div className="startTradingForex-box-grid">
              <div className="startTradingForex-box-leftside">
                <h3 className="platform-header-start">
                  Ready to Become a  <br />
                  <span> Sea Global FX </span> Partner?
                </h3>
                <h6>
                  Join our growing global partner network and start building a sustainable forex partnership today.
                </h6>
                <div className="startTrading-twobutton-alignment">
                  <div className="open-account-button">
                    <Openaccountbtn />
                  </div>
                  <div className="trydemo-button">
                    <Trydemo />
                  </div>
                </div>
              </div>
              <div className="startTradingForex-box-rightside">
                <div className="startTradingForex-box-rightside-image">
                  <img src={Stemp} alt="Stemp" />
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
