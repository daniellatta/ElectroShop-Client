import React from "react";
import { Container } from "./Styles";

const HeaderText = () => {
  return (
    <section className="text-white py-8">
      <Container className="text-center font-4xl drop-shadow-md p-4 mx-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black uppercase">
        Electroshop
      </Container>
    </section>
  );
};

export default HeaderText;
