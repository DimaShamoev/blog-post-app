import { createSlice } from "@reduxjs/toolkit";

interface IAsideMenuSlice {
    isAsideOpen: boolean
};

const initialState: IAsideMenuSlice = {
    isAsideOpen: false,
};

const asideMenuSlice = createSlice({
    name: 'asideMenuSlice',
    initialState,
    reducers:{
        toggleAsideMenu: (state) => {
            state.isAsideOpen = !state.isAsideOpen;
        },
    },
});

export const { toggleAsideMenu } = asideMenuSlice.actions;
export default asideMenuSlice.reducer;