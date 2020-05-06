import React from "react";
import { Item } from "../../MyCar/CarItem/styles";
import InputGrp from "../../../Common/InputGrp";
import { ItemInfo, ItemAmount, Amount } from "./styles";
import { Button } from "../../styles";
export default function OrderItem({ order }) {
  return (
    <Item>
      <ItemInfo>
        <InputGrp
          disabled={true}
          attached={true}
          label="Date"
          value={order.date}
        />
        <InputGrp
          disabled={true}
          label="Car"
          attached={true}
          value={order.car + "(" + order.number_plate + ")"}
        />
        <InputGrp
          disabled={true}
          attached={true}
          label="Service"
          value={order.services}
        />
        <InputGrp
          disabled={true}
          attached={true}
          label="Kilometers"
          value={order.kilometers + " km"}
        />
      </ItemInfo>
      <ItemAmount>
        <Amount>Rs {order.amount}</Amount>
        <Button> Download Invoice</Button>
      </ItemAmount>
    </Item>
  );
}
