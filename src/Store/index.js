import { configureStore } from "@reduxjs/toolkit";
import AccessTokenData from "./features/AccessTokenData";

export const store = configureStore({
    reducer : {
        AccessToken : AccessTokenData,
    }
})