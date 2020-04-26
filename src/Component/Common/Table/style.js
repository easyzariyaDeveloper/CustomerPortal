import styled from "styled-components";
import { border_color, white_color, base_spacing } from "../../../Assets/style-var";
import { alignCenter, alignHorizontally } from "../../../Assets/common-styled";

export const TableWrapper = styled.table`
`;

export const TableRow = styled.tr`
    background-color: ${(props) => props.index %2 !== 0 ? border_color : white_color}
`;

export const TableHead = styled.th`
    padding: ${base_spacing}px;
    background-color: ${(props) => props.index %2 !== 0 ? border_color : "yellow" }
`;

export const TableBody = styled.td`
    padding: ${base_spacing}px;
`;

