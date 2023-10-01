import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./../../app/store";

export interface MenuSelected {
    idMenu: number;
    keyName: string;
}

const initialState: MenuSelected = {
    idMenu: 1,
    keyName: 'projeto'
}

export const menuSlice = createSlice({
    name: "menuSelected",
    initialState,
    reducers: {
        changePage: (state, action: PayloadAction<MenuSelected>) => {
            state.idMenu = action.payload.idMenu;
            state.keyName = action.payload.keyName;
        },
    }
});

export const { changePage } = menuSlice.actions;
export const menuSelector = (state: RootState) => state.menuReducer;
export default menuSlice.reducer;