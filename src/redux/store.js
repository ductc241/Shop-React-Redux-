import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/user"
import cartSlide from "./slice/cart";

const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        cart: cartSlide.reducer
    }
});

export default store;
