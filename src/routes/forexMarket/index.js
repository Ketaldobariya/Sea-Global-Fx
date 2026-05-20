import React from "react";
import Herosection from "./herosection";
import Tagline from "../homepage/tagline";
import WhyTradeWithForex from "./whyTradeWithForex";
import AvailableInstruments from "./availableInstruments";
import TradingHours from "./tradingHours";
export default function ForexMarket(){
    return(
        <div>
            <Herosection/>
            <Tagline/>
            <WhyTradeWithForex/>
            <AvailableInstruments/>
            <TradingHours/>
        </div>
    );
}