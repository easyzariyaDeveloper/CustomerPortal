import styled from "styled-components";
import { CartPageWrapper,SelectAddressLabel, CartServicePara, CartPricePara, ServiceLabel } from "../style";
import Card from '@material-ui/core/Card';
import { base_spacing, borderVariable, secondary_font_color } from "../../../Assets/style-var";
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import { Login_SignUp_Button } from "../../../Assets/common-styled";


export const CartPageMWrapper = styled(CartPageWrapper)`
    width: auto;
    margin: 0;
    padding: 0;
    background: transparent;
    box-shadow: initial;
    font-size:16px;
`;
export const MCard = styled(Card)`
    margin:${base_spacing}px;
    padding: ${base_spacing * 0.8}px;
`;

export const DateTimeMPicker = styled.div`
    display: flex;
    
    .MuiFormControl-marginNormal{
        margin-top: 0;
    }
    label {
        font-size: inherit;
    }

    input{
        font-size: inherit;
        padding: 6px 0;
    }
    
`;


export const SelectAddressMLabel = styled(SelectAddressLabel)`
    margin:0;
    padding: 0;
    font-size: inherit;
`;

export const ServiceMListItem = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: ${base_spacing / 2}px;
`;

export const CartServiceMPara = styled(CartServicePara)`
    padding: 4px;
    padding-bottom: 2px;
    font-size: 14px;
`;

export const DeleteBinButton = styled(DeleteOutlinedIcon)`
    font-size: 18px !important;
    color: ${secondary_font_color};
`;

export const CartPriceMPara = styled(CartPricePara)`
    padding: 10px;
    padding-bottom: ${base_spacing / 2}px;
    font-size: 14px;
`;

export const OverlayCard = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
`;

export const CouponButton = styled(Login_SignUp_Button)`
    display: inline-block;
    width: 85px;
    opacity: 1;
    margin: 0px;
    margin: 8px;
`;

export const CouponAlignment = styled.div`
    display: flex;
    justify-content: space-between;

`;

export const CheckoutBtn= styled.div`
    text-align: -webkit-center;
`;

export const ServiceMLabel = styled(ServiceLabel)`
    font-size: 15px;
`;

export const MCalculateDiv =styled.div`
    border-bottom: ${borderVariable};
    padding: 10px 0;
    color: black;
    font-size: 14px;
`
