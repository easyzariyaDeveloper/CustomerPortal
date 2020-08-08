import React, { useEffect, useRef } from "react";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { RadioWrapper,SaveButton, DoorstepWrapper } from "./style";
import clsx from 'clsx';
import { connect } from 'react-redux';
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import { EZCard } from "../Common/MobileCard";
import {useStyles} from "../../Assets/common-styled";
import { addAddress, updateCustomerAddresss } from "./Data/action";


const textAddressArray = [["Flat/House No.","house"],["Address","address"],["Landmark","landmark"]];

function DoorstepPickup(props) {
    const classes = useStyles();
    const [userAddress, setUserAddress] = React.useState({
        house: props?.address?.firstLine || "",
        address: props?.address?.secondLine || "",
        landmark: props?.address?.landmark || "",
        addressObj: props.address || {}
    });

    useEffect(() => {
        const {firstLine = "", secondLine = "", landmark = "", addressLabel = ""} = props.address || {};
        if(props?.address?.addressId){
            setUserAddress({
                house: firstLine,
                address: secondLine,
                landmark: landmark,
                addressObj: props.address
            });
            setRadio(addressLabel);
        }
    }, [props?.address?.addressId])

    const [radio, setRadio] = React.useState(props?.address?.addressLabel || "home");

    const checkoutReferrer = useRef(new URLSearchParams(window.location.search).get("referrer"));
    console.log(checkoutReferrer.current)

    function addAddress(){
        const addressObj = {
            "addressLabel": radio,
            "city": userAddress?.addressObj?.address?.city,
            "firstLine": userAddress?.house,
            "landmark": userAddress["landmark"] || "",
            "pinCode": parseInt(userAddress?.addressObj?.address?.postalCode),
            "secondLine": userAddress?.address,
            "state": userAddress?.addressObj?.address?.state,
            "latitude": userAddress?.addressObj?.address?.latitude,
            "longitude": userAddress?.addressObj?.address?.longitude
        }
        console.log(userAddress, radio, addressObj);
        props.addAddress(addressObj);
    }


    function updateAddress(){
        let {addressObj = {}, house = "", landmark = "", address = ""} = userAddress;
        
        if(addressObj.hasOwnProperty("address")){
            addressObj = addressObj?.address;
        }

        const updatedAddress = {
            "addressLabel": radio,
            "city": addressObj?.city,
            "firstLine": house,
            "landmark": landmark,
            "pinCode": parseInt(addressObj?.pinCode || addressObj?.postalCode),
            "secondLine": address,
            "state": addressObj?.state,
            "latitude": addressObj?.latitude,
            "longitude": addressObj?.longitude
        };
        console.log(updatedAddress);
        props.updateAddress(updatedAddress, props?.preSelectedAddressId);
    }

    useEffect(()  => {
        if(props?.address?.enableInputComponent){
            setUserAddress({
                address: props?.address?.address?.address,
                addressObj: props?.address
            })
        }
    }, [props?.address?.enableInputComponent, props?.address?.address]);


    const handleChange = (prop) => (event) => {
        setUserAddress({ ...userAddress, [prop]: event.target.value });
    };

    return <DoorstepWrapper>
        <EZCard>
            {textAddressArray.map(textField => {
                return (
                    <FormControl className={clsx(classes.textField)} variant="outlined" size="small" disabled = {!props?.address?.enableInputComponent}>
                      <InputLabel htmlFor="outlined-adornment-name">{textField[0]}</InputLabel>
                      <OutlinedInput
                        required
                        id="outlined-adornment-name"
                        label={textField[0]}
                        value={userAddress[textField[1]]}
                        onChange={handleChange(textField[1])}
                      />
                    </FormControl>
                  )
            })}
            <RadioWrapper>
            <FormControl>
                <RadioGroup row value={radio} onChange={(event)=> setRadio(event.target.value)}>
                    <FormControlLabel value="home" control={<Radio />} label="Home" />
                    <FormControlLabel value="office" control={<Radio />} label="Office" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
            </FormControl>
        </RadioWrapper>
        {
            props.preSelectedAddressId ? <SaveButton onClick = {updateAddress}>
                Update Address
            </SaveButton> : 
        <SaveButton onClick = {() => {
            addAddress;
            location.href = `${checkoutReferrer.current}`
        }}
            disabled = {!(props?.address?.enableInputComponent) && (userAddress?.house =="")}
        >Submit</SaveButton>
        }
        </EZCard>
        
    </DoorstepWrapper>
}

const mapStateToProps = (state) => {
    return {
        inProgress: state?.profile?.inProgress
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addAddress:(addressObj) => {dispatch(addAddress(addressObj))},
        updateAddress: (updatedAddress, addressId)=> {dispatch(updateCustomerAddresss(updatedAddress,addressId))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DoorstepPickup);

