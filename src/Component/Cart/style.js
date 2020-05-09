import styled from "styled-components";
import { border_color, base_spacing, header_bg_color } from "../../Assets/style-var";
import { InputForm } from "../Common/InputText/style";
import ActionButton from "../Common/ActionButton";
import { EZElevation } from "../Common/MobileCard";

export const CartPageWrapper = styled.div`
    background: #FFFFFF;
    width: 1068px;
    height: auto;
    margin: 30px auto;
    padding:30px;
    ${EZElevation}
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

export const SelectAddressLabel = styled.input`
    display: block;
    color: #2F7EE8;
    width: fit-content;
    margin: ${base_spacing * 2}px 0;
    padding: ${base_spacing / 2}px;
    clear: both;
    font-size: 20px;
    cursor: pointer;
    border:none;

    ::placeholder{
        color: #2F7EE8;
    }
`;

export const InputTextCart= styled(InputForm)`
  width: 220px;
  border: 1px solid ${border_color};
  margin: 0;
  height: 40px;
  padding: ${base_spacing / 2}px ${base_spacing}px;
  font-size: 18px;
`;

export const CouponSubmitButton = styled(ActionButton)`
    width: 15%;
    margin: 0;
    padding: 0;
    color: red;
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


export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    overflow: scroll;
`;





