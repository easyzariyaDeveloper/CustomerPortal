import React from "react";
import {
  HeaderWrapper,
  Logo,
  ServiceInformationWrapper,
  ServiceInformationText,
  ServiceData,
} from "./styles";
import ActionButton from "../../Component/Common/ActionButton";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import CallIcon from "@material-ui/icons/Call";
export default function Header() {
  return (
    <HeaderWrapper>
      <Logo />
      <ServiceInformationWrapper>
        <ServiceData>
          <QueryBuilderIcon />
          <ServiceInformationText>
            Service Hours <br />
            Mon - Sat: 7:00 am - 6:00 pm{" "}
          </ServiceInformationText>
        </ServiceData>
        <ServiceData>
          <CallIcon />
          <ServiceInformationText>
            Call Us <br />
            (555) Car-Repair
          </ServiceInformationText>
        </ServiceData>
        <ServiceData>
          <ActionButton
            label="Make an Appointment"
            onClick={() => console.log("making an appointment button")}
          />
        </ServiceData>
      </ServiceInformationWrapper>
    </HeaderWrapper>
  );
}
