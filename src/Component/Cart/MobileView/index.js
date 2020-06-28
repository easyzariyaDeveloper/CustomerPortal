import React, { useState } from "react";
import MobilePageLayout from "../../../Layout/MobileView";
import { CartMCard, SelectedCar, ServicePriceHeader, DateTimeMPicker, CouponCodeButton,OverlayCard, CouponTextField,CouponCardCloseButton, SubTotalDiv, DiscountDiv, TotalDiv,DateTimeDiv, DateTimeGrid, CheckOutButton, MCartPageWrapper} from "./style";
import MServices from "./MServices";
import MaterialUIPickers from "../../Common/DateTimePicker";
import Coupon from "../../../Assets/img/coupon.png";
import { ServiceCart, CouponCodes } from "../mockCartData";
import getPrice from "../util";


export default function Cart(){
    const [couponCardVisibility, setCouponCardVisibility] = useState(false);
    const [couponCode, setCouponCode]  = useState("");
    const [mServiceList, setMServiceList] = useState(ServiceCart);

    const Car = "Hyundai Creta (Diesel)"

    const deleteItem = (id) => {
        const mFilteredList = mServiceList.filter(serviceObj => serviceObj["id"] != id);
        setMServiceList(mFilteredList);
    }


    return <MobilePageLayout >
        <MCartPageWrapper>
        <CartMCard>
            <SelectedCar>{Car}</SelectedCar>
            <ServicePriceHeader>
                <h1>Service</h1>
                <h1>Price</h1>
            </ServicePriceHeader>

            <MServices
                mServiceList = {mServiceList}
                deleteItem = {deleteItem}
            />

            <DateTimeGrid>
                <DateTimeDiv>
                    <p style = {{padding: "42px 0"}}>Select Date: </p>
                    <p style = {{padding: "12px 0"}}>Select Time: </p>
                </DateTimeDiv>

                <DateTimeMPicker><MaterialUIPickers/></DateTimeMPicker> 
            </DateTimeGrid>

            <CouponCodeButton onClick = {() => setCouponCardVisibility(true)}>
                <img style = {{paddingRight: "10px", verticalAlign: "middle"}} src = {Coupon} />
                Apply Coupon >
            </CouponCodeButton>

            {
                couponCardVisibility ? <OverlayCard> 
                    <CartMCard style = {{width: "65%", margin: "auto", height: "100px"}}> 
                        <CouponCardCloseButton onClick = {() => setCouponCardVisibility(false)}>X</CouponCardCloseButton> <br></br>
                        <p style = {{textAlign: "center", padding: "15px"}}>Apply Coupon</p>
                        
                        <div style = {{border:"1px solid #BDBDBD", borderRadius: "5px"}}>
                        <CouponTextField 
                            name = "Enter Coupon Code"
                            value = {couponCode}
                            onChange={(event) => setCouponCode(event.target.value)}
                            label="Enter Coupon Code"
                        />
                        <button style = {{border:"none", background: "white", float:"right"}}>Apply</button>
                        </div>  
                        <p style = {{textAlign: "center", padding: "15px"}}>No Coupons Available</p>
                    </CartMCard>
                </OverlayCard> : null
            }

            <SubTotalDiv>
                <h1 style = {{fontWeight:"normal"}}>Subtotal:</h1>
                <h1>Rs.{getPrice(mServiceList)}</h1>
            </SubTotalDiv>
            <DiscountDiv>
                <h1 style = {{fontWeight:"normal"}}>Discount:</h1>
                <h1>Rs {CouponCodes[0].newUser}</h1>
            </DiscountDiv>
            
            <TotalDiv>
                <h1 style = {{fontWeight:"normal"}}>Total:</h1>
                <h1>Rs {(getPrice(mServiceList) - CouponCodes[0].newUser)}</h1>
            </TotalDiv>

            <div style = {{padding: "20px 0"}}><CheckOutButton href  = "/address">Checkout</CheckOutButton></div>
            
        </CartMCard> 

        </MCartPageWrapper>
    </MobilePageLayout>
}