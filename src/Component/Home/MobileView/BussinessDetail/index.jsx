import React, {useState} from "react";
import Switch from 'react-ios-switch';
import { Header, CustomerBenefit, BusinessBenefit } from "./style";

//https://www.npmjs.com/package/react-ios-switch

export default function BussinessDetail(){
    const [customerSwitch, setCustomerSwitch] = useState(false);
    return <>
        <Header>Why EZ?</Header>
        <>
            <Switch 
                checked = {customerSwitch}
                handleColor = {"#1DA0BC"}
                offColor = {"#FFFFFF"}
                onColor = {"#FFFFFF"}
                style = {{
                    "boxShadow" : "0px 7px 20px rgba(0, 0, 0, 0.07)"
                }}
                onChange={() => setCustomerSwitch(!customerSwitch)}
            />
        </>
        {
            !customerSwitch ? 
            <CustomerBenefit>
                Customer
            </CustomerBenefit> : 
            <BusinessBenefit>
                Bussiness
            </BusinessBenefit>        
        }
    </>
}