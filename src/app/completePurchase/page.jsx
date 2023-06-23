'use client'
import React, { useState } from "react";
import PaymentMethodSelector from "@/components/PaymentMethodSelector/PaymentMethodSelector";
import PaymentConfirmation from "@/components/PaymentConfirmation/PaymentConfirmation";

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
          <h1>Pantalla 1</h1>
          <button onClick={handleNext}>Siguiente</button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h1>Pantalla 2</h1>
          <button onClick={handlePrev}>Anterior</button>
          <button onClick={handleNext}>Siguiente</button>
        </div>
      )}

      {step === 3 && (
        <div>
          <PaymentMethodSelector/>
          <button onClick={handlePrev}>Anterior</button>
          <button onClick={handleNext}>Siguiente</button>
        </div>
      )}

      {step === 4 && (
        <div>
          <PaymentConfirmation/>
          <button onClick={handlePrev}>Volver a la tercera pantalla</button>
          <button onClick={handleFinish}>Finalizar</button>
        </div>
      )}
    </div>
  );
};

export default PaymentForm;