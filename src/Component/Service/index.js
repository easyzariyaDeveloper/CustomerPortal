import React from "react";
import {
  ServicePageWrapper,
  ServicePageHeader,
  ServiceData,
  ServiceDataHeader,
  ServiceDataInfo,
} from "./styles";
import ActionButton from "../Common/ActionButton";
import PageLayout from "../../Layout";

export default function Service() {
  return (
    <PageLayout>
      <ServicePageWrapper>
        <ServicePageHeader>Services</ServicePageHeader>
        <ServiceData>
          <ServiceDataHeader>Door Step On Demand Service</ServiceDataHeader>
          <ServiceDataInfo>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </ServiceDataInfo>
          <ActionButton
            label="Select Service"
            onClick={() => location.href = "/select-service"}
          />
        </ServiceData>

        <ServiceData>
          <ServiceDataHeader>EZ Autocare Center</ServiceDataHeader>
          <ServiceDataInfo>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </ServiceDataInfo>
          <ActionButton
            label="Select Service"
            onClick={() => location.href = "/select-service"}
          />
        </ServiceData>
      </ServicePageWrapper>
    </PageLayout>
  );
}
