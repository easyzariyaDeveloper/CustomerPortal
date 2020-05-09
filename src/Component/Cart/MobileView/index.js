import React, { useState } from "react";
import MobilePageLayout from "../../../Layout/MobileView";
import {CartPageMWrapper,MCard, CartMHeader, ServiceMLabel, DateTimeMPicker,SelectAddressMLabel,CouponInputText,OverlayCard} from "./style";
import {ServiceLabel,SubTotal,TotalPrice,PayableDiv,PayableAmt} from "../style";
import MaterialUIPickers from "../../Common/DateTimePicker";
import MServices from "./MServices";
import getPrice from "../util";
import {ServiceCart} from "../mockCartData";
import { CouponCodes } from "../mockCartData";
import ActionButton from "../../Common/ActionButton";



export default function Cart(){
    const [cardVisible, setCardVisibility] = useState(false);


    return <MobilePageLayout pageName = "Cart">
        <CartPageMWrapper>
            <MServices/>
            <MCard>
                <DateTimeMPicker><MaterialUIPickers/></DateTimeMPicker>
            </MCard>
            <MCard>
               <SelectAddressMLabel
                    placeholder = "Select Center"
                    onClick = {() => setCardVisibility(true)}
               />
            </MCard>
            <MCard>
            <ServiceLabel>
                <SubTotal>Subtotal</SubTotal>
                <TotalPrice>Rs {getPrice(ServiceCart)} </TotalPrice>
            </ServiceLabel>

            <CouponInputText
                type="text"
                placeholder="Enter Coupon Code"
            />
             {
                 cardVisible ? <OverlayCard>
                     <MCard>
                        <h1>Select Center</h1>
                     </MCard>
                 </OverlayCard>: null
                         
             }



            <ServiceLabel>
                <PayableDiv>Total</PayableDiv>
                <PayableAmt>Rs {(getPrice(ServiceCart) - CouponCodes[0].newUser)}</PayableAmt>
            </ServiceLabel>
            
        </MCard>
        <ActionButton label = "Proceed To CheckOut"/>
        </CartPageMWrapper>
    </MobilePageLayout>
}