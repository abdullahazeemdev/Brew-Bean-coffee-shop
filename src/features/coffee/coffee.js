import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coffees: [],
  cart: [],
  loading: false,
  error: null,
};

const coffee = createSlice({
  name: "coffee",
  initialState,

  reducers: {
    getCoffeeDetaStart: (state) => {
      state.loading = true;
      state.error = null;
    },

    getCoffeeDetaSucess: (state, action) => {
      state.coffees = action.payload;
      state.loading = false;
    },

    getCoffeeFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    addToCart: (state, action) => {
      const existingCoffee = state.cart.find(
        (item) => item.id === action.payload.id,
      );

      if (existingCoffee) {
        existingCoffee.quantity += 1;
      } else {
        state.cart.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },

    increaseQuantity: (state, action) => {
      const coffee = state.cart.find((item) => item.id === action.payload);

      if (coffee) {
        coffee.quantity += 1;
      }
    },

    decreaseQuantity: (state, action) => {
      const coffee = state.cart.find((item) => item.id === action.payload);

      if (coffee && coffee.quantity > 1) {
        coffee.quantity -= 1;
      }
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  getCoffeeDetaStart,
  getCoffeeDetaSucess,
  getCoffeeFailure,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} = coffee.actions;

export default coffee.reducer;
