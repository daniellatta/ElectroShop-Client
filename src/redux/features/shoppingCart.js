import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products:
    typeof localStorage !== "undefined" && localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [],
};

const updateLocalStorage = (products) => {
  if (typeof localStorage !== "undefined") {
    localStorage.setItem("cart", JSON.stringify(products));
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addProduct: (state, action) => {
      const { item } = action.payload;
      const existingProduct = state.products.find(
        (product) => product.details.productID === item.productID
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.products.push({ details: { ...item }, quantity: 1 });
      }
      updateLocalStorage();
    },
    removeOne: (state, action) => {
      const { item } = action.payload;
      const existingProduct = state.products.find(
        (product) => product.details.productID === item.productID
      );
      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          existingProduct.quantity -= 1;
        } else {
          let filtered = state.products.filter(
            (product) => product.details.productID !== item.productID
          );
          console.log(filtered);
          state.products = filtered;
        }
        updateLocalStorage();
      }
    },
    deleteProduct: (state, action) => {
      const { productID } = action.payload;
      state.products = state.products.filter(
        (product) => product.details.productID !== productID
      );
      updateLocalStorage();
    },
    emptyCart: (state) => {
      state.products = [];
      updateLocalStorage();
    },
  },
});

export const { addProduct, removeOne, deleteProduct, emptyCart } =
  cartSlice.actions;

export default cartSlice.reducer;
