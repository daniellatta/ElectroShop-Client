import React from "react";
import { orders } from "./OrderData";
import OrdersParser from "./OrdersParser";
import { OrderContainer } from "./Styles";

const MyOrders = () => {
  return (
    <div>
      MyOrders
      <OrderContainer>
        <OrdersParser ordersArray={orders} />
      </OrderContainer>
    </div>
  );
};

export default MyOrders;
