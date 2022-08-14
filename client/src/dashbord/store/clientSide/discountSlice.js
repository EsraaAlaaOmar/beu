import axios from 'axios';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const applyDiscount = createAsyncThunk ('applydiscount/add',  async(data,thunkAPI) =>{
  const {rejectWithValue , getState} = thunkAPI
///................................................................



try {
    const body= JSON.stringify(data)
    const token= getState().auth.token
    const response = await axios.post("https://thebeauwow.me/api/v1/order/apply-discount/", body, {
      headers: {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}`,
      }})
     
     return response.data
    }
catch(e){
  return rejectWithValue(e.response.data)
}

})

const brandslice= createSlice({
    name:'applydiscount',
    initialState : { afterApplying:null, isLoading:false, error:null},
    reducers:{
      clearstate:(state)=>{
        state.error= false

      }
    },
    extraReducers:{
     
      [ applyDiscount.pending ] :(state,action)=>{

          state.isLoading = true
          state.error = null
         
          
     
     },
     [ applyDiscount.fulfilled ] :(state,action)=>{
      state.isLoading = false
      
      state.error= null
      state.afterApplying = action.payload.price_in_discount
     
  
      
      },
      [ applyDiscount.rejected ] :(state,action)=>{
           state.isLoading = false
           state.error = action.payload
          
       
         
      }, 

    }
 

})
export const {clearstate} = brandslice.actions
export default brandslice.reducer
