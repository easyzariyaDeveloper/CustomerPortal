import React, { useEffect } from "react";
import MobilePageLayout from "../../../Layout/MobileView";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchOrderById } from "../Data/action";
import Skeleton from '@material-ui/lab/Skeleton';
import { EZCard } from "../../Common/MobileCard";
import CarIcon from "../../../Assets/img/carIcon.svg";
import { CardHeaderText, CarWrapper, CarInfo, VariantName, CarImage, ServiceMPara, ServiceMListItem, SubTotalDiv, CartPriceMPara, DiscountDiv, TotalDiv } from "../../Cart/MobileView/style";
import moment from "moment";
import { AddressLabelWrapper, AddressIcon, AddressLabel, AddressLine } from "../../Profile/MobileView/style";

function OrderDetails(props){
    const {orderDetails = {}} = props?.orderInfo;
    console.log(orderDetails)

    useEffect(() => {
        props?.fetchOrderById(props?.match?.params?.orderId);
    }, []);


    return <MobilePageLayout pageName = "Order Details" backButton = {true}>
        {
               props?.orderInfo?.inProgress ? 
               <>
                   <Skeleton animation="wave" height={200} width="90%" style = {{margin : "0 auto"}} />
                   <Skeleton animation="wave" height={250} width="90%" style = {{margin : "0 auto"}} />
                   <Skeleton animation="wave" height={300} width="90%" style = {{margin : "0 auto"}} />
               </>: <div style = {{padding: "5px"}}>
                   <EZCard>
                        <CarInfo> Order #: { orderDetails?.orderCode || props?.match?.params?.orderId} </CarInfo>
                   </EZCard>

                    <EZCard>
                        <CardHeaderText> Car Detail </CardHeaderText>
                            <CarWrapper>
                                <CarImage src = {orderDetails?.car?.imageUrl || CarIcon} defaultIcon = {orderDetails?.car?.imageUrl ? false : true} />
                                <CarInfo>
                                    {orderDetails?.car?.brand || ""} - {orderDetails?.car?.carName || ""} 
                                    <br/>
                                    <VariantName>{orderDetails?.car?.variantName.toLowerCase()} ({orderDetails?.car?.registrationNum})</VariantName>
                                    <br/>
                                </CarInfo>
                            </CarWrapper>
                   </EZCard>


                   <EZCard>
                   <CardHeaderText> Shipping Address </CardHeaderText>
                        <AddressLabelWrapper>
                        <AddressIcon className = {`icon-${orderDetails?.shippingAddress?.addressLabel}`}/>
                        <AddressLabel
                        children = {orderDetails?.shippingAddress?.addressLabel === "home" ? "Home" : (orderDetails?.shippingAddress?.addressLabel === "office" ? "Office" : "Other")}
                        />
                    </AddressLabelWrapper>
                    <AddressLine>{orderDetails?.shippingAddress?.firstLine}, {orderDetails?.shippingAddress?.secondLine}</AddressLine>
                    {
                        orderDetails?.shippingAddress?.landmark && <>
                        <p style = {{display:"inline-block", fontWeight: "300"}}>Landmark : </p> 
                        <AddressLine>&nbsp; {orderDetails?.shippingAddress?.landmark}</AddressLine>
                        </>
                    }
                   </EZCard>

                   <EZCard>
                        <CardHeaderText> Order Detail</CardHeaderText>
                            {orderDetails?.items?.map(item => {
                                return <ServiceMListItem>
                                    <ServiceMPara>{item.name}</ServiceMPara>
                                    <ServiceMPara>&#8377;{item.price}</ServiceMPara>
                                </ServiceMListItem>
                            })}
                        <ServiceMPara>Order Placed On : {moment(orderDetails?.orderPlacedTime).format('MMMM Do YYYY')}</ServiceMPara>
                   </EZCard>

                   <EZCard>
                        <CardHeaderText> Order Summary </CardHeaderText>
                        <SubTotalDiv>
                            <h1 style = {{fontWeight:"normal"}}>Subtotal</h1>
                            <CartPriceMPara>&#8377; {orderDetails?.totalAmount || 0}</CartPriceMPara>
                        </SubTotalDiv>

                        <DiscountDiv>
                            <h1 style = {{fontWeight:"normal"}}>Discount</h1>
                            <CartPriceMPara>&#8377; {orderDetails?.discountAmount ==null? 0: orderDetails?.discountAmount}</CartPriceMPara>
                        </DiscountDiv>
                        
                        <TotalDiv>
                            <h1 style = {{fontWeight:"normal"}}>Total</h1>
                            <CartPriceMPara>&#8377; {orderDetails?.payableAmount}</CartPriceMPara>
                        </TotalDiv>
                   </EZCard>
               </div>
        }
    </MobilePageLayout>
}

const mapStateToProps = (state) => {
    return {
        orderInfo: state?.orderById
    }
} 

const mapDispatchToProps = (dispatch) =>{
    return {
        fetchOrderById: (orderId = "") => {dispatch(fetchOrderById(orderId))}
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OrderDetails));