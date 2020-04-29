import React from "react";
import { AddCarPageWrapper, AddCarPageHeader, ButtonWrapper } from "./styles";
import PageLayout from "../../Layout";
import AddCarForm from "./AddCarForm";
import ActionButton from "../Common/ActionButton";

export default function AddCar() {
  return (
    <PageLayout>
      <AddCarPageWrapper className="grey-gradient">
        <AddCarPageHeader>Select Car</AddCarPageHeader>
        <AddCarForm></AddCarForm>
        <ButtonWrapper>
          <ActionButton
            active={false}
            label="Confirm"
            onClick={() => console.log("Car added")}
          />
        </ButtonWrapper>
      </AddCarPageWrapper>
    </PageLayout>
  );
}
