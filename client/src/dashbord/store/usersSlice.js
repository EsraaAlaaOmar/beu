import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {userRegister} from './authslice'
import axios from 'axios';

export const getUseres = createAsyncThunk ('users/get',  async(_ ,thunkAPI) =>{
    const {rejectWithValue , getState} = thunkAPI
  
 try{
    const token= getState().auth.token
    let res = await axios.get("https://thebeauwow.me/api/v1/admin/users/customers/",{
      headers: {
    'Content-Type': 'application/json', 
     'Authorization': `Bearer ${token}`,}
    
    })
    
    

      return res.data
  }
  
  catch (e) {
     
    return rejectWithValue(e.message);
}
  
  })
  const usersSlice= createSlice({
    name:'discounts',
    initialState : {usersList:[], isLoading:false,addLoading:false, error:null},
    reducers:{

    },
    extraReducers:{
         // ............. start getUseres ......................
        [ getUseres.pending ] :(state,action)=>{

            state.isLoading = true
            state.error = null
            
          
       },
       [ getUseres.fulfilled ] :(state,action)=>{
        state.isLoading = false
        state.error= null
        state.usersList = action.payload
    
        
        },
        [ getUseres.rejected ] :(state,action)=>{
             state.isLoading = false
             state.error = action.payload
           console.log(action)
           
        }, 
        // ............. end getUseres ......................
        [userRegister.pending]:(state,action)=>{
          
          state.error =null
      },
        [userRegister.fulfilled]:(state,action)=>{
          
          state.usersList= [...state.usersList, action.payload]
      },
      [userRegister.rejected]:(state,action)=>{
          
        state.error = action.payload
    },
     
       
    }


})
export default usersSlice.reducer