import styled from "styled-components";
import {ez_button_color} from "../../../Assets/style-var";

export const MCartPageWrapper = styled.div`
padding: 20px;
`;

export const CartMCard = styled.div`
    background:white;
    min-height:625px;
    border-radius: 15px;
    padding: 20px;
    position:relative
`;

export const SelectedCar = styled.h1`
    border-bottom: 1px solid #E3E3E3;
    text-align: center;
    padding-bottom: 15px;
    font-size: 18px;
    font-weight:300;
`;

export const ServicePriceHeader = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 5px 0px;
    font-size: 18px;
`;


export const MServiceWrapper = styled.div`
border-bottom: 1px solid #E3E3E3;
`;

export const ServiceMListItem = styled.div`
display: flex;
justify-content: space-between;
line-height: 40px;
font-weight:300;

`;

export const DeleteBinButton = styled.button`
    margin-left:8px;
    border: none;
    color: white;
    background: #1A91AB;
    border-radius:50%;
`;

export const ServiceMPara = styled.p`
    text-align: left;
  
`;

export const CartPriceMPara = styled.p`
    text-align: right;
   
`;
export const DateTimeGrid = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
row-gap: 30px;
margin: auto;
border-bottom: 1px solid #E3E3E3;
padding-bottom:10px;
`;

export const DateTimeDiv = styled.div``;

export const DateTimeMPicker = styled.div`
display: grid;
`;

export const CouponCodeButton = styled.button`
margin:10px 0;
width:150px;
height: 40px;
background: #F6F5F5;
border-radius: 5px;
border: none;
`;

export const OverlayCard = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
`;

export const CouponTextField = styled.input`
    border: none;
`;

export const CouponCardCloseButton = styled.button`
    float:right;
    border-radius: 50%;
    background:white;
`;

export const SubTotalDiv = styled.div`
border-top: 1px solid #E3E3E3;
display:flex;
justify-content: space-between;
padding-top: 15px;
    padding-bottom: 8px;
    font-weight:300;
`;

export const DiscountDiv = styled.div`
border-bottom: 1px solid #E3E3E3;
display:flex;
justify-content: space-between;
padding-bottom: 15px;
    padding-top: 8px;
    font-weight:300;
`;

export const TotalDiv = styled.div`
border-bottom: 1px solid #E3E3E3;
display:flex;
justify-content: space-between;
padding: 15px 0;
font-weight:300;

`;

export const CheckOutButton = styled.button`
    height: 40px;
    background:${ez_button_color};
    border-radius: 5px;
    border: none;
    color:white;
    position: absolute;
    bottom:10px;
    right:20px;
`;