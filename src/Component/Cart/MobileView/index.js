import React, { useState } from "react";
import MobilePageLayout from "../../../Layout/MobileView";
import { DateTimeMPicker, CouponCodeButton,
    OverlayCard, CouponTextField,CouponCardCloseButton, SubTotalDiv, 
    DiscountDiv, TotalDiv,
     MCartPageWrapper,MCouponCard, MCouponPara, 
     MApplyCouponButton, MCouponImage, CouponTextDiv, DateTimePickers, CartPriceMPara, CartButtonDiv, AppliedCouponDiv
} from "./style";

import {
    CarInfo, CarImage,VariantName,
    CarWrapper, CardHeaderText,} from "./style";
import MServices from "./MServices";
import MaterialUIPickers from "../../Common/DateTimePicker";
import Coupon from "../../../Assets/img/coupon.png";
import { ServiceCart, CouponCodes } from "../mockCartData";
import CouponCancel from "../../../Assets/img/coupon_cancel.jpg"
import { connect } from "react-redux";
import { fetchCart, deleteItem, applyCoupon,navigateNext, removeCoupon } from "../Data/action";
import Skeleton from '@material-ui/lab/Skeleton';
import { EZCard } from "../../Common/MobileCard";
import CarIcon from "../../../Assets/img/carIcon.svg";
import { MobileActionButton } from "../../../Assets/common-styled";
import EmptyCart from "./emptyCart";
import Alert from '@material-ui/lab/Alert';

function Cart(props){

    const [couponCardVisibility, setCouponCardVisibility] = useState(false);
    const [couponCode, setCouponCode]  = useState("");
    const [mServiceList, setMServiceList] = useState(ServiceCart);
    const {cart : {cart = {}} = {}} = props;

    const[dateTime, setDateTime] = useState(null);

    const handleDateTimeChange = (value) =>{
        setDateTime(value);
    }
    

    function navigateNext(){
        if(dateTime.getTime() - Date.now() > 14400000) {
            props?.navigateNext({
                time: dateTime.toISOString()
            });
            location.href = "/cart/add-address"
        } else {
            alert("Enter correct time");
        }
    }

    return <MobilePageLayout pageName = "Cart">
        {
            props?.cart?.inProgress ? 
            <>
                <Skeleton animation="wave" height={200} width="90%" style = {{margin : "0 auto"}} />
                <Skeleton animation="wave" height={250} width="90%" style = {{margin : "0 auto"}} />
                <Skeleton animation="wave" height={300} width="90%" style = {{margin : "0 auto"}} />
            </> : (cart?.itemIds.length > 0 ? <MCartPageWrapper>
            <EZCard style = {{"marginTop": "5px"}}>
                <CardHeaderText> Car Detail </CardHeaderText>
                <CarWrapper>
                    <CarImage src = {cart?.car?.imageUrl || CarIcon} defaultIcon = {cart?.car?.imageUrl ? false : true} />
                    <CarInfo>
                        {cart?.car?.brand || ""} - {cart?.car?.carName || ""} 
                        <br/>
                        <VariantName>{cart?.car?.variantName.toLowerCase()} ({cart?.car?.registrationNum})</VariantName>
                        <br/>
                    </CarInfo>
                </CarWrapper>
            </EZCard>
            <EZCard>
                <CardHeaderText> Order Detail </CardHeaderText>
                <MServices mServiceList = {cart} deleteItem = {props?.deleteItem} />

                <div style = {{display: "grid", gridTemplateColumns: "1fr 1fr"}}>
                    <div style = {{display: "grid", alignItems: "end"}}>
                        <label style= {{ marginBottom: "5px"}}>Select Date</label>
                        <label style= {{ marginBottom: "5px"}}>Select Time</label>
                    </div>
                    <DateTimeMPicker>
                        <MaterialUIPickers handleChange = {handleDateTimeChange}/>
                    </DateTimeMPicker>
                    
                </div>

                {
                    props?.cart?.cart?.appliedVoucher ? <AppliedCouponDiv>
                        <>
                            <MCouponImage src = {Coupon} />
                            <span>{props.cart.cart.appliedVoucher.code} </span>
                            </>
                            <span style= {{fontStyle:"italic",fontSize:"12px",paddingLeft: "10px"}}>applied successfully</span>
                            
                            <button onClick= {() => {props?.removeCoupon();
                                props?.fetchCart()
                            }} style={{float:"right"}}>Remove</button>
                    </AppliedCouponDiv>: <CouponCodeButton onClick = {() => setCouponCardVisibility(true)}>
                            <MCouponImage src = {Coupon} />
                            {`Apply Coupon >`}
                        </CouponCodeButton>
                }
                
            </EZCard>
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
                            <MApplyCouponButton onClick={() => {props?.applyCoupon(couponCode)
                                setCouponCardVisibility(false)
                            }}>Apply</MApplyCouponButton>
                        </CouponTextDiv>  
                        <MCouponPara>No Coupons Available</MCouponPara>
                    </MCouponCard> 
                </OverlayCard> : null
            }
            
            <EZCard>
                <CardHeaderText> Order Summary </CardHeaderText>
                {
                    !cart?.needsInspection ?
                    <>
                        <SubTotalDiv>
                            <h1 style = {{fontWeight:"normal"}}>Subtotal</h1>
                            <CartPriceMPara>&#8377; {cart?.totalAmount || 0}</CartPriceMPara>
                        </SubTotalDiv>

                        <DiscountDiv>
                            <h1 style = {{fontWeight:"normal"}}>Discount</h1>
                            <CartPriceMPara>&#8377; {cart?.discountAmount ==null? 0: cart?.discountAmount}</CartPriceMPara>
                        </DiscountDiv>
                        
                        <TotalDiv>
                            <h1 style = {{fontWeight:"normal"}}>Total</h1>
                            <CartPriceMPara>&#8377; {(cart?.totalAmount || 0) - (cart?.discountAmount || 0)}</CartPriceMPara>
                        </TotalDiv>
                    </> : 
                    <h1>We'll calculate the price and Call you.</h1>
                }
            </EZCard> 

            <CartButtonDiv>
                <MobileActionButton onClick = {() => navigateNext()}> Checkout </MobileActionButton>
            </CartButtonDiv>    
            

        </MCartPageWrapper>: <EmptyCart/>)
        }
    </MobilePageLayout>
}

const mapStateToProps = (state) => {
    return {
        cart: state?.cart
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCart: () => {dispatch(fetchCart())},
        deleteItem: (id="")=> {dispatch(deleteItem(id))},
        applyCoupon: (code="") => {dispatch(applyCoupon(code))},
        removeCoupon: () => {dispatch(removeCoupon())},
        navigateNext: (payload) => {dispatch(navigateNext(payload))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);