import axios from 'axios';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const getClientBrands = createAsyncThunk ('clientbrands/get',  async(_,thunkAPI) =>{
  const {rejectWithValue } = thunkAPI
///................................................................
try{
  let res = await axios.get(`https://thebeauwow.me/api/v1/brands/`,{
  headers: {
'Content-Type': 'application/json', 
}

})

  return res.data
}
catch(e){
  return rejectWithValue(e.response.data)
}

})
export const getBrandProducts = createAsyncThunk ('clientbrands/getproducts',  async(brandId,thunkAPI) =>{
  const {rejectWithValue } = thunkAPI
///................................................................
try{
  let res = await axios.get(`https://thebeauwow.me/api/v1/brand/detail/${brandId}`,{
  headers: {
'Content-Type': 'application/json', 
}

})

  return res.data
}
catch(e){
  return rejectWithValue(e.response.data)
}

})


const brandslice= createSlice({
    name:'clientbrands',
    initialState : { brands:[],products:[] ,isLoading:false, error:null},
    reducers:{
      clearstate:(state)=>{
        state.error= false

      }
    },
    extraReducers:{
     
      [ getClientBrands.pending ] :(state,action)=>{

          // state.isLoading = true
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
      [ getBrandProducts.pending ] :(state,action)=>{

        state.isLoading = true
        state.error = null
       
        
   
   },
   [ getBrandProducts.fulfilled ] :(state,action)=>{
    state.isLoading = false
    
    state.error= null
    state.products = action.payload.results
   

    
    },
    [ getBrandProducts.rejected ] :(state,action)=>{
         state.isLoading = false
         state.error = action.payload
        
     
       
    }, 

    }
 

})
export const {clearstate} = brandslice.actions
export default brandslice.reducer
