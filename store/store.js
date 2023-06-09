import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./feature/auth/auth.slice";
import { blogsReducer } from "./feature/blogs/blogs.slice";
import { productsReducer } from "./feature/games/games.slice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    blogs: blogsReducer,
    auth: authReducer,
  },
});

export default store;
