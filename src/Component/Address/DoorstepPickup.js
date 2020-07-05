import React, { useEffect } from "react";
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import { DoorstepTextWrapper, RadioWrapper,SaveButton } from "./style";



const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: '15px auto',
            width: '100%',
        },
    },
}));

export default function DoorstepPickup(props) {
    const classes = useStyles();
    const [userAddress, setUserAddress] = React.useState({
        address: "",
        landmark: "",
        addressObj: {}
    });

    useEffect(()  => {
        if(props?.address?.enableInputComponent){
            setUserAddress({
                address: props?.address?.address?.address,
                addressObj: props?.address
            })
        }
    }, [props?.address?.enableInputComponent, props?.address?.address]);

    const [radio, setRadio] = React.useState('home');

    const onChange = (prop) => (event) => {
        setUserAddress({ ...userAddress, [prop]: event.target.value });
    };

    return <>
        {
            !props?.address?.enableInputComponent ?
            <div></div> : null
        }
        <DoorstepTextWrapper>
        <form className={classes.root} noValidate autoComplete="off">
            <TextField required size="small" id="standard-name" label="Address" value={userAddress.address} onChange={onChange('address')} />
            <TextField size="small" id="standard-name" label="Landmark" value={userAddress.landmark} onChange={onChange('landmark')} />
        </form>
        </DoorstepTextWrapper>
        <RadioWrapper>
            <FormControl>
                <RadioGroup row value={radio} onChange={(event)=> setRadio(event.target.value)}>
                    <FormControlLabel value="home" control={<Radio />} label="Home" />
                    <FormControlLabel value="office" control={<Radio />} label="Office" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
            </FormControl>
        </RadioWrapper>
        <SaveButton>Submit</SaveButton>
    </>
}