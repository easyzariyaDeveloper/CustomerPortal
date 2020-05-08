import React, { useState } from "react";
import { 
    ServiceCartWrapper, CartServicePara, CartPricePara, 
    ServiceLabel, ServiceListItem, DeleteButton,
     InputTextCart, SubTotal, TotalPrice, CouponSubmitButton, 
     CouponWrapper, DiscountAmount, DiscountLabel, CalculateDiv, 
     PayableDiv, PayableAmt,SelectAddressLabel
} from "../style"
import {CouponCodes} from "../mockCartData";

import MaterialUIPickers from "../../Common/DateTimePicker";

    function getPrice(ServiceCart = []){
        const ServicePrice = [];
        ServiceCart.map((serviceName) => {
            const { price } = serviceName;
            ServicePrice.push({ price });
        });

        const TotalPrice = ServicePrice.reduce((accumulator, currentValue) => {
            accumulator += currentValue["price"]
            return accumulator
        }, 0);
        return TotalPrice;
    }

    export default function Services(props) {

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

        <MaterialUIPickers/>

        <SelectAddressLabel
            onClick = {() => props.setVisibilityForOverlay(true)}
        >Select Centre</SelectAddressLabel>

        <CouponWrapper>
            <InputTextCart
                type="text"
                placeholder="Enter Coupon Code"
            />
            <CouponSubmitButton label = 'Apply'/>
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
            <PayableAmt>Rs {(getPrice(props.ServiceList)-CouponCodes[0].newUser)}</PayableAmt>
        </ServiceLabel>



    </ServiceCartWrapper >
}