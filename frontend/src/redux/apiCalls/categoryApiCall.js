import { categoryActions } from "../slices/categorySlice";
import request from "../../utils/request";
import { toast } from "react-toastify";

// Fetch All Categories
export function fetchCategories() {
  return async (dispatch) => {
    try {
      const { data } = await request.get("/api/categories");
      dispatch(categoryActions.setCategories(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

// Create Category
export function createCategory(newCategory) {
  return async (dispatch, getState) => {
    try {
      dispatch(categoryActions.setLoading());
      // console.log(`newCategory ${newCategory}`);
      await request.post(`/api/categories`, newCategory, {
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
          "Content-Type": "multipart/form-data",
        },
      });

      dispatch(categoryActions.setIsCategoryCreated());
      setTimeout(
        () => dispatch(categoryActions.clearIsCategoryCreated()),
        2000
      ); // 2s
    } catch (error) {
      toast.error(error.response.data.message);
      dispatch(categoryActions.clearLoading());
    }
  };
}

// Delete Category
export function deleteCategory(categoryId) {
  return async (dispatch, getState) => {
    try {
      const { data } = await request.delete(`/api/categories/${categoryId}`, {
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
        },
      });
      dispatch(categoryActions.deleteCategory(data.categoryId));
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}
