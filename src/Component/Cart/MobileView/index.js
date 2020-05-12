import React, { useState } from "react";
import MobilePageLayout from "../../../Layout/MobileView";
import {CartPageMWrapper,MCard, DateTimeMPicker,SelectAddressMLabel,OverlayCard,CouponButton,CouponAlignment, CheckoutBtn,ServiceMLabel, MCalculateDiv} from "./style";
import {ServiceLabel,SubTotal,TotalPrice,PayableDiv,PayableAmt,DiscountLabel,DiscountAmount} from "../style";
import MaterialUIPickers from "../../Common/DateTimePicker";
import MServices from "./MServices";
import getPrice from "../util";
import {ServiceCart} from "../mockCartData";
import { CouponCodes } from "../mockCartData";
import ActionButton from "../../Common/ActionButton";
import { TextField } from "@material-ui/core";
import MobileMap from "./MobileMap";
import Map from "../Map";



export default function Cart(){
    const [cardVisible, setCardVisibility] = useState(false);
    const [address, setAddress] = useState("");
    const [appliedCoupon,setAppliedCoupon] = useState("");


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
                    address ={address}
               />
            </MCard>
            {
                 cardVisible ? <OverlayCard>
                     <MCard>
                        {/* <TextField
                            name = "Select Center"
                            value = " "
                            onChange={(event) => event.target.value}
                            label="Select Center"
                        /> */}
                        <Map 
                            visibleElm = {{
                                "autoComplete": false
                            }}
                        />
                        
                     </MCard>
                 </OverlayCard>: null
                         
             }

            <MCard>
                <CouponAlignment>
                    <TextField
                        name = "couponcode"
                        value = {appliedCoupon}
                        onChange={(event) => setAppliedCoupon(event.target.value)}
                        label="Coupon Code"
                    />
                    <CouponButton>Apply</CouponButton>
                </CouponAlignment>
            </MCard>

        
        <MCard>
            <h1>Order Summary</h1>
            <MCalculateDiv>
            <ServiceMLabel>
                <SubTotal>Subtotal</SubTotal>
                <TotalPrice>Rs {getPrice(ServiceCart)} </TotalPrice>
            </ServiceMLabel>

            <ServiceMLabel>
                <DiscountLabel>Discount</DiscountLabel>
                <DiscountAmount>Rs {CouponCodes[0].newUser}</DiscountAmount>
            </ServiceMLabel>
            </MCalculateDiv>
            <ServiceMLabel>
                <PayableDiv>Total</PayableDiv>
                <PayableAmt>Rs {(getPrice(ServiceCart) - CouponCodes[0].newUser)}</PayableAmt>
            </ServiceMLabel>    
        </MCard>

        <CheckoutBtn>
            <ActionButton label = "Proceed To CheckOut"/>
        </CheckoutBtn>
        </CartPageMWrapper>
    </MobilePageLayout>
}