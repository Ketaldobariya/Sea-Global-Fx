import react from "react";
import Herosection from "./herosection";
import Tagline from "../homepage/tagline";
import PlatformVideoSection from "./platformVideoSection";
import PlatformHighlight from "./platformHighlight";
import TradThisMarketOn from "../forexMarket/tradThisMarketOn";
import StartTradingOnPlatform from "./startTradingOnPlatform";
import Faqsection from "../../components/faqsection";
export default function Platforms(){
    return(
        <div>
            <Herosection/>
            <Tagline/>
            <PlatformVideoSection/>
            <PlatformHighlight/>
            <TradThisMarketOn/>
            <StartTradingOnPlatform/>
            <Faqsection/>
        </div>
    );
}