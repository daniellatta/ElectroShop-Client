"use client";
// import { useRouter } from "next/navigation";
// import { useDispatch, useSelector } from "react-redux";
import { useSelector } from "react-redux";
import { ProductBox } from "../MyOrders/Styles";
import { Buttons, MainContainer } from "./Styles";
import AddRemoveProduct from "../AddRemoveProduct/AddRemoveProduct";
import ProceedToPaymentButton from "../ProceedToPaymentButton/ProceedToPaymentButton";
import ClearCartButton from "../ClearCartButton/ClearCartButton";
import BrowseProductsButton from "../BrowseProductsButton/BrowseProductsButton";
// import { hideCart } from "@/redux/features/shoppingCart";

const ShoppingCartNav = () => {
  const { products } = useSelector((state) => state.shoppingCart);

  // const router = useRouter();
  // const dispatch = useDispatch();

  // const handleProceedToPayment = () => {
  //   router.push("/completePurchase");
  // };

  // const handleBrowseProducts = () => {
  //   router.push("/products");
  //   dispatch(hideCart());
  // };

  return (
    <MainContainer>
      {products.length > 0 ? (
        <>
          <div
            className="overflow-x-hidden mt-10 mb-1 rounded-lg flex flex-col gap-1 box-border"
            style={{
              // border: "2px solid white",
              // borderRadius: "5px 0 0 5px",
              scrollbarWidth: "thin",
            }}
          >
            <div className="absolute flex justify-center text-white text-lg font-bold w-full top-1">
              Products in your shopping cart
            </div>
            {/* Renderizar los productos del carrito */}
            {products &&
              products.map((product) => {
                return (
                  <ProductBox key={product.details.id}>
                    {/* IMAGEN */}
                    <div
                      style={{
                        width: "100px",
                        backgroundImage: `url(${product.details.image})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        boxShadow: "inset 0 0 2px 2px black",
                      }}
                    ></div>
                    {/* INFO DEL PRODUCTO */}
                    <div
                      className="bg-gradient-to-b from-white via-cyan-50 to-cyan-100"
                      style={{
                        width: "70%",
                        borderLeft: "4px double #9998ffcc",
                        padding: "0 3px 0 3px",
                      }}
                    >
                      <p className="font-bold">{product.details.name}</p>
                      <p>Unit price: ${product.details.price}</p>
                      <p>Quantity: {product.quantity}</p>
                      <p>Product ID: {product.details.id}</p>
                    </div>
                    {/* BOTONES ADD ONE, REMOVE ONE, REMOVE ALL */}
                    <AddRemoveProduct product={product} />
                  </ProductBox>
                );
              })}
          </div>
          <Buttons>
            {/* Botón para proceder al pago */}
            <ProceedToPaymentButton />

            {/* Botón para vaciar el carrito */}
            <ClearCartButton />
          </Buttons>
        </>
      ) : (
        <>
          {/* Mensaje de carrito vacío */}
          <div className="relative h-[300px] flex flex-col justify-center items-center text-lg bg-gradient-to-b from-emerald-500 to-transparent rounded-lg">
            <p>Your cart is empty.</p>
            <br />
            <BrowseProductsButton />
            {/* <button
              className="text-white rounded-3xl border-2 border-white px-3 py-1 hover:bg-black/10 transition-all"
              onClick={handleBrowseProducts}
            >
              Browse awesome products
            </button> */}
          </div>
        </>
      )}
    </MainContainer>
  );
};

export default ShoppingCartNav;
