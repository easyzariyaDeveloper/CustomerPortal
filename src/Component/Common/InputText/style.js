import styled from "styled-components";
import { base_spacing, white_color, border_color } from "../../../Assets/style-var";


export const InputForm = styled.input`
    margin-top: 40px;
    height: 20px;
    padding: ${base_spacing / 2}px;
    background-color: ${white_color};
    width:100%;
    border: 0;
    border-bottom: 1px solid ${border_color};
    outline: transparent;
    font-size: 20px;
`;  