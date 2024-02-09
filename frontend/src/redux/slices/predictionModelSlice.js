import { createSlice } from "@reduxjs/toolkit";

const predictionModel = createSlice({
  name: "predictionModel",
  initialState: {
    price: null,
    loading: false,
    isproductPredicted: false,
  },
  reducers: {
    predict(state, action) {
      state.price = action.payload;
    },
    setLoading(state) {
      state.loading = true;
    },
    clearLoading(state) {
      state.loading = false;
    },
    setIsProductPredicted(state) {
      state.isproductPredicted = true;
      state.loading = false;
    },
  },
});

const predictionModelReducer = predictionModel.reducer;
const predictionModelActions = predictionModel.actions;

export { predictionModelActions, predictionModelReducer };
