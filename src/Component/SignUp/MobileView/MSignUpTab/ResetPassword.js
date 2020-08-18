import React, { useState} from "react";
import { withRouter } from "react-router";
import { EZCard } from '../../../Common/MobileCard';
import TextField from "@material-ui/core/TextField";
import { ResetOverLay, ResetSubmitButton, ResetWrapper, ResetPasswordLabel, ResendOtpLabelDiv, ResendOtpButton } from "./style";
import { isValidEmailOrPhone, MOBILE_NUMBER_LENGTH } from "../../utils";
import { makeStyles } from "@material-ui/core/styles";
import { resetPasswordCreateOtp, verifyResetPasswordOtp } from "../../Data/action";
import { connect } from "react-redux";
import EditIcon from '@material-ui/icons/Edit';
import { TextareaAutosize } from "@material-ui/core";


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
    const [otpCardVisibility, setOtpCardVisibility] = useState(true);
    const [otp, setOtp] = useState("");


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
              <p onClick = {() => props.setVisibility(false)} style= {{float: "right"}}>X</p>
              {
                otpCardVisibility ? <> 
                <ResetPasswordLabel>Reset Password</ResetPasswordLabel>
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

                <ResetSubmitButton onClick= {() => {sessionStorage.setItem("otpMobileNumber", userId);
                  setOtpCardVisibility(false);
                  // props?.resetPasswordOtp(userId);
                }}
                >Submit</ResetSubmitButton>

                </> : <>
                <EditIcon onClick = {() =>setOtpCardVisibility(true)} fontSize = 'small' style = {{verticalAlign: 'middle', cursor: 'pointer'}}/> Edit UserId
                <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    required
                    id="outlined-required"
                    label="Email/Phone"
                    value= {userId}
                    variant="outlined"
                    margin="dense"
                    disabled
                />

                <TextField
                    type="number"
                    required
                    id="outlined-required"
                    label="OTP"
                    value= {otp}
                    onChange={(event)=> setOtp(event.target.value.slice(0,6))}
                    variant="outlined"
                    margin="dense"
                  />
                  </form>
                  <ResendOtpLabelDiv>
                    <p>Didn't receive OTP ?</p>
                    <ResendOtpButton onClick = {() => props?.resetPasswordOtp(userId)}> Resend OTP</ResendOtpButton>
                  </ResendOtpLabelDiv>
                  <ResetSubmitButton onClick= {() => {
                    props.setVisibility(false);
                    props?.verifyResetPasswordOtp(userId,otp)
                    }}>Verify OTP</ResetSubmitButton>
                </>
              }
                
            
            </EZCard>
        </ResetWrapper>
    </ResetOverLay>
}



const mapDispatchToProps = (dispatch) => {
  return {
    resetPasswordOtp: (userId="") => {dispatch(resetPasswordCreateOtp(userId))},
    verifyResetPasswordOtp: (userId,otp) => {dispatch(verifyResetPasswordOtp(userId,otp))}
  }
}


export default withRouter(connect(null, mapDispatchToProps)(ResetPassword));