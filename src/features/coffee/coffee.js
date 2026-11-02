
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async Thunk
export const getCoffeeData = createAsyncThunk(
  "coffee/getCoffeeData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://api.sampleapis.com/coffee/hot"
      );

      if (!response.ok) {
        return rejectWithValue("Failed to fetch coffee data");
      }

      const data = await response.json();

      return data.slice(0, 12);

    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Initial State
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
    addToCart: (state, action) => {
      const existingCoffee = state.cart.find(
        (item) => item.id === action.payload.id
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
      const coffee = state.cart.find(
        (item) => item.id === action.payload
      );

      if (coffee) {
        coffee.quantity += 1;
      }
    },

    decreaseQuantity: (state, action) => {
      const coffee = state.cart.find(
        (item) => item.id === action.payload
      );

      if (coffee && coffee.quantity > 1) {
        coffee.quantity -= 1;
      }
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (item) => item.id !== action.payload
      );
    },

    clearCart: (state) => {
      state.cart = [];
    },
  },

  // Extra Reducers
  extraReducers: (builder) => {
    builder
      .addCase(getCoffeeData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getCoffeeData.fulfilled, (state, action) => {
        state.loading = false;
        state.coffees = action.payload;
      })

      .addCase(getCoffeeData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

// Export Actions
export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} = coffee.actions;

// Export Reducer
export default coffee.reducer;
