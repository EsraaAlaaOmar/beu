// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import Cookies from "universal-cookie";
// import axios from 'axios';
// const cookies = new Cookies();
// export const userSignUp = createAsyncThunk ('user/register', 
//     async(data ,thunkAPI) =>{
//     const {rejectWithValue} = thunkAPI
//     try{
//       const body= JSON.stringify(data)
//       const response = await axios.post("https://thebeauwow.me/api/v1/customer/register/", body, {
//         headers: {
//           'Content-Type': 'application/json',
          
//         }})
//         return ({...data, ...response.data}) 
       
//     }
//     catch (e) {
//       return rejectWithValue(e.response.data);
//   }
   

// })
// const clientSlice = createSlice({
//     name:clientUser,
//     initialState: { loggedIn: cookies.get("login")?cookies.get("login"):false, userInfo:cookies.get("userinfo")?cookies.get("userinfo"):null, isLoading:false, error:null, adminDetailsdata:{}, token:cookies.get("token")? cookies.get("token"):"",},
//     reducers:{
//       logOut:(state)=>{
//         cookies.set("login",false)
//         cookies.set("token",null)
//         cookies.set("userDetails", null)
//          cookies.set("userinfo", null)
//         localStorage.clear();
//         state.token=null;
//         state.loggedIn=false;
//      state.userInfo=false;
//      state.userDetails=false;
       
       
    
       
//       },
    
// })