import axios from 'axios';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
let formData = new FormData(); 

export const getProducts = createAsyncThunk ('products/get',  async(brandId ,thunkAPI) =>{
  const {rejectWithValue , getState} = thunkAPI
///................................................................



try{
  const token= getState().auth.token
  let res = await axios.get(`https://thebeauwow.me/api/v1/brand/detail/${brandId}/`,{
  headers: {
'Content-Type': 'application/json', 
 'Authorization': `Bearer ${token}`,}

})
  return res.data.results
}
catch(e){
  return rejectWithValue(e.response.data)
}

})

const productSlice= createSlice({
    name:'product',
    initialState : { products:[], isLoading:false,prodectAdded:false, productupdated:false,deleted:false, error:null},
    reducers:{
      clearstate:(state)=>{
        state.prodectAdded= false
        state.productupdated= false
        state.deleted=false
        state.error= false

      }
    },
    extraReducers:{
     
      [ getProducts.pending ] :(state,action)=>{

          state.isLoading = true
          state.error = null
         
          
     
     },
     [ getProducts.fulfilled ] :(state,action)=>{
      state.isLoading = false
      
      state.error= null
      state.products = action.payload
  
      
      },
      [ getProducts.rejected ] :(state,action)=>{
           state.isLoading = false
           state.error = action.payload
          
       
         
      }, 
    }
 

})
export const {clearstate} = productSlice.actions
export default productSlice.reducer