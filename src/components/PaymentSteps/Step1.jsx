import React from "react";
import { useSelector } from "react-redux";
import { products } from "../MyOrders/OrderData";
import { Header, Product, ProductInfo, Total } from "./Styles";

const Step1 = () => {
  const cartInfo = useSelector((state) => state.shoppingCart);
  console.log(cartInfo);
  console.log(cartInfo?.products[0]?.details);

  let total = 0;
  cartInfo?.products.forEach(
    (prod) => (total += prod.details.price * prod.quantity)
  );
  return (
    <div>
      Check your selected products below
      <Product>
        <Header>Product</Header>
        <Header>Price</Header>
        <Header>Quantity</Header>
        <Header>Subtotal</Header>
      </Product>
      {cartInfo?.products?.map((product, index) => {
        return (
          <Product key={index}>
            <ProductInfo>{product?.details.name}</ProductInfo>
            <ProductInfo>{product?.details.price}</ProductInfo>
            <ProductInfo>{product?.quantity}</ProductInfo>
            <ProductInfo>
              ${product?.details.price * product?.quantity}
            </ProductInfo>
          </Product>
        );
      })}
      <Product>
        <Total>Purchase Total: ${total}</Total>
      </Product>
    </div>
  );
};

export default Step1;
