import React from "react";
import {
  OrderDiv,
  OrderDetails,
  InfoItem,
  OrderProductBox,
  OrderSection,
} from "./Styles";
import OrderAgainButton from "../OrderAgainButton/OrderAgainButton";

const OrdersParser = (props) => {
  const { ordersArray } = props;
  // const { products, ordersArray } = props;

  const getOrderTotalAmount = (productsArray) => {
    const total = productsArray
      .reduce((acc, product) => {
        return acc + product.total;
      }, 0)
      .toFixed(2);
    return total;
  };

  return (
    <OrderDiv id={`OrderDiv`}>
      {ordersArray?.map((order, index) => {
        // const productList = order?.products?.map((orderProduct) => {
        //   const quantity = orderProduct.quantity;
        // const currentProduct = products.find(
        //   (product) => orderProduct.productID === product.productID
        // );
        // currentProduct.quantity = quantity;
        // return currentProduct;
        // });}
        return (
          <OrderDetails id={`Order #${index}`} key={index}>
            {/* Encabezados de la orden */}
            <OrderSection>
              <InfoItem>
                <p>Order number:</p>
                <p>#{order.id}</p>
              </InfoItem>
              <InfoItem>
                <p>Created:</p>
                <p>{order.dateCreated}</p>
                {/* <p>{order.dateCreated.slice(0, 10)}</p> */}
              </InfoItem>
              <InfoItem>
                <p>Active:</p>
                <p>{order.active ? "Yes" : "No"}</p>
              </InfoItem>
              <InfoItem>
                <p>Status:</p>
                <p>{order.complete ? "Completed" : "Cancelled"}</p>
              </InfoItem>
            </OrderSection>
            <hr />
            {/* Renderizado de productos de la orden */}
            Products:
            <OrderSection>
              {order?.products?.map((product, index) => {
                // const productData = products.find(
                //   (obj) => obj.productID === product.productID
                // );
                return (
                  <OrderProductBox
                    key={index}
                    // className="w-full grow justify-between rounded-xl"
                  >
                    <p className="font-bold w-[35%] pl-2">{product.name}</p>
                    <p className="w-[25%]">Unit price: ${product.price}</p>
                    <p className="w-[15%]">Quantity: {product.quantity}</p>
                    <p className="w-[20%]">Product ID: {product.id}</p>
                  </OrderProductBox>
                );
              })}
            </OrderSection>
            {/* Tota de la orden */}
            <OrderSection>
              <span className="text-green-500 font-bold">
                Total: ${getOrderTotalAmount(order.products)}
              </span>
              {/* {console.log(order.totalAmount)} */}
            </OrderSection>
            {/* Botón de "Order Again" */}
            <OrderSection>
              <OrderAgainButton products={order.products} />
            </OrderSection>
          </OrderDetails>
        );
      })}
    </OrderDiv>
  );
};

export default OrdersParser;
