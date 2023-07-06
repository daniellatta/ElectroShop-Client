import React, { useEffect, useState } from "react";
// import { products, orders } from "./OrderData";
import OrdersParser from "./OrdersParser";
import { OrdersContainer } from "./Styles";
import axios from "axios";

const MyOrders = () => {
  const [userOrders, setUserOrders] = useState([]);
  const userID = JSON.parse(localStorage.id);

  const getUserOrders = async () => {
    try {
      const response = await axios.get(
        `https://electroshop-api.onrender.com/api/v1/order/user/${userID}`
      );
      return response;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    const getData = async () => {
      const response = await getUserOrders();
      setUserOrders(response.data);
    };
    getData();
  }, []);

  return (
    <div>
      <OrdersContainer>
        <OrdersParser ordersArray={userOrders} />
        {/* <OrdersParser ordersArray={userOrders} products={products} /> */}
      </OrdersContainer>
    </div>
  );
};

export default MyOrders;
