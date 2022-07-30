import axios from 'axios';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const getClientBrands = createAsyncThunk ('clientbrands/get',  async(_,thunkAPI) =>{
  const {rejectWithValue , getState} = thunkAPI
///................................................................



try{
  const token= getState().auth.token

  let res = await axios.get(`https://thebeauwow.me/api/v1/brands/`,{
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

const brandslice= createSlice({
    name:'clientbrands',
    initialState : { brands:[], isLoading:false, error:null},
    reducers:{
      clearstate:(state)=>{
        state.error= false

      }
    },
    extraReducers:{
     
      [ getClientBrands.pending ] :(state,action)=>{

          state.isLoading = true
          state.error = null
         
          
     
     },
     [ getClientBrands.fulfilled ] :(state,action)=>{
      state.isLoading = false
      
      state.error= null
      state.brands = action.payload.results
     
  
      
      },
      [ getClientBrands.rejected ] :(state,action)=>{
           state.isLoading = false
           state.error = action.payload
          
       
         
      }, 

    }
 

})
export const {clearstate} = brandslice.actions
export default brandslice.reducer
