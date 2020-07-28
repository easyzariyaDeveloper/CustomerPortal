import React, { useState } from "react";
import MobilePageLayout from "../../../Layout/MobileView";
import { CartMCard, SelectedCar, ServicePriceHeader, DateTimeMPicker, CouponCodeButton,OverlayCard, CouponTextField,CouponCardCloseButton, SubTotalDiv, DiscountDiv, TotalDiv,DateTimeDiv, DateTimeGrid, CheckOutButton, MCartPageWrapper, DatePara, TimePara, MCouponCard, MCouponPara, MApplyCouponButton, MCouponImage, CouponTextDiv, DateTimePickers} from "./style";
import MServices from "./MServices";
import MaterialUIPickers from "../../Common/DateTimePicker";
import Coupon from "../../../Assets/img/coupon.png";
import { ServiceCart, CouponCodes } from "../mockCartData";
import getPrice from "../util";
import CouponCancel from "../../../Assets/img/coupon_cancel.jpg"
import { connect } from "react-redux";
import { fetchCart, deleteItem } from "../Data/action";
import Skeleton from '@material-ui/lab/Skeleton';



function Cart(props){

    const [couponCardVisibility, setCouponCardVisibility] = useState(false);
    const [couponCode, setCouponCode]  = useState("");
    const [mServiceList, setMServiceList] = useState(ServiceCart);

    const Car = props?.cart?.cart?.car?.carName

    // const deleteItem = (id) => {
    //     const mFilteredList = mServiceList.filter(serviceObj => serviceObj["id"] != id);
    //     setMServiceList(mFilteredList);
    // }



    return <MobilePageLayout >
        {
            props?.cart?.inProgress ? <Skeleton animation="wave" height={250} width="100%"  /> :
            <MCartPageWrapper>
            <CartMCard>
                <SelectedCar>{Car}</SelectedCar>
                <ServicePriceHeader>
                    <h1>Service</h1>
                    <h1>Quantity</h1>
                    <h1>Price</h1>
                </ServicePriceHeader>

                <MServices
                    mServiceList = {props?.cart?.cart}
                    deleteItem = {props?.deleteItem}
                />
            </CartMCard>

            <CartMCard>
                <DateTimeGrid>
                    <DateTimeDiv>
                        <DatePara>Select Date: </DatePara>
                        <TimePara>Select Time: </TimePara>
                    </DateTimeDiv>

                    <DateTimeMPicker><DateTimePickers/></DateTimeMPicker> 
                </DateTimeGrid>
            </CartMCard>
        
            <CartMCard>
                <CouponCodeButton onClick = {() => setCouponCardVisibility(true)}>
                    <MCouponImage src = {Coupon} />
                    {`Apply Coupon >`}
                </CouponCodeButton>
            </CartMCard>
            
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
            
            <CartMCard>
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
            </CartMCard> 

            <CheckOutButton>Checkout</CheckOutButton>

        </MCartPageWrapper>
        }
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
        fetchCart: () => {dispatch(fetchCart())},
        deleteItem: (id="")=> {dispatch(deleteItem(id))}
        // fetchPackages: (filter = {}) => { dispatch(fetchPackages(filter))},
        // fetchCar: () => {dispatch(fetchCar())},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);