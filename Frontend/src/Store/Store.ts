import { configureStore } from "@reduxjs/toolkit";
import AsideMenuReducer from "./Slices/AsideMenuSlice";

export const store = configureStore({
    reducer: {
        asideMenu: AsideMenuReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;