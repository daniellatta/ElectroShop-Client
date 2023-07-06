'use client';
import React, { useEffect, useState } from 'react';
import PaymentPage from '@/components/PaymentMethodSelector/PaymentMethodSelector';
import Step1 from '@/components/PaymentSteps/Step1';
import Step2 from '@/components/PaymentSteps/Step2';
import PaymentProgress from '@/components/PaymentProgress/PaymentProgress';
import { Button } from '@/components/PaymentSteps/Styles';
import { IoIosHome } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { FiChevronRight } from 'react-icons/fi';
import useAuthenticate from '@/hook/Authenticated';

const PaymentForm = () => {
  const [step, setStep] = useState(1);
  const cart = useSelector((state) => state.shoppingCart);
  const { secureRouteUser } = useAuthenticate();
  const router = useRouter();

  useEffect(() => {
    secureRouteUser();
  });

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleBrowseProducts = () => {
    router.push('/products');
  };

  return (
    <div className='text-center'>
      {cart.products.length > 0 && <PaymentProgress stepsCompleted={step} />}
      {cart.products.length > 0 ? (
        <>
          {step === 1 && (
            <div>
              <Step1 onClick={handleNext} />
            </div>
          )}

          {step === 2 && (
            <div>
              <Step2 onClickPrev={handlePrev} onClickNext={handleNext} />
            </div>
          )}

          {step === 3 && (
            <div>
              <PaymentPage onClick={handlePrev} />
            </div>
          )}
        </>
      ) : (
        <div className='relative mt-[50px] flex flex-col justify-center items-center h-[90vh]'>
          <p>Your cart is empty</p>
          <button
            className='text-gray-800 font-bold rounded-3xl border-2 border-gray-300 w-[35%] px-3 py-1 text-lg bg-gradient-to-b from-emerald-500 to-transparent hover:bg-black/10 transition-all'
            onClick={handleBrowseProducts}>
            Browse awesome products
          </button>
        </div>
      )}
    </div>
  );
};

export default PaymentForm;
