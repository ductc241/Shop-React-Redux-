import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login } from "../../api/user";

export const signin = createAsyncThunk(
    'user/login',
    async (user) => {
        const {data} = await login(user)
        return data
    }
)

const userSlice = createSlice({
    name: 'user',

    initialState: {
        isLogin: false,
        user: null
    },
    
    extraReducers: (builder) => {
        builder.addCase(signin.fulfilled, (state, action) => {
            state.user = action.payload
            state.isLogin = true
        })
    }
})

export default userSlice