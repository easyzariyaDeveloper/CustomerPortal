import React, { useState } from "react";
import MobilePageLayout from "../../../Layout/MobileView";
import { CartMCard, SelectedCar, ServicePriceHeader, DateTimeMPicker, CouponCodeButton,OverlayCard, CouponTextField,CouponCardCloseButton, SubTotalDiv, DiscountDiv, TotalDiv,DateTimeDiv, DateTimeGrid, CheckOutButton, MCartPageWrapper, DatePara, TimePara, MCouponCard, MCouponPara, MApplyCouponButton, MCouponImage, CouponTextDiv} from "./style";
import MServices from "./MServices";
import MaterialUIPickers from "../../Common/DateTimePicker";
import Coupon from "../../../Assets/img/coupon.png";
import { ServiceCart, CouponCodes } from "../mockCartData";
import getPrice from "../util";
import CouponCancel from "../../../Assets/img/coupon_cancel.jpg"
import { connect } from "react-redux";
import { fetchCart } from "../Data/action";



function Cart(props){
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
                    <DatePara>Select Date: </DatePara>
                    <TimePara>Select Time: </TimePara>
                </DateTimeDiv>

                <DateTimeMPicker><MaterialUIPickers/></DateTimeMPicker> 
            </DateTimeGrid>

            <CouponCodeButton onClick = {() => setCouponCardVisibility(true)}>
                <MCouponImage src = {Coupon} />
                {`Apply Coupon >`}
            </CouponCodeButton>

            {
                couponCardVisibility ? <OverlayCard> 
                    <MCouponCard>
                        <CouponCardCloseButton onClick = {() => setCouponCardVisibility(false)} src = {CouponCancel}></CouponCardCloseButton> <br></br>
                        <MCouponPara>Apply Coupon</MCouponPara>
                        
                        <CouponTextDiv>
                            <CouponTextField 
                                name = "Enter Coupon Code"
                                value = {couponCode}
                                onChange={(event) => setCouponCode(event.target.value)}
                                label="Enter Coupon Code"
                            />
                            <MApplyCouponButton>Apply</MApplyCouponButton>
                        </CouponTextDiv>  
                        <MCouponPara>No Coupons Available</MCouponPara>
                    </MCouponCard> 
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

            <CheckOutButton>Checkout</CheckOutButton>
            
        </CartMCard> 

        </MCartPageWrapper>
    </MobilePageLayout>
}

const mapStateToProps = (state) => {
    return {
        cart: state?.cart
        
        // //selectedCarId: state?.profile?.["selectedCarId"],
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCart: () => {dispatch(fetchCart())}
        // fetchPackages: (filter = {}) => { dispatch(fetchPackages(filter))},
        // fetchCar: () => {dispatch(fetchCar())},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);