import styled from "styled-components";
import { border_color, white_color, base_spacing } from "../../../Assets/style-var";
import { alignCenter, alignHorizontally } from "../../../Assets/common-styled";

const tableMinWidth = "1000px";

export const TableWrapper = styled.table`
    margin: 0 auto;
    min-width: ${tableMinWidth};
`;

export const TableRow = styled.tr`
    background-color: ${(props) => props.index %2 !== 0 ? border_color : white_color};
`;

export const TableHead = styled.th`
    border: 1px solid ${border_color};
    border-right: 0;
`;

export const TableBody = styled.td`
    border: 1px solid ${border_color};
    padding: ${base_spacing}px;
`;

