// import { createReducer } from "@reduxjs/toolkit";

// const initialState={
//     isAuthenticated:false,
//     loading:false,
//     user:{},
//     error:null
// };

// export const userReducer = createReducer(initialState,{
//     userRegisterRequest: state => {
//         state.loading = true;
//         state.isAuthenticated=false
//     },
//     userRegisterSuccess: (state,action) =>{
//         state.loading=false;
//         state.isAuthenticated=true;
//         state.user = action.payload;
//     },
//     userRegisterFailed:(state,action)=>{
//         state.loading=false;
//         state.isAuthenticated=false;
//         state.error = action.payload;
//     },
//     userLoadRequest: state => {
//         state.loading = true;
//         state.isAuthenticated=false
//     },
//     userLoadSuccess: (state,action) =>{
//         state.loading=false;
//         state.isAuthenticated=true;
//         state.user = action.payload;
//     },
//     userLoadFailed:(state,action)=>{
//         state.loading=false;
//         state.isAuthenticated=false;
//         state.error = action.payload;
//     },
//     clearError:(state)=>{
//         state.error = null;
//     },
// })