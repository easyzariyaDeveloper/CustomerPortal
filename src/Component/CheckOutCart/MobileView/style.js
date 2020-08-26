import styled from "styled-components";
import { EZCard } from "../../Common/MobileCard";
import { MobileActionButton } from "../../../Assets/common-styled";
import { base_spacing, ez_gradient_secondColor, ez_button_color } from "../../../Assets/style-var";

export const CheckoutRadioWrapper = styled.div`
    display: flex;
    margin: 10px;
`;

export const CheckoutCard = styled(EZCard)`
    margin: 0px;
`;

export const CheckoutButtonDiv = styled.div`
    background: ${ez_gradient_secondColor};
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 45px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const CheckoutButton = styled.button`
    color: white;
    border: none;
    border-left: 1px solid white;
    background: ${ez_button_color};
    height: 100%;
    width: 50%;
    font-size: 17px;
    text-transform: uppercase;
`;

export const PaymentButtonDiv = styled.div`
    position: fixed;
    width: 100%;
    bottom : 0;
`;

export const ThankYouCard = styled(EZCard)`
    position: absolute;
    top: 40%;
    width: 80%;
    left: 10%;
    margin:0px
`;

export const CreateOrderButton = styled(MobileActionButton)`
    height: ${base_spacing*4.5}px;
`;

export const SpanDetails = styled.span`
    font-style: italic;
    color: ${ez_button_color}
`;