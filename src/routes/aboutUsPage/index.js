import Herosection from "./herosection";
import AboutSeaGlobal from "./aboutSeaGlobal";
import OurVision from "./ourVision";
import WhyChooseSeaGlobal from "./whyChooseSeaGlobal";
import ClientFundProtection from "./clientFundProtection";
import ReliableFunding from "./reliableFunding";
import ProfessionalTradingTools from "./professionalTradingTools";
import Faqsection from "../../components/faqsection";
export default function AboutUsPage(){
    return(
        <div>
            <Herosection/>
            <AboutSeaGlobal/>
            <OurVision/>
            <WhyChooseSeaGlobal/>
            <ClientFundProtection/>
            <ReliableFunding/>
            <ProfessionalTradingTools/>
            <Faqsection/>
        </div>
    );
}