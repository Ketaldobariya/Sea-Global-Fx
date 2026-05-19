import React from "react";
import Herosection from "./herosection";
import Tagline from "./tagline";
import MarketsOverview from "./marketoverview";
import WhySeaGlobal from "./whyseaglobal";
import Onemarket from "./onemarket";
import Accounttype from "./accounttype";
export default function Homepage(){
    return(
        <div>
           <Herosection/>
           <Tagline/>
           <WhySeaGlobal/>
           <Onemarket/>
           <MarketsOverview/>
           <Accounttype/>
        </div>
    );
}