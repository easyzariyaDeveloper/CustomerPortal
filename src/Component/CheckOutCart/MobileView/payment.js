import React, { useState } from "react";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import MobilePageLayout from "../../../Layout/MobileView";
import {connect} from "react-redux";
import { createOrder } from "./Data/action";
import { CheckoutCard, CheckoutButton, PaymentButtonDiv, ThankYouCard } from "./style";
import { Overlay, MobileActionButton } from "../../../Assets/common-styled";
import { EZCard } from "../../Common/MobileCard";


function InitiatePayment(props) {
    const [payment, setPayment] = React.useState('');
    const [popupToggle,setPopupToggle] = useState(false);
  
    return (
        <MobilePageLayout pageName = "Payment">
            <div style= {{padding:"20px"}}>
                <CheckoutCard>
                    <FormControl style = {{margin: "15px"}}>
                        <RadioGroup value={payment} onChange={(event) => {setPayment(event.target.value)}}>
                            <FormControlLabel value="WAITING_FOR_COD" control={<Radio />} label="Pay after Service" />
                            <FormControlLabel value="WAITING_FOR_PAYMENT_GATEWAY" control={<Radio />} label="Online Payment" />
                        </RadioGroup>
                    </FormControl>
                </CheckoutCard>
            </div>

            <PaymentButtonDiv>
                <CheckoutButton 
                    onClick={() => {
                        if(payment){
                            props.createOrder(payment);
                            setPopupToggle(true);
                        }
                    }}>Proceed For Payment</CheckoutButton>
            </PaymentButtonDiv>

            {
                popupToggle ? <Overlay>
                    <ThankYouCard>
                        <p style ={{padding: "10px"}}>Thank You For Placing Order with Us...!!!</p>
                        <MobileActionButton style = {{display:"block", margin: "0 auto",width: "50%"}} onClick = {() => location.href = '/' }>Home</MobileActionButton>
                    </ThankYouCard>
            </Overlay> : null
            }
      </MobilePageLayout>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        createOrder: (type = "") => {dispatch(createOrder(type))}
    }
}

export default connect(null, mapDispatchToProps)(InitiatePayment);