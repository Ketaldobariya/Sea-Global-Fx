import Herosection from "./herosection";
import WaysToReach from "./waysToReach";
import RegistrationDetails from "./registrationDetails";
import GetInTouch from "./getInTouch";
import Faqsection from "../../components/faqsection";
export default function ContectUsPage(){
    return(
        <div>
        <Herosection/>
        <WaysToReach/>
        <RegistrationDetails/>
        <GetInTouch/>
        <Faqsection/>
        </div>
    );
}