import React from "react";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { connect } from "react-redux";
import { CheckoutRadioWrapper, CheckoutCard, CheckoutButton, CheckoutButtonDiv } from "./style";
import { setShippingAddress } from "./Data/action";
import { AddressLabelWrapper, AddressIcon, AddressLabel, AddressLine, ProfileCard } from "../../Profile/MobileView/style";



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
      <FormControl style = {{margin: "5px",paddingBottom: "50px"}}>
        <RadioGroup value={address} onChange={(event) => {setAddress(event.target.value)}}>
            {
                props?.profile?.addressList.map((address) => {
                    return <CheckoutRadioWrapper>
                        <FormControlLabel value={address.addressId} control={<Radio />} style = {{marginRight: "0px"}}/> 
                        {/* <CheckoutCard>{address.secondLine}</CheckoutCard> */}
                        <ProfileCard style = {{margin: "0px"}} >
                        <AddressLine>{address.firstLine}, {address.secondLine}</AddressLine>
                    {
                        address.landmark && <>
                        <p style = {{display:"inline-block", fontWeight: "300"}}>Landmark : </p> 
                        <AddressLine>&nbsp; {address.landmark}</AddressLine>
                        </>
                    }
                    </ProfileCard>
                    </CheckoutRadioWrapper>
                })
            }
        </RadioGroup>
      </FormControl>
    
       <CheckoutButtonDiv>
            <CheckoutButton onClick = {() => {
                location.href = `/address/add-address?referrer=${location.pathname}` 
            }}>Add Address</CheckoutButton>
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
