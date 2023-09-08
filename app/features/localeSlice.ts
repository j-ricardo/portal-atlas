import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import en from "../../public/static/locales/en.json";

export interface LocaleLang {
    language: string;
    languageJson: any;
}

const initialState: LocaleLang = {
    language: 'en',
    languageJson: en
}

export const localeSlice = createSlice({
    name: "localeLang",
    initialState,    
    reducers: {
        changeLocale: (state, action: PayloadAction<LocaleLang>) => {
            state = action.payload;
        },
    },
});

export const { changeLocale } = localeSlice.actions;
export const langSelector = (state: RootState) => state.localeReducer;
export default localeSlice.reducer;