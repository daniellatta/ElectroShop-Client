import React from "react";
import { products, orders } from "./OrderData";
import OrdersParser from "./OrdersParser";
import { OrdersContainer } from "./Styles";

const MyOrders = () => {
  return (
    <div>
      MyOrders
      <OrdersContainer>
        <OrdersParser ordersArray={orders} products={products} />
      </OrdersContainer>
    </div>
  );
};

export default MyOrders;
