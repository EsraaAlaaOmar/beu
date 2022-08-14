import axios from 'axios';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const getAddresses = createAsyncThunk ('Addresses/get',  async(_,thunkAPI) =>{
  const {rejectWithValue , getState} = thunkAPI
///................................................................



try{
  const token= getState().auth.token

  let res = await axios.get(`https://thebeauwow.me/api/v1/customer/addresses/`,{
  headers: {
'Content-Type': 'application/json', 
 'Authorization': `Bearer ${token}`}

})

  return res.data
}
catch(e){
  return rejectWithValue(e.response.data)
}

})

const addresslice= createSlice({
    name:'Addresses',
    initialState : { addresses:[], isLoading:false, error:null},
    reducers:{
      clearstate:(state)=>{
        state.error= false

      }
    },
    extraReducers:{
     
      [ getAddresses.pending ] :(state,action)=>{

          state.isLoading = true
          state.error = null
         
          
     
     },
     [ getAddresses.fulfilled ] :(state,action)=>{
      state.isLoading = false
      
      state.error= null
      state.addresses = action.payload
     
  
      
      },
      [ getAddresses.rejected ] :(state,action)=>{
           state.isLoading = false
           state.error = action.payload
          
       
         
      }, 

    }
 

})
export const {clearstate} = addresslice.actions
export default addresslice.reducer
