import { createSlice } from '@reduxjs/toolkit';

let defaultProducts = [];

if (typeof localStorage !== 'undefined' && localStorage.cart) {
  defaultProducts = JSON.parse(localStorage.cart);
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: defaultProducts,
    isOpen: false,
  },
  reducers: {
    addProduct: (state, action) => {
      const { item } = action.payload;
      const existingProduct = state.products.find(
        (product) => product.details.id === item.id
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
        (product) => product.details.id === item.id
      );
      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          existingProduct.quantity -= 1;
        } else {
          let filtered = state.products.filter(
            (product) => product.details.id !== item.id
          );
          console.log(filtered);
          state.products = filtered;
        }
        localStorage?.setItem('cart', JSON.stringify(state.products));
      }
    },
    deleteProduct: (state, action) => {
      const { item } = action.payload;
      state.products = state.products.filter(
        (product) => product.details.id !== item.id
      );
      localStorage?.setItem('cart', JSON.stringify(state.products));
    },
    emptyCart: (state) => {
      state.products = [];
      localStorage?.setItem('cart', JSON.stringify(state.products));
    },
    hideCart: (state) => {
      state.isOpen = false;
    },
    showCart: (state) => {
      state.isOpen = true;
    },
  },
});

export const {
  addProduct,
  removeOne,
  deleteProduct,
  emptyCart,
  hideCart,
  showCart,
} = cartSlice.actions;

export default cartSlice.reducer;
