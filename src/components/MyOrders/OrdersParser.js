import React from "react";
import {
  OrderDiv,
  OrderDetails,
  InfoItem,
  ProductBox,
  OrderSection,
} from "./Styles";
import OrderAgainButton from "../OrderAgainButton/OrderAgainButton";

const OrdersParser = (props) => {
  const { products, ordersArray } = props;
  console.log(ordersArray);
  return (
    <OrderDiv id={`OrderDiv`}>
      {ordersArray?.map((order, index) => {
        const productList = order?.orderProducts?.map((orderProduct) =>
          products.find(
            (product) => orderProduct.productID === product.productID
          )
        );
        return (
          <OrderDetails id={`Order #${index}`} key={index}>
            <OrderSection>
              <InfoItem>
                <p>Order number:</p>
                <p>#{order.ID}</p>
              </InfoItem>
              <InfoItem>
                <p>Created:</p>
                <p>{order.dateCreated.slice(0, 10)}</p>
              </InfoItem>
              <InfoItem>
                <p>Active:</p>
                <p>{order.active ? "Yes" : "No"}</p>
              </InfoItem>
              <InfoItem>
                <p>Status:</p>
                <p>{order.completed ? "Completed" : "Cancelled"}</p>
              </InfoItem>
            </OrderSection>
            <hr />
            Products:
            <OrderSection>
              {productList.map((product, index) => {
                const productData = products.find(
                  (obj) => obj.productID === product.productID
                );
                return (
                  <ProductBox key={index}>
                    <p className="font-bold">{productData.name}</p>
                    <p>Unit price: ${productData.price}</p>
                    <p>Quantity: {product.quantity}</p>
                    <p>Product ID: {product.productID}</p>
                  </ProductBox>
                );
              })}
            </OrderSection>
            <OrderSection>
              <span className="text-green-500 font-bold">
                Total: ${order.totalAmount}
              </span>
              {console.log(order.totalAmount)}
            </OrderSection>
            <OrderSection>
              <OrderAgainButton products={productList} />
            </OrderSection>
          </OrderDetails>
        );
      })}
    </OrderDiv>
  );
};

export default OrdersParser;
