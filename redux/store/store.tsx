
import signupslice from "../reducer/signupslice";
import loginslice from "../reducer/loginslice";
import { configureStore } from "@reduxjs/toolkit";

const Store = configureStore({
 reducer:{
    Signup:signupslice,
    Login: loginslice
 }   
})

export default Store;