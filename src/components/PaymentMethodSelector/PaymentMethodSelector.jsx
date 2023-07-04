import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useSelector } from 'react-redux';

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
    <div className='h-screen flex flex-col items-center justify-center bg-slate-700 text-white'>
      <div className='flex flex-col items-center justify-center flex-grow'>
        {paymentLink ? (
          <Link href={paymentLink}>
            <button className='bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition-colors duration-300'>
              Pay Now
            </button>
          </Link>
        ) : (
          <p>Creating payment link...</p>
        )}
      </div>
      <div className='mt-auto'>
        <button onClick={onClick} className='text-white'>
          Previous
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
