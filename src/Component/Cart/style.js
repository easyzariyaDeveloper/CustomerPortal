import styled from "styled-components";
import { border_color, base_spacing } from "../../Assets/style-var";
import { InputForm } from "../Common/InputText/style";
import { Login_SignUp_Button } from "../../Assets/common-styled";
import DateTimePicker from "react-datepicker";

export const CartPageWrapper = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2), 0px 2px 4px rgba(38, 38, 38, 0.24);
    width: 1068px;
    height: auto;
    margin: 30px auto;
    padding:30px;
`;

export const CartHeader = styled.h1`
    display: flex;
    align-items: center;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    border-bottom: 2px solid #959595;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    padding-bottom: 5px;
`;

export const ServiceCartWrapper = styled.div``;

export const ServiceLabel = styled.div`
    display: flex;
    justify-content: space-between;
    color: #959595;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    padding-top: 10px;
`;

export const ServiceListItem = styled.div`
    position: relative;
    padding-top :20px;
    padding-left: 40px;
`;

export const CartServicePara = styled.p`
    display:inline-block;
    color: #959595;
`;

export const CartPricePara = styled.p`
    float: right;
    display:inline-block;
    color: #959595;
`;


export const DeleteButton = styled.button`
    border-radius: 50%;
    background-color: white;
    border: 1px solid #E30B0B;
    display: inline-block;
    flex-grow: 1;
    margin-right : 10px;
    position: absolute;
    left:0;
    text-align:center;
    top: 18px;
    cursor: pointer;
`;

export const SelectAddressLabel = styled.p`
    color: #959595;
    width: 200px;
    border: 1px solid ${border_color};
    margin: ${base_spacing * 2}px 0;
    padding: ${base_spacing / 2}px;
    clear: both;
`;

export const InputTextCart= styled(InputForm)`
  width: 220px;
  border: 1px solid ${border_color};
  margin: 0;
  height: 40px;
  padding: ${base_spacing / 2}px ${base_spacing}px;
  font-size: 18px;
`;

export const CouponSubmitButton = styled(Login_SignUp_Button)`
    width: 100px;
`;

export const SubTotal = styled(CartServicePara)`
    text-transform: capitalize;
`  ;

export const TotalPrice = styled(CartPricePara)``;

export const DiscountLabel = styled(CartServicePara)`
    text-transform: capitalize;
`;

export const DiscountAmount =  styled(CartPricePara)``;

export const CalculateDiv = styled.div`
    border-top : 1px solid ${border_color};
    border-bottom : 1px solid ${border_color};
    padding: 20px 0;
    
`;

export const CouponWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`

export const PayableDiv = styled(CartServicePara)`
    color: #4B4B4B;
    font-weight : bold;   
    font-size: 18px; 
`;

export const PayableAmt =styled(CartPricePara)`
    color: #4B4B4B;
    font-weight : bold;   
    font-size: 18px;
`;

export const DatePicker = styled(DateTimePicker)`
margin-top: 30px;
border: none;
height: 40px;
border-bottom: 1px solid ${border_color};
font-size: 20px;
`;

export const TimePicker = styled(DateTimePicker)``;

export const DatePickerWrapper = styled.div`
    position: relative;
    height: 40px;
    width: 220px;
    float: left;
    display: inline-block;
    margin: ${base_spacing * 2}px ${base_spacing * 4}px ${base_spacing * 2}px 0;
    border-bottom: 1px solid ${border_color};

    span {
        position: absolute;
        right:0;
        top: 0;
    }

    label, p{
        width: 100%;
        height: 100%;
        display: inline-block; 
        line-height: 40px;
        color: #959595;
    }

    .react-datepicker__input-container{
        width: 100%;
        height: 100%;
    }

    input{
        margin:0;
        outline: transparent;
        width: 100%;
        height: 100%;
    }

    .react-datepicker-wrapper{
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        opacity:0;
    }
`;

export const TimeWrapper = styled(DatePickerWrapper)`
    width: 120px;
`;

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
`;





