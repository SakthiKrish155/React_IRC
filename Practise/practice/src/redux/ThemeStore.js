import { configureStore } from "@reduxjs/toolkit";
import ThemeReducer from "./ThemeReducer";

export const ThemeStore = configureStore({
    reducer : ThemeReducer
})