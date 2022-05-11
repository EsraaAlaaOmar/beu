import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { adminRegister } from "./authslice";
export const getAdmins = createAsyncThunk ('admins/get',  async(_ ,thunkAPI) =>{
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
  const adminSlice= createSlice({
    name:'discounts',
    initialState : {adminsList:[], isLoading:false,addLoading:false, error:null},
    reducers:{

    },
    extraReducers:{
         // ............. start getAdmins ......................
        [ getAdmins.pending ] :(state,action)=>{

            state.isLoading = true
            state.error = null
            
          
       },
       [ getAdmins.fulfilled ] :(state,action)=>{
        state.isLoading = false
        state.error= null
        state.adminsList = action.payload
    
        
        },
        [ getAdmins.rejected ] :(state,action)=>{
             state.isLoading = false
             state.error = action.payload
           console.log(action)
           
        }, 
        // ............. end getAdmins ......................
     
        [adminRegister.fulfilled]:(state,action)=>{
          
            state.adminsList= [...state.adminsList, action.payload]
        },
    }


})
export default adminSlice.reducer