import React from "react";

const PaymentBranchSelection = (props) => {
  const { handleRadioButtonChange, selectedBranch } = props;
  return (
    <div className="flex flex-col border-2 rounded-lg border-gray-500 border-solid w-[80%] mx-auto mt-4">
      <div>
        <input
          type="radio"
          id="branchBallester"
          name="branch"
          value="Villa Ballester Branch"
          checked={selectedBranch === "Villa Ballester Branch"}
          onChange={handleRadioButtonChange}
        />
        <label htmlFor="branchBallester">Villa Ballester Branch</label>
        <p className="text-xs mb-2">
          San Lorenzo 2598, Villa Ballester, Provincia de Buenos Aires
        </p>
      </div>
      <div>
        <input
          type="radio"
          id="branchVicenteLopez"
          name="branch"
          value="Vicente Lopez Branch"
          checked={selectedBranch === "Vicente Lopez Branch"}
          onChange={handleRadioButtonChange}
        />
        <label htmlFor="branchVicenteLopez">Vicente Lopez Branch</label>
        <p className="text-xs mb-2">
          Pres. Hipólito Yrigoyen 2648, Florida, Provincia de Buenos Aires
        </p>
      </div>
      <div>
        <input
          type="radio"
          id="branchBelgrano"
          name="branch"
          value="Belgrano Branch"
          checked={selectedBranch === "Belgrano Branch"}
          onChange={handleRadioButtonChange}
        />
        <label htmlFor="branchBelgrano">Belgrano Branch</label>
        <p className="text-xs mb-2">Av. Olazábal 2260, CABA, Buenos Aires</p>
      </div>
    </div>
  );
};

export default PaymentBranchSelection;
