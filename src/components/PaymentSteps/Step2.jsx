import React, { useState } from "react";
import { useSelector } from "react-redux";
import { MdLocalShipping, MdLocationOn } from "react-icons/md";
import { FaShippingFast, FaStoreAlt } from "react-icons/fa";
import { SiMediafire } from "react-icons/si";
import { LocationNode, Map, MapOverlay, Section } from "./Styles";
import PaymentBranchSelection from "../PaymentBranchSelection/PaymentBranchSelection";
import ShippingForm from "../PaymentShippingForm/PaymentShippingForm";

const Step2 = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [selectedBranch, setSelectedBranch] = useState(null);

  const handleBranchClick = (branch) => {
    setSelectedBranch(branch);
  };

  const handleRadioButtonChange = (e) => {
    setSelectedBranch(e.target.value);
  };

  return (
    <div className="flex flex-col">
      <label className="flex justify-between items-center w-[200px] m-auto">
        <input
          type="radio"
          value="standard"
          checked={selectedOption === "standard"}
          onChange={handleOptionChange}
        />
        Standard Shipping <MdLocalShipping className="inline" />
      </label>

      {selectedOption === "standard" && (
        <Section>
          {/* Opciones para Standard Shipping */}
          <p>
            Get your order delivered straight to your door in 5 to 10 business
            days
          </p>
          <ShippingForm></ShippingForm>
        </Section>
      )}

      <label className="flex justify-between items-center w-[200px] m-auto">
        <input
          type="radio"
          value="express"
          checked={selectedOption === "express"}
          onChange={handleOptionChange}
        />
        Express Shipping
        <div>
          <SiMediafire
            className="inline"
            stroke="darkred"
            fill="#dd0000"
            strokeWidth="1"
          />
          <FaShippingFast className="inline relative right-0.5" />
        </div>
      </label>

      {selectedOption === "express" && (
        <Section>
          {/* Opciones para Express Shipping */}
          <p>
            Enjoy doorstep delivery within 2 to 5 business days with our fastest
            shipping
          </p>
          <ShippingForm></ShippingForm>
        </Section>
      )}

      <label className="flex justify-between items-center w-[200px] m-auto">
        <input
          type="radio"
          value="pickup"
          checked={selectedOption === "pickup"}
          onChange={handleOptionChange}
        />
        Pick up from Store <FaStoreAlt className="inline" />
      </label>

      {selectedOption === "pickup" && (
        <Section>
          {/* Opciones para Pick up from Store */}
          <p>Select a Store from the map</p>
          <Map>
            <MapOverlay>
              <LocationNode
                className="top-[46%] right-[63.2%] overflow-hidden"
                onClick={() => handleBranchClick("Villa Ballester Branch")}
              >
                <MdLocationOn
                  className="w-8 h-8 m-0 hover:fill-red-700"
                  fill="darkred"
                />
              </LocationNode>
              <LocationNode
                className="top-[16%] right-[46.7%] overflow-hidden"
                onClick={() => handleBranchClick("Vicente Lopez Branch")}
              >
                <MdLocationOn
                  className="w-8 h-8 m-0 hover:fill-red-700"
                  fill="darkred"
                />
              </LocationNode>
              <LocationNode
                className="top-[62%] right-[32%] overflow-hidden"
                onClick={() => handleBranchClick("Belgrano Branch")}
              >
                <MdLocationOn
                  className="w-8 h-8 m-0 hover:fill-red-700"
                  fill="darkred"
                />
              </LocationNode>
            </MapOverlay>
          </Map>
          <PaymentBranchSelection
            handleRadioButtonChange={handleRadioButtonChange}
            selectedBranch={selectedBranch}
          />
        </Section>
      )}
    </div>
  );
};

export default Step2;
