import React, { useEffect, useState } from "react";
import { AlmostYours, Progress, ProgressBar, StepNumber } from "./Styles";

const PaymentProgress = (props) => {
  const [progressPercentage, setProgressPercentage] = useState(0);
  const { stepsCompleted } = props;

  useEffect(() => {
    const calculateProgress = () => {
      const percentage = (stepsCompleted / 4) * 100;
      setProgressPercentage(percentage);
    };

    calculateProgress();
  }, [stepsCompleted]);

  return (
    <ProgressBar>
      <AlmostYours>Almost yours!</AlmostYours>
      <StepNumber className="right-[75%]">1</StepNumber>
      <StepNumber className="right-[50%]">2</StepNumber>
      <StepNumber className="right-[25%]">3</StepNumber>
      <StepNumber className="right-[0%]">4</StepNumber>
      <Progress style={{ width: `${progressPercentage}%` }}></Progress>
    </ProgressBar>
  );
};

export default PaymentProgress;
