import styled from "styled-components";
import { EZCard } from "../../Common/MobileCard";
import { MobileActionButton } from "../../../Assets/common-styled";
import { base_spacing } from "../../../Assets/style-var";

export const CheckoutRadioWrapper = styled.div`
    display: flex;
    margin: 10px;
`;

export const CheckoutCard = styled(EZCard)`
    margin: 0px;
`;

export const CheckoutButtonDiv = styled.div`
    margin-top: ${base_spacing*5}px;
`;

export const CheckoutButton = styled(MobileActionButton)`
    width: 80%;
    margin: ${base_spacing}px auto;
    display: block;
`;

export const PaymentButtonDiv = styled.div`
    position: fixed;
    bottom: ${base_spacing*2}px;
    width: 100%;
`;

export const ThankYouCard = styled(EZCard)`
    position: absolute;
    top: 40%;
    width: 80%;
    left: 10%;
    margin:0px
`;