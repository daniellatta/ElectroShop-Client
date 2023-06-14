import React from "react";
import { OrderDiv, OrderDetails } from "./Styles";

const OrdersParser = (props) => {
  const { ordersArray } = props;
  console.log(ordersArray);
  return (
    <OrderDiv>
      {ordersArray?.map((order, index) => {
        return (
          <OrderDetails key={index}>
            <p>Order ID: {order.ID}</p>
            <p>Created: {order.dateCreated}</p>
            <p>Active: {order.active}</p>
            <p>Completed: {order.completed}</p>
            <div>
              Products:{" "}
              {order.orderProducts.map((product, index) => {
                return (
                  <div key={index}>
                    <p>Product ID: {product.productID}</p>
                    <p>Unit price: {product.unitPrice}</p>
                    <p>Quantity: {product.quantity}</p>
                    <p>Product ID: {product.productID}</p>
                  </div>
                );
              })}
            </div>
            <span>Total: {order.totalAmount}</span>
          </OrderDetails>
        );
      })}
    </OrderDiv>
  );
};

export default OrdersParser;
