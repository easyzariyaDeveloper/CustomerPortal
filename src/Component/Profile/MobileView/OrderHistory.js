import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { downloadJobCard, fetchOrderHistory } from "../Data/action";
import { EZCard } from "../../Common/MobileCard";
import { LabelHeading, OrderHistoryHeaderDiv, OrderDetailsButton, OrderDownloadButton } from "./style";
import { getFormattedString } from "../../../util";
import moment from "moment";
import { MobileActionButton } from "../../../Assets/common-styled";

function OrderHistory(props){

    useEffect(()=>{
        props?.fetchOrderHistory();
    },[]);

    //'MMMM Do YYYY, h:mm:ss a'
    const {orderHistory} = props?.orderHistory
    return <>
        {
            orderHistory?.map((order) => {
                const href = ["ORDER_COMPLETED"].includes(order?.status) ?
                    `${window.location.origin}/api/cart/${order?.orderId}/invoice/download` : 
                    `${window.location.origin}/api/job-card/${order?.orderId}/download`;

                return <EZCard>
                        <OrderHistoryHeaderDiv>
                            <label>{moment(order?.orderPlacedTime).format('MMMM Do YYYY')}</label>
                            <label>&#8377;{order?.totalAmount}</label>
                        </OrderHistoryHeaderDiv>

                    <>
                        <LabelHeading style = {{"text-transform": "initial", "letter-spacing": "1px"}}> <label>Order #:</label> {order?.orderCode || order?.orderId} </LabelHeading>
                        <LabelHeading> <label>Car:</label> {order?.car?.carName}</LabelHeading>
                        <LabelHeading> <label>Reg. Number:</label> {order?.car?.registrationNum} </LabelHeading>
                        <LabelHeading> <label>Payment Status: </label> {getFormattedString(order?.paymentStatus)} </LabelHeading>
                        <LabelHeading> <label>Status: </label> {getFormattedString(order?.status)} </LabelHeading>

                        <div style = {{display: "flex"}}>
                            <OrderDetailsButton onClick = {() => location.href = `/order/${order?.orderId}/detail`}>Order Details</OrderDetailsButton>
                            {/* <OrderDownloadButton onClick = {() => props?.downloadJobCard(order?.orderId)}>Download</OrderDownloadButton> */}

                            <OrderDownloadButton href = {href} download>Download</OrderDownloadButton>
                        </div>
                    </>
                </EZCard>
            })
        }
    </>
}


const mapStateToProps = (state) => {
    return {
      orderHistory: state.orderHistory
    }
} 

const mapDispatchToProps = (dispatch) =>{
    return {
        fetchOrderHistory: () => {dispatch(fetchOrderHistory())},
        downloadJobCard: (orderId) => {dispatch(downloadJobCard(orderId))}
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(OrderHistory);