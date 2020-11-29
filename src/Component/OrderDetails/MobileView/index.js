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
    console.log(orderDetails?.cart)

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
                        <CarInfo> Order #: { orderDetails?.cart?.orderCode || props?.match?.params?.orderId} </CarInfo>
                   </EZCard>

                    <EZCard>
                        <CardHeaderText> Car Detail </CardHeaderText>
                            <CarWrapper>
                                <CarImage src = {orderDetails?.cart?.car?.imageUrl || CarIcon} defaultIcon = {orderDetails?.cart?.car?.imageUrl ? false : true} />
                                <CarInfo>
                                    {orderDetails?.cart?.car?.brand || ""} - {orderDetails?.cart?.car?.carName || ""} 
                                    <br/>
                                    <VariantName>{orderDetails?.cart?.car?.variantName.toLowerCase()} ({orderDetails?.cart?.car?.registrationNum})</VariantName>
                                    <br/>
                                </CarInfo>
                            </CarWrapper>
                   </EZCard>


                   <EZCard>
                   <CardHeaderText> Shipping Address </CardHeaderText>
                        <AddressLabelWrapper>
                        <AddressIcon className = {`icon-${orderDetails?.cart?.shippingAddress?.addressLabel}`}/>
                        <AddressLabel
                        children = {orderDetails?.shippingAddress?.addressLabel === "home" ? "Home" : (orderDetails?.shippingAddress?.addressLabel === "office" ? "Office" : "Other")}
                        />
                    </AddressLabelWrapper>
                    <AddressLine>{orderDetails?.cart?.shippingAddress?.firstLine}, {orderDetails?.cart?.shippingAddress?.secondLine}</AddressLine>
                    {
                        orderDetails?.cart?.shippingAddress?.landmark && <>
                        <p style = {{display:"inline-block", fontWeight: "300"}}>Landmark : </p> 
                        <AddressLine>&nbsp; {orderDetails?.cart?.shippingAddress?.landmark}</AddressLine>
                        </>
                    }
                   </EZCard>

                   <EZCard>
                        <CardHeaderText> Order Detail</CardHeaderText>
                            {orderDetails?.cart?.items?.map(item => {
                                return <ServiceMListItem>
                                    <ServiceMPara>{item.name}</ServiceMPara>
                                    <ServiceMPara>&#8377;{item.price}</ServiceMPara>
                                </ServiceMListItem>
                            })}
                        <ServiceMPara>Order Placed On : {moment(orderDetails?.cart?.orderPlacedTime).format('MMMM Do YYYY')}</ServiceMPara>
                   </EZCard>

                   <EZCard>
                        <CardHeaderText> Order Summary </CardHeaderText>
                        {
                            ! orderDetails?.cart?.needsInspection ? <> <SubTotalDiv>
                                <h1 style = {{fontWeight:"normal"}}>Subtotal</h1>
                                <CartPriceMPara>&#8377; {orderDetails?.cart?.totalAmount || 0}</CartPriceMPara>
                            </SubTotalDiv>

                            <DiscountDiv>
                                <h1 style = {{fontWeight:"normal"}}>Discount</h1>
                                <CartPriceMPara>&#8377; {orderDetails?.cart?.discountAmount ==null? 0: orderDetails?.cart?.discountAmount}</CartPriceMPara>
                            </DiscountDiv>
                            
                            <TotalDiv>
                                <h1 style = {{fontWeight:"normal"}}>Total</h1>
                                <CartPriceMPara>&#8377; {orderDetails?.cart?.payableAmount}</CartPriceMPara>
                            </TotalDiv> </>: <h1>We'll calculate the price and Call you.</h1>
                        }
                        
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