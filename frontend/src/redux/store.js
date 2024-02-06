import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/authSlice";
import { categoryReducer } from "./slices/categorySlice";
import { commentReducer } from "./slices/commentSlice";
import { passwordReducer } from "./slices/passwordSlice";
import { productReducer } from "./slices/productSlice";
import { profileReducer } from "./slices/profileSlice";

const store = configureStore({
    reducer: {
       auth: authReducer,
       profile: profileReducer,
       product: productReducer,
       category: categoryReducer,
       comment: commentReducer,
       password: passwordReducer,
    }
});

export default store;