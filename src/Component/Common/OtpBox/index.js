import React, { useState } from "react";
import { OtpWrapper, OtpText, ClearButton, OtpPara } from "./style";


export default function OtpBox () {
    const [otp, setOtp] = useState(new Array(4).fill(""));

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        //Focus next input
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    return (
        <OtpWrapper>        
                    {otp.map((data, index) => {
                        return (
                            <OtpText
                                className="otp-field"
                                type="text"
                                name="otp"
                                maxLength="1"
                                key={index}
                                value={data}
                                onChange={e => handleChange(e.target, index)}
                                onFocus={e => e.target.select()}
                            />
                        );
                    })}

                    <OtpPara>OTP Entered - {otp.join("")}</OtpPara>
                    
                    <ClearButton
                        className="btn btn-secondary mr-2"
                        onClick={e => setOtp([...otp.map(v => "")])}
                    >
                        Clear
                    </ClearButton>   
        </OtpWrapper>
    );
};

