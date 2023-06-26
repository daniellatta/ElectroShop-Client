"use client";
import { useState } from "react";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <div style={{ position: "relative", textAlign: "center" }}>
      <ShoppingCart />
    </div>
  );
}

export default App;
