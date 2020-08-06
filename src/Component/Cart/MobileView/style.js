import styled from "styled-components";
import {base_spacing} from "../../../Assets/style-var";
import { MobileActionButton } from "../../../Assets/common-styled";
import {withStyles } from '@material-ui/core/styles';
import MaterialUIPickers from "../../Common/DateTimePicker";


export const MCartPageWrapper = styled.div`
    padding-top: ${base_spacing*1.5}px;
`;

export const CarImage = styled.img``;

export const CarInfo = styled.p`

`;

export const ServicePriceHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: ${base_spacing/2}px; 0px;
    font-size: ${base_spacing*1.8}px;;
`;


export const MServiceWrapper = styled.div`

`;

export const ServiceMListItem = styled.div`
    display: flex;
    justify-content: space-between;
    line-height: ${base_spacing*4}px;
    font-weight:300;

`;

export const DeleteBinButton = styled.img`
    height: ${base_spacing*1.5}px;
    margin-left: ${base_spacing*0.7}px;
    vertical-align: middle;
}

`;
//     margin-left:8px;
//     border: none;
//     color: white;
//     background: #1A91AB;
//     border-radius:50%;
// `;

export const ServiceMPara = styled.p`
    text-align: left;
  
`;

export const CartPriceMPara = styled.p`
    text-align: right;
   
`;
export const DateTimeGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: auto;
    padding-bottom:${base_spacing}px;
`;

export const DateTimeDiv = styled.div``;

export const DatePara = styled.p`
    padding: ${base_spacing *4.2}px 0;
`;

export const TimePara = styled.p`
    padding: ${base_spacing*1.2}px 0
`;

export const DateTimeMPicker = styled.div`
    display: grid;
`;

export const CouponCodeButton = styled.button`
    width:150px;
    height: ${base_spacing*4}px;
    background: #F6F5F5;
    border-radius: ${base_spacing/2}px;
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
    width:80%;
    font-size: ${base_spacing*2}px;
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

export const CheckOutButton = styled(MobileActionButton)`
    height: 40px;
`;

export const MCouponCard = styled.div`
    min-width: 70%;
    min-height: ${base_spacing*20}px;
    padding: ${base_spacing*2}px;
    background: white;
    position: fixed;
    top: 40%;
    left: 5%;
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


export const DateTimePickers = withStyles(theme => ({
    root: {
        '&:first-child': {
            marginTop: '0px',
            marginBottom: '0px'
          },
      
          '&:last-child': {
            marginTop: '0px',
            marginBottom: '0px'
          },
    }}))(MaterialUIPickers);
