"use client";
import PaymentProgress from "@/components/PaymentProgress/PaymentProgress";
import Step1 from "@/components/PaymentSteps/Step1";
import Step2 from "@/components/PaymentSteps/Step2";
import { Button } from "@/components/PaymentSteps/Styles";
import React, { useEffect, useState } from "react";
import { IoIosHome } from "react-icons/io";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const PaymentForm = () => {
  const [step, setStep] = useState(1);
  const cart = useSelector((state) => state.shoppingCart);
  const router = useRouter();

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleFinish = () => {
    setStep(4);
  };

  const handleBrowseProducts = () => {
    router.push("/products");
  };

  return (
    <div className="text-center">
      {cart.products.length > 0 && <PaymentProgress stepsCompleted={step} />}
      {cart.products.length > 0 ? (
        <>
          {step === 1 && (
            <div>
              <h1 className="font-bold text-xl m-5">Summary</h1>
              <Step1 />
              <Button onClick={handleNext}>Next</Button>
            </div>
          )}

          {step === 2 && (
            <div>
              <h1 className="font-bold text-xl m-5">Delivery preferences</h1>
              <Step2 />
              <Button onClick={handlePrev}>Previous</Button>
              <Button onClick={handleNext}>Next</Button>
            </div>
          )}

          {step === 3 && (
            <div>
              <h1>Pantalla 3</h1>
              <Button onClick={handlePrev}>Previous</Button>
              <Button onClick={handleNext}>Next</Button>
            </div>
          )}

          {step === 4 && (
            <div>
              <h1>Pantalla 4 - Confirmación</h1>
              <Button onClick={handlePrev}>Previous</Button>
              <Button onClick={handleFinish}>
                Back to home <IoIosHome />
              </Button>
            </div>
          )}
        </>
      ) : (
        <div className="relative mt-[50px] flex flex-col justify-center items-center h-[90vh]">
          <p>Your cart is empty</p>
          <button
            className="text-gray-800 font-bold rounded-3xl border-2 border-gray-300 w-[35%] px-3 py-1 text-lg bg-gradient-to-b from-emerald-500 to-transparent hover:bg-black/10 transition-all"
            onClick={handleBrowseProducts}
          >
            Browse awesome products
          </button>
        </div>
      )}
    </div>
  );
};

export default PaymentForm;
