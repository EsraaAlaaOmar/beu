import axios from 'axios';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
let formData = new FormData(); 

export const getClientProducts = createAsyncThunk ('clientproducts/get',  async(data ,thunkAPI) =>{
  const {rejectWithValue , getState} = thunkAPI
///................................................................



try{
  const token= getState().auth.token
  let  body= JSON.stringify(data)
  let res = await axios.get(`https://thebeauwow.me/api/v1/products/`, { params:data },{
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

export const getFilteredProducts = createAsyncThunk ('clientproducts/get',  async(data ,thunkAPI) =>{
  const {rejectWithValue , getState} = thunkAPI
///................................................................



try{
  const token= getState().auth.token
  let  body= JSON.stringify(data)
  let res = await axios.get(`https://thebeauwow.me/api/v1/products/`, { params:data },{
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


const productSlice= createSlice({
    name:'clientproducts',
    initialState : { products:[],filter:false,count:0, isLoading:false,prodectAdded:false, productupdated:false,deleted:false, error:null},
    reducers:{
      clearstate:(state)=>{
        state.prodectAdded= false
        state.productupdated= false
        state.deleted=false
        state.error= false

      }
    },
    extraReducers:{
     
      [ getClientProducts.pending ] :(state,action)=>{

          state.isLoading = true
          state.error = null
         
          
     
     },
     [ getClientProducts.fulfilled ] :(state,action)=>{
      state.isLoading = false
      
      state.error= null
      state.products = action.payload.results
      state.count = action.payload.count
  
      
      },
      [ getClientProducts.rejected ] :(state,action)=>{
           state.isLoading = false
           state.error = action.payload
          
       
         
      }, 

      [ getFilteredProducts.pending ] :(state,action)=>{

        state.isLoading = true
        state.filter=false
        state.error = null
       
        
   
   },
   [ getFilteredProducts.fulfilled ] :(state,action)=>{
    state.isLoading = false
    state.filter=true
    state.error= null
    state.products = action.payload.results
    state.count = action.payload.count

    
    },
    [ getFilteredProducts.rejected ] :(state,action)=>{
         state.isLoading = false
         state.filter=false
         state.error = action.payload
        
     
       
    }, 
    }
 

})
export const {clearstate} = productSlice.actions
export default productSlice.reducer