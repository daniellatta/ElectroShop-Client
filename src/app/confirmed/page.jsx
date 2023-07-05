'use client'
import PaymentProgress from "@/components/PaymentProgress/PaymentProgress";
import axios from "axios";
import Link from "next/link";
import { useEffect } from "react";
import {Container} from './Styles'


const Confirmed = () => {
  const email = localStorage.getItem('email');
  const cartData = localStorage.getItem('cart');
  console.log(cartData);
  
  useEffect(() => {
    const enviarCorreo = async () => {
      try {
        await axios.post(`https://electroshop-api.onrender.com/api/v1/contact/complete/${email}`);
        // await axios.post('https://electroshop-api.onrender.com/api/v1/order', cartData)
        console.log('Correo enviado exitosamente');
      } catch (error) {
        console.error('Error al enviar el correo:', error);
      }
    };

    enviarCorreo();
  }, []);
  return (
    <div className="flex flex-col pt-28 bg-slate-700 text-white min-h-screen">
      <Container className="text-center">
      <PaymentProgress stepsCompleted={4} />
      <p className="text-2xl text-black  mb-8">Your purchase has been successfully completed.</p>
      <Link href="/">
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors duration-300">
          Continue Shopping
        </button>
      </Link>
      </Container>
    </div>
  );
};

export default Confirmed;