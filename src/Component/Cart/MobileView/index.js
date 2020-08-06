import React, { useState } from "react";
import MobilePageLayout from "../../../Layout/MobileView";
import { DateTimeMPicker, CouponCodeButton,
    OverlayCard, CouponTextField,CouponCardCloseButton, SubTotalDiv, 
    DiscountDiv, TotalDiv,DateTimeDiv, DateTimeGrid, CheckOutButton,
     MCartPageWrapper, DatePara, TimePara, MCouponCard, MCouponPara, 
     MApplyCouponButton, MCouponImage, CouponTextDiv, DateTimePickers
} from "./style";

import {
    CarInfo, CarImage,VariantName,
    CarWrapper, CartPriceMPara, ServiceMPara

} from "./style";
import MServices from "./MServices";
import MaterialUIPickers from "../../Common/DateTimePicker";
import Coupon from "../../../Assets/img/coupon.png";
import { ServiceCart, CouponCodes } from "../mockCartData";
import getPrice from "../util";
import CouponCancel from "../../../Assets/img/coupon_cancel.jpg"
import { connect } from "react-redux";
import { fetchCart, deleteItem } from "../Data/action";
import Skeleton from '@material-ui/lab/Skeleton';
import { EZCard } from "../../Common/MobileCard";
import CarIcon from "../../../Assets/img/carIcon.svg";


function Cart(props){

    const [couponCardVisibility, setCouponCardVisibility] = useState(false);
    const [couponCode, setCouponCode]  = useState("");
    const [mServiceList, setMServiceList] = useState(ServiceCart);
    const {cart : {cart = {}} = {}} = props;
    return <MobilePageLayout pageName = "Cart">
        {
            props?.cart?.inProgress ? 
            <>
                <Skeleton animation="wave" height={200} width="90%" style = {{margin : "0 auto"}} />
                <Skeleton animation="wave" height={250} width="90%" style = {{margin : "0 auto"}} />
                <Skeleton animation="wave" height={300} width="90%" style = {{margin : "0 auto"}} />
            </> :
            <MCartPageWrapper>
            <EZCard>
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
                <ServiceMPara>
                    Service Name
                </ServiceMPara>
                <CartPriceMPara>
                    Price
                </CartPriceMPara>
                <MServices
                    mServiceList = {cart}
                    deleteItem = {props?.deleteItem}
                />
            </EZCard>

            <EZCard>
                <DateTimeGrid>
                    <DateTimeDiv>
                        <DatePara>Select Date: </DatePara>
                        <TimePara>Select Time: </TimePara>
                    </DateTimeDiv>

                    <DateTimeMPicker><DateTimePickers/></DateTimeMPicker> 
                </DateTimeGrid>
            </EZCard>
        
            <EZCard>
                <CouponCodeButton onClick = {() => setCouponCardVisibility(true)}>
                    <MCouponImage src = {Coupon} />
                    {`Apply Coupon >`}
                </CouponCodeButton>
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
                            <MApplyCouponButton>Apply</MApplyCouponButton>
                        </CouponTextDiv>  
                        <MCouponPara>No Coupons Available</MCouponPara>
                    </MCouponCard> 
                </OverlayCard> : null
            }
            
            <EZCard>
                <SubTotalDiv>
                    <h1 style = {{fontWeight:"normal"}}>Subtotal:</h1>
                    <h1>Rs.{props?.cart?.cart?.totalAmount || 0}</h1>
                </SubTotalDiv>
                <DiscountDiv>
                    <h1 style = {{fontWeight:"normal"}}>Discount:</h1>
                    <h1>Rs {props?.cart?.cart?.discountAmount ==null? 0: props?.cart?.cart?.discountAmount}</h1>
                </DiscountDiv>
                
                <TotalDiv>
                    <h1 style = {{fontWeight:"normal"}}>Total:</h1>
                    <h1>Rs {(props?.cart?.cart?.totalAmount || 0) - (props?.cart?.cart?.discountAmount || 0)}</h1>
                </TotalDiv>
            </EZCard> 

            <CheckOutButton>Checkout</CheckOutButton>

        </MCartPageWrapper>
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
        deleteItem: (id="")=> {dispatch(deleteItem(id))}
        // fetchPackages: (filter = {}) => { dispatch(fetchPackages(filter))},
        // fetchCar: () => {dispatch(fetchCar())},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);