'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const PaymentPage = () => {
    const [paymentLink, setPaymentLink] = useState(null);
  
    useEffect(() => {
      const handlePayment = async () => {
        try {
          const response = await axios.post('http://localhost:3000/payment', {
            name: 'Messi',
            price: 3332,
            quantity: 2
          });
          const paymentLink = await response.data.init_point;
          setPaymentLink(paymentLink);
        } catch (error) {
          console.error(error);
        }
      };
      handlePayment();
    }, []);
  
    return (
      <div>
        <h1>Página de Pago</h1>
        {paymentLink && <Link href={paymentLink}>Pagar</Link>}
      </div>
    );
  };
  
  export default PaymentPage;

