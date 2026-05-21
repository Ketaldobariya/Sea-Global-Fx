import React from "react";
import Herosection from "./herosection";
import Tagline from "../homepage/tagline";
import WhyTradeWithForex from "./whyTradeWithForex";
import AvailableInstruments from "./availableInstruments";
import TradingHours from "./tradingHours";
import TradThisMarketOn from "./tradThisMarketOn";
import StartTradingForex from "./startTradingForex";
import Faqsection from "../../components/faqsection";
export default function ForexMarket(){
    return(
        <div>
            <Herosection/>
            <Tagline/>
            <WhyTradeWithForex/>
            <AvailableInstruments/>
            <TradingHours/>
            <TradThisMarketOn/>
            <StartTradingForex/>
            <Faqsection/>
        </div>
    );
}