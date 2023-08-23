import { combineReducers, configureStore } from "@reduxjs/toolkit";

import CheckoutReducer from "./CheckoutReducer";
import UserReducer from "./UserReducer";

const reducers = combineReducers({
    checkoutCart: CheckoutReducer.reducer,
    userDetails: UserReducer.reducer
});

const store = configureStore({
    reducer: reducers,
    devTools: process.env.NODE_ENV !== "production",
})

export default store