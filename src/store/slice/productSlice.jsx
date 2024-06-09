import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const productSlice = createSlice({
  initialState,
  name: "products",
  reducers: {
    load: (state, action) => {
      state.products = JSON.parse(localStorage.getItem("products"));
    },
  },
});

export default productSlice.reducer;

export const { load } = productSlice.actions;
