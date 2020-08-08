import React from "react";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { connect } from "react-redux";
import { CheckoutRadioWrapper, CheckoutCard, CheckoutButton, CheckoutButtonDiv } from "./style";



function DoorstepAddress(props) {
    const [address, setAddress] = React.useState('');

  console.log(address)
  
    return (
        <div>
      <FormControl style = {{margin: "15px"}}>
        <RadioGroup value={address} onChange={(event) => {setAddress(event.target.value)}}>
            {
                props?.profile?.addressList.map((address) => {
                    return <CheckoutRadioWrapper>
                    <FormControlLabel value={address.addressId} control={<Radio />}/> 
                    <CheckoutCard>{address.secondLine}</CheckoutCard>
                    </CheckoutRadioWrapper>
                })
            }
        </RadioGroup>
      </FormControl>

      <CheckoutButton onClick = {() => {
          location.href = `/address/add-address?referrer=${location.pathname}` 
      }}>Add Address</CheckoutButton>

        <CheckoutButtonDiv>
            <CheckoutButton onClick={()=> location.href=`/cart/checkout`}>Next</CheckoutButton>
        </CheckoutButtonDiv>
    </div>
    );
  }


const mapStateToProps = (state) => {
    return {
        profile: state.profile
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        //fetchCart: () => {dispatch(fetchCart())},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DoorstepAddress);
