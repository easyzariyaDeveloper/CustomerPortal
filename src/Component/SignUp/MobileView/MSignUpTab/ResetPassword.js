import React, { useState} from "react";
import { withRouter } from "react-router";
import { EZCard } from '../../../Common/MobileCard';
import TextField from "@material-ui/core/TextField";
import { ResetOverLay, ResetSubmitButton, ResetWrapper } from "./style";
import { isValidEmailOrPhone, MOBILE_NUMBER_LENGTH } from "../../utils";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
      "& .MuiTextField-root": {
        width: "300px",
        margin: "20px"
      }
    }, 
    textField: {
      width: "80%",
      size:"small"
    }
  }));


function ResetPassword(props){
    const classes = useStyles();
    const [userId, setUserId] = useState("");


    const handleChange = (key) => (event) => {
        let value =  event?.target?.value;
        if(key === 'userId' && !isValidEmailOrPhone(value)){
          value = value.length > MOBILE_NUMBER_LENGTH ? value.substring(0,MOBILE_NUMBER_LENGTH) : value;
        }
        setUserId(value);
      };

    return<ResetOverLay>
        <ResetWrapper>
            <EZCard>
                <p onClick = {() => props.setVisibility(false)}>X</p>
                <p>Reset Password</p>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField
                    required
                    id="outlined-required"
                    label="Email/Phone"
                    value= {userId}
                    onChange={handleChange('userId')}
                    variant="outlined"
                    margin="dense"
                />
                </form>
                <ResetSubmitButton onClick= {() => { props.setVisibility(false);
                  props.generateOtp(userId);
                  location.href = "/otp?referrer=${location.pathname}"
                }}
                >Submit</ResetSubmitButton>
            
            </EZCard>
        </ResetWrapper>
    </ResetOverLay>
}


export default withRouter(ResetPassword);