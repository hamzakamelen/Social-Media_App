import { createSlice } from "@reduxjs/toolkit";

const LoginSlice = createSlice({
    name: "Login",
    initialState: {
        email: '',
        password: '',
    },
    reducers: {
        add(state, action) {
            state.email = action.payload.email;
            state.password = action.payload.password;
        }
    }
});

export const { add } = LoginSlice.actions;
export default LoginSlice.reducer;
