import styled, {css} from "styled-components";
import { white_color, base_spacing, border_color } from "../../../../Assets/style-var";
import { FontSize_20 } from "../../../../Assets/common-styled";


export const EZLoginWrapper = styled.div`
    margin-top: ${base_spacing * 4.5}px;
    width : 374px;
    background-color: ${white_color};
    position: relative;
    border-top: 2px solid ${border_color};
`;

export const Divison = styled.p`
    background-color: ${white_color};
    font-size: 16px;
    padding: ${base_spacing/2}px;
    position: absolute;
    border-radius: 50%;
    left: 45%;
    top: -13px;
`;

export const SignUpText = styled.p`
    ${FontSize_20}
    margin-top: 30px;
    font-weight: 500;
    line-height: 30px;
    color: #959595
`;

