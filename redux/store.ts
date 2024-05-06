import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './features/cart/cartSlice'
import accessToken from "@/redux/features/token/tokenSlice";
import { ecommerceApi } from "./api";
import userProfileSlice from "./features/userProfile/userProfileSlice";

// create store
export const makeStore = () => {
  return configureStore({
    reducer: {
        accessToken: accessToken,
        [ecommerceApi.reducerPath]: ecommerceApi.reducer,
        cart: cartSlice,
        userProfile: userProfileSlice,
        

    },
    middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(ecommerceApi.middleware),
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>

export type AppDispatch = AppStore['dispatch']
