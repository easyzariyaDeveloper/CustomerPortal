import React from "react";
import { AddCarPageWrapper, AddCarPageHeader, ButtonWrapper } from "./styles";
import PageLayout from "../../Layout";
import AddCarForm from "./AddCarForm";
import ActionButton from "../Common/ActionButton";

export default function AddCar() {
  const dummydata = [
    {
      active: true,
      placeholder: "Select Brand",
      options: [
        { id: 1, value: "Hyundai" },
        { id: 2, value: "Hyundai" },
      ],
    },
    {
      active: true,
      placeholder: "Select Brand",
      options: [
        { id: 1, value: "Hyundai" },
        { id: 2, value: "Hyundai" },
      ],
    },
    {
      active: false,
      placeholder: "Select Brand",
      options: [
        { id: 1, value: "Hyundai" },
        { id: 2, value: "Hyundai" },
      ],
    },
    {
      active: false,
      placeholder: "Select Brand",
      options: [
        { id: 1, value: "Hyundai" },
        { id: 2, value: "Hyundai" },
      ],
    },
  ];
  return (
    <PageLayout>
      <AddCarPageWrapper className="grey-gradient">
        <AddCarPageHeader>Select Car</AddCarPageHeader>
        <AddCarForm fields={dummydata}></AddCarForm>
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
