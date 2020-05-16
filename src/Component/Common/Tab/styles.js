import styled from "styled-components";
import { base_spacing, header_bg_color, white_color, borderVariable, secondary_font_color } from "../../../Assets/style-var";
import { alignHorizontally, AlignItems } from "../../../Assets/common-styled";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';

//${alignHorizontally}
export const TabWrapper = styled.div`
    text-align: center;
    margin-bottom: ${base_spacing *3}px;
    flexGrow: 1,
    width: '100%',
    background-color: ${secondary_font_color}
`;

export const MAppBar = styled(AppBar)`
`;
export const MTabs = styled(Tabs)`

`;