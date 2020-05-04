import React from "react";
import { Box, Header, Button } from "../styles";
import { Orders } from "../MockData";
import { OrdersList, OrdersContent } from "./styles";
import OrderItem from "./OrderItem";
export default function index() {
  return (
    <Box>
      <Header>Order History</Header>
      <OrdersContent>
        <OrdersList>
          {Orders.map((order) => (
            <OrderItem key={order.id} order={order} />
          ))}
        </OrdersList>
      </OrdersContent>
    </Box>
  );
}
