"use client";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { ProductBox } from "../MyOrders/Styles";
import AddRemoveProduct from "../AddRemoveProduct/AddRemoveProduct";
import ProceedToPaymentButton from "../ProceedToPaymentButton/ProceedToPaymentButton";
import ClearCartButton from "../ClearCartButton/ClearCartButton";
import BrowseProductsButton from "../BrowseProductsButton/BrowseProductsButton";

const ShoppingCart = () => {
  const { products } = useSelector((state) => state.shoppingCart);

  const router = useRouter();

  const handleBrowseProducts = () => {
    router.push("/products");
  };

  return (
    <div className="flex flex-row flex-wrap justify-between gap-2 border-4 border-black/50 rounded-xl p-2">
      {products.length > 0 ? (
        <>
          {/* Renderizar los productos del carrito */}
          {products.map((product, index) => {
            return (
              <ProductBox id="PRD BOX" key={index} className="w-[49%]">
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
                  className="flex flex-col grow bg-gradient-to-b from-white via-cyan-50 to-cyan-100"
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

          {/* División */}
          <hr className="w-full border border-black/50 border-dashed rounded m-auto" />

          {/* Botones */}
          <div className="flex w-full justify-center">
            <div className="flex flex-col justify-center w-full max-w-sm">
              {/* Botón para proceder al pago */}
              <ProceedToPaymentButton />
              {/* Botón para vaciar carrito */}
              <ClearCartButton />
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col justify-center items-center min-h-[300px]">
          {/* Mensaje de carrito vacío */}
          <p>Your cart is empty.</p>
          <br />

          {/* Lleva a /products cuando el carrito esta vacio */}
          <BrowseProductsButton />
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
