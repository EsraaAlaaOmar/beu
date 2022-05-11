import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {userRegister} from './authslice'


export const getUseres = createAsyncThunk ('users/get',  async(_ ,thunkAPI) =>{
    const {rejectWithValue , getState} = thunkAPI
  
  try{
    const token= getState().auth.token
  
    
    const  res= await fetch("https://test-beau-wow.herokuapp.com/api/v1/admin/users/admins/",
    
      {
          method: "GET",
          headers: {
              'Content-Type': 'application/json', 
               'Authorization': `Bearer ${token}`,
          
          }
      }
      )

      return res.json() 
  }
  catch(e){
    return rejectWithValue(e.message)
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
        [userRegister.fulfilled]:(state,action)=>{
          
          state.usersList= [...state.usersList, action.payload]
      },
     
       
    }


})
export default usersSlice.reducer