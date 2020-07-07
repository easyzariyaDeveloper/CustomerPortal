import styled from "styled-components";
import { base_spacing, CommonBoxShadow } from "../../../Assets/style-var";

export const BannerComponentHeight = 250;

export const BannerComponent = styled.div`
    height: ${BannerComponentHeight}px;
    background-size: cover;
`;
export const BannerImage = styled.img`
    height: 200px;
    width: 100%;
    padding: ${base_spacing * 2}px ${base_spacing}px;
`;

export const SlideContainer = styled.div`
    position: relative;
    background: white;
    ${CommonBoxShadow}
`;

export const SliderItem = styled.div`
    position: relative;
`;