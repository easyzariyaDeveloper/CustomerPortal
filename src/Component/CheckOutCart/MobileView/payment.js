import React from "react";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import MobilePageLayout from "../../../Layout/MobileView";
import {connect} from "react-redux";
import { createOrder } from "./Data/action";
import { CheckoutCard, CheckoutButton, PaymentButtonDiv } from "./style";


function InitiatePayment(props) {
    const [payment, setPayment] = React.useState('');
    console.log(payment)
  
    return (
        <MobilePageLayout pageName = "Payment">
            <div style= {{padding:"20px"}}>
                <CheckoutCard>
                    <FormControl style = {{margin: "15px"}}>
                        <RadioGroup value={payment} onChange={(event) => {setPayment(event.target.value)}}>
                            <FormControlLabel value="WAITING_FOR_COD" control={<Radio />} label="COD" />
                            <FormControlLabel value="WAITING_FOR_PAYMENT_GATEWAY" control={<Radio />} label="Online Payment" />
                        </RadioGroup>
                    </FormControl>
                </CheckoutCard>
            </div>

            <PaymentButtonDiv>
                <CheckoutButton onClick={() => {props.createOrder(payment)}}>Proceed For Payment</CheckoutButton>
            </PaymentButtonDiv>
      </MobilePageLayout>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        createOrder: (type = "") => {dispatch(createOrder(type))}
    }
}

export default connect(null, mapDispatchToProps)(InitiatePayment);