import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {userRegister} from './authslice'
import axios from 'axios';

export const getUseres = createAsyncThunk ('users/get',  async(_ ,thunkAPI) =>{
    const {rejectWithValue , getState} = thunkAPI
  
 try{
    const token= getState().auth.token
    let res = await axios.get("https://thebeauwow.me/api/v1/admin/customers/",{
      headers: {
    'Content-Type': 'application/json', 
     'Authorization': `Bearer ${token}`,}
    
    })
    
    

      return res.data.results
  }
  
  catch (e) {
     
    return rejectWithValue(e.response.data);
}
  
  })
  const usersSlice= createSlice({
    name:'discounts',
    initialState : {usersList:[], isLoading:false, added:false ,addLoading:false, error:null},
    reducers:{
      clearstate:(state)=>{
        state.added= false
        state.updated= false
        state.error= false

      }

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
          state.added = false
      },
        [userRegister.fulfilled]:(state,action)=>{
          
          state.usersList= [...state.usersList, action.payload]
           state.added = true
      },
      [userRegister.rejected]:(state,action)=>{
          
        state.error = action.payload
        state.added = false
    },
     
       
    }


})
export const {clearstate} = usersSlice.actions
export default usersSlice.reducer