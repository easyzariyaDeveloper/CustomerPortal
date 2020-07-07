import React, { useEffect } from "react";
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
import { addAddress } from "./Data/action";
const textAddressArray = [["Flat/House No.","house"],["Address","address"],["Landmark","landmark"]];

function DoorstepPickup(props) {
    const classes = useStyles();
    const [userAddress, setUserAddress] = React.useState({
        house:"",
        address: "",
        landmark: "",
        addressObj: {}
    });

    function addAddress(){
        const addressObj = {
            "addressLabel": radio,
            "city": userAddress?.addressObj?.address?.city,
            "firstLine": userAddress?.house,
            "landmark": userAddress["landmark"] || "",
            "pinCode": parseInt(userAddress?.addressObj?.address?.postalCode),
            "secondLine": userAddress?.address,
            "state": userAddress?.addressObj?.address?.state
        }
        console.log(userAddress, radio, addressObj);
        props.addAddress(addressObj);
    }

    useEffect(()  => {
        if(props?.address?.enableInputComponent){
            setUserAddress({
                address: props?.address?.address?.address,
                addressObj: props?.address
            })
        }
    }, [props?.address?.enableInputComponent, props?.address?.address]);

    const [radio, setRadio] = React.useState('home');

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
        <SaveButton onClick = {addAddress}>Submit</SaveButton>
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
        addAddress:(addressObj) => {dispatch(addAddress(addressObj))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DoorstepPickup);