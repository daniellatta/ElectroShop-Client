import React from "react";
import { useSelector } from "react-redux";
import { products } from "../MyOrders/OrderData";
import { Header, Product, ProductInfo, Total, Container, StyledButton} from "./Styles";

const Step1 = ({onClick}) => {
  const cartInfo = useSelector((state) => state.shoppingCart);
  console.log(cartInfo);
  console.log(cartInfo?.products[0]?.details);

  let total = 0;
  cartInfo?.products.forEach(
    (prod) => (total += prod.details.price * prod.quantity)
  );
  return (
<div className="bg-slate-700 min-h-screen">
  <div className="page-container  pt-28 flex flex-col">
    <Container className="bg-slate-800 flex-grow">
      <p className="mb-4">Check your selected products below</p>
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
              ${(product?.details.price * product?.quantity).toFixed(2)}
            </ProductInfo>
          </Product>
        );
      })}

      <Total>Purchase Total: ${total.toFixed(2)}</Total>
    </Container>
    <button onClick={onClick} className="text-blue-300 my-5">
      {'Next >'}
    </button>
  </div>
</div>
  );
};

export default Step1;

