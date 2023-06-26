'use client';
import React, { useState } from "react";
import PaymentPage from "@/components/PaymentMethodSelector/PaymentMethodSelector";
import PaymentConfirmation from "@/components/PaymentConfirmation/PaymentConfirmation";
import Step1 from "@/components/PaymentSteps/Step1";
import Step2 from "@/components/PaymentSteps/Step2";
import PaymentProgress from "@/components/PaymentProgress/PaymentProgress";
import { Button } from "@/components/PaymentSteps/Styles";
import { IoIosHome } from "react-icons/io";

const PaymentForm = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleFinish = () => {
    setStep(4);
  };

  return (
    <div className="text-center">
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
          <Step2/>
          <Button onClick={handlePrev}>Previous</Button>
          <Button onClick={handleNext}>Next</Button>
        </div>
      )}

      {step === 3 && (
        <div>
          <PaymentPage onClick={handlePrev}/>
        </div>
      )}
    </div>
  );
};

export default PaymentForm;
