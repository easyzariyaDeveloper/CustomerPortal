import React from "react";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { connect } from "react-redux";
import { CheckoutRadioWrapper, CheckoutCard, CheckoutButton, CheckoutButtonDiv } from "./style";
import { setShippingAddress } from "./Data/action";



function DoorstepAddress(props) {
    const [address, setAddress] = React.useState('');
    const selectedAddress = props?.profile?.addressList.find(addr => addr.addressId == address);

    function setShippingAddress(addr){
        if(addr) {
            props?.setShippingAddress(addr);
        }
    }
  
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
            <CheckoutButton onClick={() => setShippingAddress(selectedAddress)}>Next</CheckoutButton>
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
        setShippingAddress: (address) => {dispatch(setShippingAddress(address))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DoorstepAddress);
