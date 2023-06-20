import React from "react";
import { orders } from "./OrderData";
import OrdersParser from "./OrdersParser";
import { OrderContainer } from "./Styles";

const MyOrders = () => {
  return (
    <div>
      <div className="pb-20">
        <div className="w-full shadow-fb rounded bg-white p-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img
                src="https://picsum.photos/id/1025/500"
                alt="img"
                className="h-10 w-10 rounded-full"
              />
              <div className="ml-4">
                <span className="cursor-pointer font-bold">Ronald Oliver</span>{" "}
              </div>
            </div>
            <button className="w-22 h-9 rounded-full bg-fFill flex items-center justify-center focus:outline-none bg-red-500 ">
              Volver al inicio
            </button>
          </div>
          <div className="w-full mt-4">
            Nunc scelerisque tincidunt elit. Vestibulum non mi ipsum. Cras
            pretium suscipit tellus sit amet aliquet. Vestibulum maximus lacinia
            massa non porttitor.
          </div>
          <img
            src="https://picsum.photos/id/1014/2000"
            alt="img"
            className="w-full h-72 object-cover mt-4 rounded"
          />
        </div>
      </div>
      MyOrders
      <OrderContainer>
        <OrdersParser ordersArray={orders} />
      </OrderContainer>
    </div>
  );
};

export default MyOrders;
