import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    categories: [],
    loading: false,
    iscategoryCreated: false,
  },
  reducers: {
    setCategories(state, action) {
      state.categories = action.payload;
    },
    addCategory(state, action) {
      state.categories.push(action.payload);
    },
    setLoading(state) {
      state.loading = true;
    },
    clearLoading(state) {
      state.loading = false;
    },
    setIsCategoryCreated(state) {
      state.iscategoryCreated = true;
      state.loading = false;
    },
    clearIsCategoryCreated(state) {
      state.iscategoryCreated = false;
    },
    deleteCategory(state, action) {
      state.categories = state.categories.filter(
        (c) => c._id !== action.payload
      );
    },
  },
});

const categoryReducer = categorySlice.reducer;
const categoryActions = categorySlice.actions;

export { categoryActions, categoryReducer }