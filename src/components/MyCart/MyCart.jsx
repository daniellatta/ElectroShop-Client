"use client";
import { useState } from "react";

/*
import React, { useContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { Store } from "../Store";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, orders: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false };
    default:
      return state;
  }
};*/

function App() {
  const [loading, setLoading] = useState(false);
  //  const { state } = useContext(Store);
  //  const { userInfo } = state;
  //  const navigate = useNavigate();
  /*
  const [{ loading, orders }, dispatch] = useReducer(reducer, {
    loading: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const { data } = await axios.get("/api/orders/mine", {
          headers: { authorization: `Bearer ${userInfo.token}` },
        });
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (error) {
        dispatch({ type: "FETCH_FAIL" });
        console.log(error);
      }
    };
    fetchData();
  }, [userInfo]);
*/

  return (
    <div className="bg-gray-300 h-screen">
      <div>
        <p className="text-4xl font-bold text-center pb-12">Order history</p>
      </div>
      <div>
        {loading ? (
          <div>
            <div className="p-20" role="status">
              <svg
                className="inline mr-2 w-24 h-24 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="flex justify-center">
            <table className="border-2 border-black text-center p-12 w-[1000px]  ">
              <thead className="border-2 border-black">
                <tr>
                  <th>ID</th>
                  <th>DATE</th>
                  <th>TOTAL</th>
                  <th>PAID</th>
                  <th>DELIVERED</th>
                </tr>
              </thead>
              {/* <tbody>
                {orders.map((order) => (
                  <tr key={order._id}>
                    <td className="p-2 border-b-2 border-black">
                      {order._id}{" "}
                    </td>
                    <td className="border-b-2 border-black">
                      {order.createdAt}{" "}
                    </td>
                    <td className="border-b-2 border-black">
                      {order.totalPrice}{" "}
                    </td>
                    <td className="border-b-2 border-black">
                      {order.isPaid ? order.paidAt : "No"}{" "}
                    </td>
                    <td className="border-b-2 border-black">
                      {order.isDelivered ? order.deliveredAt : "No"}{" "}
                    </td>
                    <td className="border-b-2 border-black">
                    
                      <button
                        className="text-orange-900 rounded-lg p-1 hover:text-orange-500"
                        onClick={() => {
                          navigate(`/order/${order._id}`);
                        }}
                      >
                        Details
                      </button>
                      
                    </td>
                  </tr>
                ))}
              </tbody> */}
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
