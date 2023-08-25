// import axios from 'axios'
// import { URI } from '../uri'
// import { Dispatch } from 'react';

// export const registerUser = (name: string, email: string, password: string, ConfirmPassword: string) =>
//     async (dispatch: Dispatch<any>) => {
//         try {
//             dispatch({
//                 type: 'userRegisterRequest'
//             });

//             const config = { headers: { 'Content-Type': 'applicaton/json' } };
//             const { data } = await axios.post(`${URI}/registration`,
//                 { name, email, password, ConfirmPassword },config);

//             dispatch({
//                 type: 'userRegisterSuccess',
//                 payload: data.user
//             });
//         } catch (error: any) {
//             dispatch({
//                 type: 'userRegisterFailed',
//                 payload: error.response.data.message,
//             })
//         }
//     }
