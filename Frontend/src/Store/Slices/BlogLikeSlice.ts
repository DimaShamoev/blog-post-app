import { createSlice } from "@reduxjs/toolkit";

interface IBlogLikeState {
    isLiked: boolean 
    cnt: number
}

const initialState: IBlogLikeState = {
    isLiked: false,
    cnt: 0
}

const blogLikeSlice = createSlice({
    name: "BlogLike",
    initialState,
    reducers: {
        toggleLike: (state) => {
            state.isLiked = !state.isLiked;
        },
        likeIncrement: (state) => {
            state.cnt++
        },
        likeDecrement: (state) => {
            state.cnt--
        }
    }
})

export const { toggleLike, likeIncrement, likeDecrement } = blogLikeSlice.actions;
export default blogLikeSlice.reducer;