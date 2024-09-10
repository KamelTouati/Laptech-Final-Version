import { predictionModelActions } from "../slices/predictionModelSlice";
import djangoRequest from "../../utils/djangoRequest";
import { toast } from "react-toastify";

// Predict Product Price
export function predictProductPrice(newProduct) {
  return async (dispatch, getState) => {
    try {
      dispatch(predictionModelActions.setLoading());
      console.log("newProduct", newProduct);
      const { data } = await djangoRequest.post(
        "/api/laptops/predictPrice",
        newProduct,
        {
          headers: {
            Authorization: "Bearer " + getState().auth.user.token,
          },
        }
      );
      dispatch(predictionModelActions.predict(data));
      toast.success("Product Predicted successfully");
      dispatch(predictionModelActions.clearLoading());
    } catch (error) {
      toast.error(error.response.data.message);
      dispatch(predictionModelActions.clearLoading());

    }
  };
}