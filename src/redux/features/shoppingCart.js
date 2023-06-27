import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: JSON.parse(localStorage?.getItem('cart')) || [],
  },
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
      localStorage?.setItem('cart', JSON.stringify(state.products));
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
        localStorage?.setItem('cart', JSON.stringify(state.products));
      }
    },
    deleteProduct: (state, action) => {
      const { productID } = action.payload;
      state.products = state.products.filter(
        (product) => product.details.productID !== productID
      );
      localStorage?.setItem('cart', JSON.stringify(state.products));
    },
    emptyCart: (state) => {
      state.products = [];
      localStorage?.setItem('cart', JSON.stringify(state.products));
    },
  },
});

export const { addProduct, removeOne, deleteProduct, emptyCart } =
  cartSlice.actions;

export default cartSlice.reducer;
