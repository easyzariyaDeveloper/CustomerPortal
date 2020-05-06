import React from "react";
import {
  CarInfo,
  CarImg,
  ButtonList,
  Item,
  EditButton,
  DeleteButton,
} from "./styles";
import InputGrp from "../../../Common/InputGrp";
export default function CarItem({
  car,
  onChange,
  disabled = false,
  onEdit,
  onDelete,
}) {
  const id = car.id;
  return (
    <Item>
      <CarInfo>
        <InputGrp
          label="Car"
          disabled={disabled}
          name="car"
          attached={true}
          placeholder="Add Car..."
          onChange={(e) => onChange(id, e)}
          value={car.car}
        />
        <InputGrp
          label="Model"
          name="model"
          attached={true}
          disabled={disabled}
          placeholder="Add Model..."
          onChange={(e) => onChange(id, e)}
          value={car.model}
        />
        <InputGrp
          label="Number Plate"
          name="number_plate"
          attached={true}
          disabled={disabled}
          placeholder="Add Car..."
          onChange={(e) => onChange(id, e)}
          value={car.number_plate}
        />
        <InputGrp
          label="Last Service"
          name="last_service"
          attached={true}
          disabled={disabled}
          placeholder="Add Car..."
          onChange={(e) => onChange(id, e)}
          value={car.last_service}
        />
      </CarInfo>
      <CarImg url={car.car_img} />
      <ButtonList>
        <EditButton onClick={() => onEdit(car.id)}>Edit </EditButton>
        <DeleteButton onClick={() => onDelete(car.id)}>Del</DeleteButton>
      </ButtonList>
    </Item>
  );
}
