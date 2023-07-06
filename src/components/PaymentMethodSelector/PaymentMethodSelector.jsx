import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import {Container} from './Styles'

const PaymentPage = ({ onClick }) => {
  const [paymentLink, setPaymentLink] = useState(null);
  const cart = useSelector((state) => state.shoppingCart);
  let total = 0;
  cart?.products.forEach(
    (prod) => (total += prod.details.price * prod.quantity)
  );

  useEffect(() => {
    const handlePayment = async () => {
      try {
        const response = await axios.post(
          'https://electroshop-api.onrender.com/api/v1/payment',
          {
            name: 'Your shopping cart',
            price: total,
            quantity: 1,
          }
        );
        const paymentLink = await response.data.init_point;
        setPaymentLink(paymentLink);
      } catch (error) {
        console.error(error);
      }
    };
    handlePayment();
  }, []);

  return (
<div className="flex flex-col pt-28 bg-slate-700 text-white min-h-screen">
      <Container className="mx-auto">
        <p className="text-black">Proceed to Payment</p>
        {paymentLink ? (
          <Link href={paymentLink}>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors duration-300 mt-4">
   
              Pay Now
            </button>
          </Link>
        ) : (
          <p className='p-4'>Creating payment link...</p>
        )}
      </Container>
      <div className="mt-4">
        <button onClick={onClick} className="text-blue-300">
         {'< Prev'}
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
