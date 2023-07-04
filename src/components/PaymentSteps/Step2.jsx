import React, { useState } from "react";
import { useSelector } from "react-redux";
import { MdLocalShipping, MdLocationOn } from "react-icons/md";
import { FaShippingFast, FaStoreAlt } from "react-icons/fa";
import { SiMediafire } from "react-icons/si";
import { LocationNode, Map, MapOverlay, Section, ButtonGroup, Containerr } from "./Styles";
import PaymentBranchSelection from "../PaymentBranchSelection/PaymentBranchSelection";
import ShippingForm from "../PaymentShippingForm/PaymentShippingForm";

const Step2 = ({onClickPrev, onClickNext}) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [showSection, setShowSection] = useState(true);
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };


  const handleBranchClick = (branch) => {
    setSelectedBranch(branch);
  };

  const handleRadioButtonChange = (e) => {
    setSelectedBranch(e.target.value);
  };
  const handleSave = () => {
    setSelectedBranch(null);
    setShowSection(false); // Oculta la sección condicionalmente al presionar "Save"
  };


  return (
    <div className="bg-slate-700 min-h-screen">
      <div className="flex flex-col pt-28">
        <Containerr className="flex flex-col">
          <p className="pb-4">Choose your delivery method</p>
          <div className="flex justify-between">
            <div className="bg-white px-4 py-2 rounded">
              <label className="flex justify-between items-center w-[200px] m-auto">
                <input
                  type="radio"
                  value="standard"
                  checked={selectedOption === "standard"}
                  onChange={handleOptionChange}
                />
                Standard Shipping <MdLocalShipping className="inline" />
              </label>
            </div>

            <div className="bg-white px-4 py-2 rounded">
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
            </div>

            <div className="bg-white px-4 py-2 rounded">
              <label className="flex justify-between items-center w-[200px] m-auto">
                <input
                  type="radio"
                  value="pickup"
                  checked={selectedOption === "pickup"}
                  onChange={handleOptionChange}
                />
                Pick up from Store <FaStoreAlt className="inline" />
              </label>
            </div>
          </div>

          <div className="flex flex-col">
            {selectedOption === "standard" && (
              <Section className="bg-gray-800">
                {/* Opciones para Standard Shipping */}
                <p className="text-white">
                  Get your order delivered straight to your door in 5 to 10 business days
                </p>
                <ShippingForm handleSave={handleSave} />
              </Section>
            )}

            {selectedOption === "express" && (
              <Section className="bg-gray-800">
                {/* Opciones para Express Shipping */}
                <p className="text-white">
                  Enjoy doorstep delivery within 2 to 5 business days with our fastest shipping
                </p>
                <ShippingForm handleSave={handleSave} />
              </Section>
            )}

            {selectedOption === "pickup" && showSection && (
              <Section className="bg-gray-800 p-1">
                {/* Opciones para Pick up from Store */}
                <p className="text-white">Select a Store from the map</p>
                <div className="bg-white rounded-lg">
                  <div className="pt-4">
                    <Map className="w-[60%] mb-4">
                      <MapOverlay className="w-1/3">
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
                      className="w-[40%] h-full"
                      handleRadioButtonChange={handleRadioButtonChange}
                      selectedBranch={selectedBranch}
                    />
                  </div>
                  <button
                    // onClick={handleSave}
                    className="border-2 border-blue-500 rounded px-4 py-2 hover:bg-blue-500 hover:text-white m-4"
                    type="submit"
                  >
                    Save
                  </button>
                </div>
              </Section>
            )}
          </div>
        </Containerr>
        <ButtonGroup>
          <button onClick={onClickPrev} className="text-blue-300 ">
            &lt; Prev
          </button>
          <span className="px-2"></span> {/* Espacio entre los botones */}
          <button onClick={onClickNext} className="text-blue-300 ">
            Next &gt;
          </button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default Step2;
