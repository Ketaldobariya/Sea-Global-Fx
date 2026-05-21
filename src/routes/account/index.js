import React from "react";
import Herosection from "./herosection";
import OpenYourAccount from "../homepage/openYourAccount";
import Faqsection from "../../components/faqsection";
import AccountType from "./accountType";
export default function Accountsection(){
    return(
        <div>
            <Herosection/>
            <AccountType/>
            <OpenYourAccount/>
            <Faqsection/>
        </div>
    );
}