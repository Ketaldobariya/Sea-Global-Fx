import react from "react";
import "./startTradingForex.scss"
import Openaccountbtn from "../../../components/openaccountbtn";
import Trydemo from "../../../components/trydemo";
import Earth from "../../../assets/images/earth.png"
export default function StartTradingForex(){
    return(
        <section>
            <div className="startTradingForex-section">
                <div className="container-xl">
                    <div className="startTradingForex-box">
                        <div className="startTradingForex-box-grid">
                            <div className="startTradingForex-box-leftside">
                                <h3>Start Trading <span>Forex</span> Today</h3>
                                <h6>Trade forex market with Sea Global’s professional trading infrastructure, competitive pricing, and reliable execution—designed to support traders at every level.</h6>
                                <div className="startTrading-twobutton-alignment">
                                    <div className="open-account-button">
                                        <Openaccountbtn/>
                                    </div>
                                    <div className="trydemo-button">
                                        <Trydemo/>
                                    </div>
                                </div>
                            </div>
                            <div className="startTradingForex-box-rightside">
                                <div className="startTradingForex-box-rightside-image">
                                    <img src={Earth} alt="Earth"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}