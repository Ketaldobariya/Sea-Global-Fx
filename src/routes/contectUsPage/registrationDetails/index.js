import React from "react";
import "./registrationDetails.scss"
import Outline from "../../../assets/images/outline-vec.png"
import Billding from "../../../assets/images/Billding.png"
export default function RegistrationDetails(){
    return(
        <section>
            <div className="registrationDetails-section">
                <div className="container-sm">
                    <div className="registrationDetails-text-container">
                        <h2 className="animate__animated animate__fadeInUp wow" data-wow-offset="100"  data-wow-delay="0.1s">Office and Registration <span> Details </span></h2>
                        <div className="registrationDetails-text-alignment">
                            <div className="registrationDetails-text animate__animated animate__fadeInUp wow" data-wow-offset="100"  data-wow-delay="0.2s">
                                <h3>Registered Address</h3>
                                <p>1st Floor, The Sotheby Building, Rodney Bay, Gros- Islet, Castries, Saint Lucia – 838</p>
                            </div>
                            <div className="registrationDetails-text animate__animated animate__fadeInUp wow" data-wow-offset="100"  data-wow-delay="0.3s">
                                <h3>Physical Address</h3>
                                <p>1st Floor, The Sotheby Building, Rodney Bay, Gros-Islet, Castries, Saint Lucia – 838</p>
                            </div>
                        </div>
                        <div className="registrationDetails-outline-image">
                            <img src={Outline} alt="Outline"/>
                        </div>
                    </div>
                </div>
                <div className="registrationDetails-rightImage animate__animated animate__fadeInRight wow" data-wow-offset="100"  data-wow-delay="0.1s">
                    <img src={Billding} alt="Billding"/>
                </div>
            </div>
        </section>
    );
}