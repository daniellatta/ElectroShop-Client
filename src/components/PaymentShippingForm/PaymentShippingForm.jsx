import React, { useState } from "react";

const ShippingForm = () => {
  const [formData, setFormData] = useState({
    address: "",
    phone: "",
    authorizedPersons: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar alguna acción con los datos del formulario, como enviarlos al servidor
    console.log(formData);
  };

  return (
    <div>
      <h2>Shipping Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="w-[60%] m-auto flex justify-between">
          <label className="w-[29%] flex justify-start" htmlFor="address">
            Address:
          </label>
          <input
            className="w-[69%] flex border-[1px] border-solid border-gray-500 rounded"
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="w-[60%] m-auto flex justify-between">
          <label className="w-[29%] flex justify-start" htmlFor="phone">
            Phone:
          </label>
          <input
            className="w-[69%] border-[1px] border-solid border-gray-500 rounded"
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="w-[60%] m-auto flex justify-between">
          <label
            className="w-[29%] flex justify-start"
            htmlFor="authorizedPersons"
          >
            Authorized Persons:
          </label>
          <textarea
            className="w-[69%] border-[1px] border-solid border-gray-500 rounded"
            id="authorizedPersons"
            name="authorizedPersons"
            value={formData.authorizedPersons}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button
          className="border-2 border-solid border-gray-500 rounded"
          type="submit"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default ShippingForm;
