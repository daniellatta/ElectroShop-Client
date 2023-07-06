import React, { useState } from "react";

const ShippingForm = ({handleSave}) => {
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
    handleSave()
  };

  return (
    <div className="bg-white p-6 rounded-lg">
  <h2 className="text-xl font-bold mb-4">Shipping Information</h2>
  <form onSubmit={handleSubmit} className="space-y-4">
    <div className="flex items-center">
      <label className="w-1/4" htmlFor="address">
        Address:
      </label>
      <input
        className="flex-1 border border-gray-500 rounded py-1 px-2"
        type="text"
        id="address"
        name="address"
        value={formData.address}
        onChange={handleChange}
        required
      />
    </div>
    <div className="flex items-center">
      <label className="w-1/4" htmlFor="phone">
        Phone:
      </label>
      <input
        className="flex-1 border border-gray-500 rounded py-1 px-2"
        type="tel"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        required
      />
    </div>
    <div className="flex items-start">
      <label className="w-1/4" htmlFor="authorizedPersons">
        Authorized Persons:
      </label>
      <textarea
        className="flex-1 border border-gray-500 rounded py-1 px-2"
        id="authorizedPersons"
        name="authorizedPersons"
        value={formData.authorizedPersons}
        onChange={handleChange}
        required
      ></textarea>
    </div>
    <button
    onClick={handleSave}
      className="border-2 border-blue-500 rounded px-4 py-2 text-blue-500 hover:bg-blue-500 hover:text-white"
      type="submit"
    >
      Save
    </button>
  </form>
</div>
  );
};

export default ShippingForm;
