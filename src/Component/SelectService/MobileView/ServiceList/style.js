import styled from "styled-components";
import { base_spacing, ez_button_color, secondary_font_color} from "../../../../Assets/style-var";
import Collapse from '@material-ui/core/Collapse';

export const MServiceListWrapper= styled.div`
    padding: ${base_spacing * 2}px 0;
`;

export const ServiceListCard= styled.div`
    height: auto;
    margin: auto;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: ${base_spacing *1.5}px;
    padding: ${base_spacing}px;
    margin: 0 ${base_spacing * 2}px ${base_spacing * 2}px ${base_spacing * 2}px;
    position: relative;
`;
export const ServiceListCardWrapper = styled.a`
    display:flex;
    cursor:pointer;
    text-decoration: none;
    color:black;
`;

export const LeftDiv = styled.div`
    padding-right: 15px;
`;

export const RightDiv = styled.div`
    padding-right:20px;
`;

export const ServiceListImages = styled.img``;

export const CostPara = styled.p`
    text-align: center;
    font-weight:500;
    padding: 10px 5px 5px 5px;
    font-size:15px;

`;

export const PackagesDetails = styled.div`
    display: inline-block;
`;

export const PackageName = styled.h1`
    font-weight: bold;
`;

export const ServiceMenu = styled.p`
    font-size: 12px;
    padding-top: 5px;
`;

export const AddButton = styled.button`
    background: ${ez_button_color};
    border-radius: 6px;
    color: white;
    width: 60px;
    border-style: none;
    height: 30px;
    margin-left: ${base_spacing / 2}px;
`;

export const ListImg = styled.img`
    height: 30px;
`;

export const ButtonDiv = styled.div`
    display:flex;    
    position: absolute;
    bottom: 10px;
    right: 20px;
`;

export const TimerPara= styled.p`
    color: ${secondary_font_color};
    display: inline-block;
    padding: 5px;
    vertical-align: baseline;
    font-size: ${base_spacing*1.3}px;
    padding-top: ${base_spacing*0.8}px;
`;

export const TickImg = styled.img`
    vertical-align: middle;
    padding-left: 5px
`;

export const ServiceCount = styled.p`
    padding-top: 8px;
    font-size: 11px
`;

export const CollapseInDialogDiv = styled.div`
    text-align:center;
`;

 export const CarCollapseInDialog = styled(Collapse)`
    padding: ${base_spacing}px;
 `;

