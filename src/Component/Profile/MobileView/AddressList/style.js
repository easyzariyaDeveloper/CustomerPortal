import styled from "styled-components";
import { base_spacing } from "../../../../Assets/style-var";

export const EditAndDeleteDiv = styled.div`
    float: right;
`;
export const AddressListOverlay = styled.div`
    position:fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    background-color: rgba(0,0,0,0.5);
`;

export const EditAddressCard = styled.div`
    background: white;
    width: 80%;
    margin: auto;
`;

export const AddressDiv = styled.div`
    width: 150px;
    min-height: 200px;
`;

export const LabelDiv = styled.div`
    display: flex; 
    flexDirection: initial;
`;

export const LabelSpan = styled.span`
padding-left: ${base_spacing/2}px;
`