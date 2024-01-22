import {createSlice}  from '@reduxjs/toolkit';

const initialState = {
    accessToken : ""
}
const AccessTokenData = createSlice({
    name : "token",
    initialState,

    reducers : {
        tokenData : (state = initialState, action)=>{
            state.accessToken = action.payload;
        }
    }
})
export const { tokenData } = AccessTokenData.actions;
export default AccessTokenData.reducer;