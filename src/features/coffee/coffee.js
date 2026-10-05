import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coffees: [],
  loading: false,
  error: null,
};

const coffee = createSlice({
  name: "coffee",
  initialState,

  reducers: {
    getCoffeeDetaStart: (state) => {
      state.loading = true;
    },

    getCoffeeDetaSucess: (state, action) => {
      (state.coffees.push(action.payload), (state.loading = false));
    },

    getCoffeeFailure: (state, action) => {
      state.error = action.payload;
    },
    addToCart: (state, action) => {
      const existingCoffee = state.coffees.find(
        (item) => item.id === action.payload.id,
      );

      if(existingCoffee){
        existingCoffee.quantity += 1;
      }else{
        state.coffees.push(action.payload)
      }
    },
  },
});

export const { getCoffeeDetaStart, getCoffeeDetaSucess, getCoffeeFailure } =
  coffee.actions;

export default coffee.reducer;
