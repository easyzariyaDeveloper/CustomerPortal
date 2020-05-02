import React, { useState } from "react";
import { 
    ServiceCartWrapper, CartServicePara, CartPricePara, 
    ServiceLabel, ServiceListItem, DeleteButton,
     InputTextCart, SubTotal, TotalPrice, CouponSubmitButton, 
     CouponWrapper, DiscountAmount, DiscountLabel, CalculateDiv, 
     PayableDiv, PayableAmt, DatePicker, TimePicker, DatePickerWrapper,
     TimeWrapper,
     SelectAddressLabel
} from "../style"
import {CouponCodes} from "../mockCartData";
import "react-datepicker/dist/react-datepicker.min.css";
import moment from "moment";

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
        const [serviceDate, setServiceDate] = useState(null);
        const [serviceTime, setServiceTime] = useState(null);

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

        <DatePickerWrapper>
            <p> 
                {serviceDate || "Please select a date"}
                <span>&#x1F4C5;</span> 
            </p>
            <DatePicker
                onChange={date => setServiceDate(date)}
                minDate = {new Date()}
                selected = {serviceDate ? moment(serviceDate).format("DD/MM/YYYY") : serviceDate}    
                dateFormat="dd/MM/yyyy"
            />
        </DatePickerWrapper>

        <TimeWrapper>
            <label> 
                {serviceTime || "Time slot"}
                <span>&#x25BC;</span>
            </label>
            <TimePicker
                onChange={time => setServiceTime(time)}
                selected = {new Date()}  
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={30}
                dateFormat="h:mm aa"
            />
        </TimeWrapper>

        <SelectAddressLabel
            onClick = {() => props.setVisibilityForOverlay(true)}
        >Select Centre</SelectAddressLabel>

        <CouponWrapper>
            <InputTextCart
                type="text"
                placeholder="Enter Coupon Code"
            />
            <CouponSubmitButton>Apply</CouponSubmitButton>
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