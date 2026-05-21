import react from "react";
import Herosection from "./herosection";
import Tagline from "../homepage/tagline";
import WhyPartner from "./whyPartner";
import OurForexPartner from "./ourForexPartner";
export default function Partners(){
    return(
        <div>
            <Herosection/>
            <Tagline/>
            <WhyPartner/>
            <OurForexPartner/>
        </div>
    );
}