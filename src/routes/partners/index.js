import react from "react";
import Herosection from "./herosection";
import Tagline from "../homepage/tagline";
import WhyPartner from "./whyPartner";
import OurForexPartner from "./ourForexPartner";
import IbProgramWork from "./ibProgramWork";
import PartnerTool from "./partnerTool";
import ReadyToBecomeAPartner from "./readyToBecomeAPartner";
import Faqsection from "../../components/faqsection";
export default function Partners(){
    return(
        <div>
            <Herosection/>
            <Tagline/>
            <WhyPartner/>
            <OurForexPartner/>
            <IbProgramWork/>
            <PartnerTool/>
            <ReadyToBecomeAPartner/>
            <Faqsection/>
        </div>
    );
}