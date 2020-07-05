import styled from "styled-components";
import { base_spacing } from "../../Assets/style-var";
import { MobileActionButton } from "../../Assets/common-styled";

export const AddressCardWrapper = styled.div`
`;

export const AdderessCard= styled.div`
    background: white;
    border-radius: ${base_spacing}px ${base_spacing}px 0px 0px;
`;

export const DoorstepTextWrapper = styled.div`
    width: 90%;
    margin: 0 auto;
`;

export const RadioWrapper = styled.div`
    text-align: center;
`;


export const SaveButton = styled(MobileActionButton)`
    width:80%;
    margin:${base_spacing*2}px 10%;
`;


export const SelfDropWrapper = styled.div`
    display: grid;
    margin: ${base_spacing*2}px;
`;