import React, { useState } from "react";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import MobilePageLayout from "../../../Layout/MobileView";
import {connect} from "react-redux";
import { createOrder } from "./Data/action";
import { CheckoutCard, PaymentButtonDiv, ThankYouCard, CreateOrderButton, SpanDetails } from "./style";
import { Overlay, MobileActionButton } from "../../../Assets/common-styled";
import { EZCard } from "../../Common/MobileCard";
import moment from "moment";
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import thank from "../../../Assets/img/thank.svg"

function InitiatePayment(props) {
    const [payment, setPayment] = useState('');
    const [popupToggle,setPopupToggle] = useState(true);
    const [radioAlert, setRadioAlert] = useState(false);

    console.log(props?.orderInfo?.inProgress)
  
    return (
        <MobilePageLayout pageName = "Payment">
            <div style= {{padding:"20px"}}>
                <CheckoutCard>
                    <FormControl style = {{margin: "15px"}}>
                        <RadioGroup value={payment} onChange={(event) => {setPayment(event.target.value)}}>
                            <FormControlLabel value="WAITING_FOR_COD" control={<Radio />} label="Pay after Service" />
                            <FormControlLabel value="WAITING_FOR_PAYMENT_GATEWAY" control={<Radio />} label="Online Payment" disabled/>
                        </RadioGroup>
                    </FormControl>
                </CheckoutCard>
            </div>

            <PaymentButtonDiv>
                <CreateOrderButton 
                    onClick={() => {
                        if(payment){
                            props.createOrder(payment);
                            setPopupToggle(true);
                        } else setRadioAlert(true)
                    }}>Place Your Order</CreateOrderButton>
                    <Snackbar open={radioAlert} autoHideDuration={6000} onClose={()=> setRadioAlert(false)} anchorOrigin={{vertical: 'top', horizontal: 'center' }}>
                        <Alert onClose={()=> setRadioAlert(false)} severity="warning">
                            Please check Radio button!
                        </Alert>
                    </Snackbar>
            </PaymentButtonDiv>
           
            {
                popupToggle && props?.orderInfo?.orderState?.orderId ? <Overlay>
                    <ThankYouCard>
                        <img src = {thank} style= {{display:"block",margin: "auto"}}/>
                        <h1 style= {{fontSize:"20px",padding: "15px", textAlign: "center"}}>Thank You</h1>
                        <p style ={{padding: "10px"}}>Your order has been successfully placed. Your Order Id is <SpanDetails>
                            ({props?.orderInfo?.orderState?.orderCode}). </SpanDetails> Order Scheduled For <SpanDetails>
                                {moment(props?.orderInfo?.orderState?.serviceDate).format('MMMM Do YYYY')}</SpanDetails>.</p>
                        <MobileActionButton style = {{display:"block", margin: "10px auto",width: "50%"}} onClick = {() => location.href = '/' }>Home</MobileActionButton>
                    </ThankYouCard>
            </Overlay> :null
            }
      </MobilePageLayout>
    )
}

const mapStateToProps = (state) => {
    return {
        orderInfo: state?.createOrder
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        createOrder: (type = "") => {dispatch(createOrder(type))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InitiatePayment);