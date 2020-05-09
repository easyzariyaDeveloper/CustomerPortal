import styled from "styled-components";
import { CartPageWrapper, CartHeader, ServiceLabel,SelectAddressLabel, CartServicePara, CartPricePara } from "../style";
import Card from '@material-ui/core/Card';
import { base_spacing, borderVariable } from "../../../Assets/style-var";
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';


export const CartPageMWrapper = styled(CartPageWrapper)`
    width: auto;
    margin: 0;
    padding: 0;
    background: transparent;
    box-shadow: initial;
    font-size:14px;
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

export const ServiceMLabel = styled.h1``;

export const SelectAddressMLabel = styled(SelectAddressLabel)`
    margin:0;
    padding: 0;
    font-size: inherit;
`;

export const ServiceMListItem = styled.div`
    border-bottom: ${borderVariable};
    display: flex;
    justify-content: space-between;

    CartServicePara{
        color: black;
    }
`;

export const CartServiceMPara = styled(CartServicePara)`
`;

export const DeleteBinButton = styled(DeleteOutlinedIcon)`
`;

export const CartPriceMPara = styled(CartPricePara)``;

export const CouponInputText = styled.input`
    border: none;
    border-bottom: ${borderVariable};
`;

export const OverlayCard = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
`;



