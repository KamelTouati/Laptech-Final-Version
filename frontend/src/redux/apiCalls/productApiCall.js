import { productActions } from "../slices/productSlice";
import request from "../../utils/request";
import { toast } from "react-toastify";

// Fetch Products Based On Page Number
export function fetchProducts(pageNumber) {
  return async (dispatch) => {
    try {
      const { data } = await request.get(`/api/products?pageNumber=${pageNumber}`);
      dispatch(productActions.setProducts(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

// Get Products Count
export function getProductsCount() {
  return async (dispatch) => {
    try {
      const { data } = await request.get(`/api/products/count`);
      dispatch(productActions.setProductsCount(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

// Fetch Products Based On Category
export function fetchProductsBasedOnCategory(category) {
  return async (dispatch) => {
    try {
      const { data } = await request.get(`/api/products?category=${category}`);
      dispatch(productActions.setProductsCate(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

// Create Product
export function createProduct(newProduct) {
  return async (dispatch, getState) => {
    try {
      dispatch(productActions.setLoading());
      await request.post(`/api/products`, newProduct, {
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
          "Content-Type": "multipart/form-data",
        },
      });

      dispatch(productActions.setIsProductCreated());
      setTimeout(() => dispatch(productActions.clearIsProductCreated()), 2000); // 2s
    } catch (error) {
      toast.error(error.response.data.message);
      dispatch(productActions.clearLoading());
    }
  };
}

// Fetch Single Product
export function fetchSingleProduct(productId) {
  return async (dispatch) => {
    try {
      const { data } = await request.get(`/api/products/${productId}`);
      dispatch(productActions.setProduct(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

// Toggle Like Product
export function toggleLikeProduct(productId) {
  return async (dispatch,getState) => {
    try {
      const { data } = await request.put(`/api/products/like/${productId}`, {}, {
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
        }
      });
      dispatch(productActions.setLike(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

// Update Product Image
export function updateProductImage(newImage,productId) {
  return async (dispatch,getState) => {
    try {
      await request.put(`/api/products/update-image/${productId}`, newImage, {
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
          "Content-Type":"multipart/form-data",
        }
      });
      toast.success("New Product image uploaded successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

// Update Product
export function updateProduct(newProduct,productId) {
  return async (dispatch,getState) => {
    try {
      const { data } = await request.put(`/api/products/${productId}`, newProduct, {
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
        }
      });
      dispatch(productActions.setProduct(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

// Delete Product
export function deleteProduct(productId) {
  return async (dispatch,getState) => {
    try {
      const { data } = await request.delete(`/api/products/${productId}`, {
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
        }
      });
      dispatch(productActions.deleteProduct(data.productId));
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

// Get All Products
export function getAllProducts() {
  return async (dispatch) => {
    try {
      const { data } = await request.get(`/api/products`);
      dispatch(productActions.setProducts(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}