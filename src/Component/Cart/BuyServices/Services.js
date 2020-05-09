import React from "react";
import { 
    ServiceCartWrapper, CartServicePara, CartPricePara, 
    ServiceLabel, ServiceListItem, DeleteButton,
    SubTotal, TotalPrice, CouponSubmitButton, 
    CouponWrapper, DiscountAmount, DiscountLabel, CalculateDiv, 
    PayableDiv, PayableAmt,SelectAddressLabel
} from "../style"
import { CouponCodes } from "../mockCartData";

import MaterialUIPickers from "../../Common/DateTimePicker";
import getPrice from "../util";
import { TextField } from "@material-ui/core";

export default function Services(props) {
    console.log(props.address);
    return <ServiceCartWrapper>
        <ServiceLabel>
            <CartServicePara>Services</CartServicePara>
            <CartPricePara>Prices</CartPricePara>
        </ServiceLabel>
        {
            props.ServiceList.map((serviceName) => {
                const { name, id, price } = serviceName;
                return <ServiceListItem>
                    <DeleteButton onClick={() => props.deleteItem(id)}> - </DeleteButton>
                    <CartServicePara>{name}</CartServicePara>
                    <CartPricePara>Rs.{price}</CartPricePara>
                </ServiceListItem>
            })
        }

        <MaterialUIPickers />

        <SelectAddressLabel
            onClick={() => props.setVisibilityForOverlay(true)}
            placeholder="Select Centre"
            value = {props["address"]["address"] ? props["address"]["address"] : ""}
        ></SelectAddressLabel>

        <CouponWrapper>
            <TextField
                name = "couponcode"
                value = ""
                onChange={() => console.log("Hello")}
                label="Enter Coupon Code"
            />
            <CouponSubmitButton label='Apply' />
        </CouponWrapper>

        <CalculateDiv>
            <ServiceLabel>
                <SubTotal>Subtotal</SubTotal>
                <TotalPrice>Rs {getPrice(props.ServiceList)} </TotalPrice>
            </ServiceLabel>
            <ServiceLabel>
                <DiscountLabel>Discount</DiscountLabel>
                <DiscountAmount>Rs {CouponCodes[0].newUser}</DiscountAmount>
            </ServiceLabel>
        </CalculateDiv>

        <ServiceLabel>
            <PayableDiv>Total</PayableDiv>
            <PayableAmt>Rs {(getPrice(props.ServiceList) - CouponCodes[0].newUser)}</PayableAmt>
        </ServiceLabel>



    </ServiceCartWrapper >
}