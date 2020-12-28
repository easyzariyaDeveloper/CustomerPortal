import styled from "styled-components";
import {base_spacing, ez_button_color} from "../../../Assets/style-var";
import { MobileActionButton, alignCenter } from "../../../Assets/common-styled";
import {withStyles } from '@material-ui/core/styles';
// import MaterialUIPickers from "../../Common/DateTimePicker";

const secondaryText = "color: rgba(0,0,0,0.54);";

export const MCartPageWrapper = styled.div`
    padding-top: ${base_spacing*1.5}px;
`;

export const CarImage = styled.img`
    width: 50px;
    border-radius: 50%;
    background: ${(props) => props["defaultIcon"] ? "#1DA0BC" : "#FFF" };
    padding: 10px;
    cursor: pointer;
    box-shadow: 0 1px 6px 0 rgba(0,0,0,0.06), 0 2px 32px 0 rgba(0,0,0,0.16);
    position: absolute;
    top: 50%;
    left: ${base_spacing}px;
    transform: translate3d(0, -50%, 0);
`;

export const CarInfo = styled.p`
    ${secondaryText}
`;

export const CarWrapper = styled.div`
    position: relative;
    padding: ${base_spacing}px;
    padding-left: 70px;
    ${alignCenter}
`;

export const VariantName = styled.span`
    text-transform: capitalize;
    display: inline-block;
    margin-top: ${base_spacing}px;
`;


export const MServiceWrapper = styled.div`

`;

export const ServiceMListItem = styled.div`
    display: flex;
    justify-content: space-between;
    margin: ${base_spacing * 1.5}px 0;
    font-weight:300;

`;

export const DeleteBinButton = styled.img`
    height: ${base_spacing*1.5}px;
    margin-left: ${base_spacing*0.7}px;
    vertical-align: middle;
`;

export const CardHeaderText = styled.h2`
    margin-bottom: ${base_spacing}px;
    border-bottom: 1px dashed rgba(0,0,0,0.54);
    padding-bottom: ${base_spacing}px;
    font-style: italic;
    font-weight: 500;
    font-size: 16px;
`;


export const ServiceMPara = styled.p`
    font-weight: 500;
`;

export const CartPriceMPara = styled.p`
    font-size: 14px;
    font-weight: 500;
`;

export const DateTimeMPicker = styled.div`
    display: grid;
    justify-content: center;
`;

export const CouponCodeButton = styled.button`
    width:150px;
    height: ${base_spacing*4}px;
    background: #F6F5F5;
    border-radius: ${base_spacing/2}px;
    border: none;
    margin: ${base_spacing*3}px 0 ${base_spacing}px 0;
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
    width:80%;
    font-size: ${base_spacing*1.4}px;
    height: ${base_spacing*4}px;
    padding: ${base_spacing/2}px;
    outline:none;
`;

export const CouponCardCloseButton = styled.img`
    float:right;
    border-radius: 50%;
    background:white;
`;

export const SubTotalDiv = styled.div`
    display:flex;
    justify-content: space-between;
    padding-top: ${base_spacing*1.5}px;
    padding-bottom: 8px;
    font-weight:300;
`;

export const DiscountDiv = styled.div`
    border-bottom: 1px solid #E3E3E3;
    display:flex;
    justify-content: space-between;
    padding-bottom: ${base_spacing*1.5}px;
    padding-top: 8px;
    font-weight:300;
`;

export const TotalDiv = styled.div`
    display:flex;
    justify-content: space-between;
    padding: ${base_spacing*1.5}px 0;
    font-weight:300;

`;

export const MCouponImage = styled.img`
    padding-right: ${base_spacing}px;
    vertical-align: middle;
`;


export const MCouponCard = styled.div`
    min-width: 70%;
    min-height: ${base_spacing*20}px;
    padding: ${base_spacing*2}px;
    background: white;
    position: fixed;
    top: 40%;
    left: 12%;
    right: 12%;
    border-radius: ${base_spacing*1.5}px;
    
`;

export const CouponTextDiv = styled.div`
    border:1px solid #BDBDBD;
    border-radius: ${base_spacing/2}px;
`;

export const MCouponPara = styled.p`
    text-align: center; 
    padding: ${base_spacing*1.5}px;

`;

export const MApplyCouponButton = styled.button`
    border:none;
    background: white; 
    cursor:pointer;
    outline:none;
`;

export const EmptyCardWrapper = styled.div`
    margin: 0 auto;
    width: 80%;
    position: fixed;
    top: 40%;
    left: 10%;
`;

export const CartButtonDiv = styled.div`
    padding: ${base_spacing*2}px;
`;

export const AppliedCouponDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 15px 10px;
    background: antiquewhite;
    margin: 10px;
`;

// export const DateTimePickers = withStyles(theme => ({
//     root: {
//         '&:first-child': {
//             marginTop: '0px',
//             marginBottom: '0px'
//           },
      
//           '&:last-child': {
//             marginTop: '0px',
//             marginBottom: '0px'
//           },
//     }}))(MaterialUIPickers);
