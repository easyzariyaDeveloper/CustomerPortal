import React, {useState} from "react";
import { OtpBoxWrapper } from "./style";
import OtpInput from 'react-otp-input';

export default function OtpBox() {
  const [OTP, setOTP] = useState("");
    return (
      <OtpBoxWrapper>
        <OtpInput
          value ={OTP}
          onChange={setOTP}
          numInputs={5}
          inputStyle = {{marginLeft:"30px", fontSize: "20px", background: "white", border: "none", borderBottom: "2px solid white", color: "black",width:"40px"}}
        />
      </OtpBoxWrapper>
    );
}
