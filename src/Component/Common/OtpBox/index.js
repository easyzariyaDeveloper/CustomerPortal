import React, {useState} from "react";
import { OtpBoxWrapper, OtpText } from "./style";
import OtpInput from 'react-otp-input';

export default function OtpBox() {
  const [OTP, setOTP] = useState("");
    return (
      <OtpBoxWrapper>
        <OtpInput
          value ={OTP}
          onChange={setOTP}
          numInputs={4}
          inputStyle = {{marginLeft:"30px", fontSize: "20px", background: "#56CCF2", border: "none", borderBottom: "2px solid white", color: "white",width:"40px"}}
        />
      </OtpBoxWrapper>
    );
}
