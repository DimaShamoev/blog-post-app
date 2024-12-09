import { configureStore } from "@reduxjs/toolkit";
import AsideMenuReducer from "./Slices/AsideMenuSlice";
import BlogLikeReducer from "./Slices/BlogLikeSlice";

export const store = configureStore({
    reducer: {
        asideMenu: AsideMenuReducer,
        blogLike: BlogLikeReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;