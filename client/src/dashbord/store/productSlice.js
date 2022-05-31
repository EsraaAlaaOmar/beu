import axios from 'axios';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
let formData = new FormData(); 

export const getProducts = createAsyncThunk ('products/get',  async(collectionId ,thunkAPI) =>{
  const {rejectWithValue , getState} = thunkAPI
///................................................................



try{
  const token= getState().auth.token
  let res = await axios.get(`https://thebeauwow.me/api/v1/admin/category/detail/${collectionId}/`,{
  headers: {
'Content-Type': 'application/json', 
 'Authorization': `Bearer ${token}`,}

})
  return res.data.results
}
catch (e) {
     
  return rejectWithValue(e.message);
}

})


export const addProduct = createAsyncThunk ('product/add',  async(productData ,thunkAPI) =>{
  const {rejectWithValue , getState} = thunkAPI
  const token= getState().auth.token
//const token='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ2ODk0MzQ0LCJpYXQiOjE2NDYwMzAzNDQsImp0aSI6ImNlZGRmZjA0OTU2MDQ3NGZhNzAyOGM2MmJmNzJlNDRlIiwidXNlcl9pZCI6MX0.EJUZC1FE4XldJ8syppkdNHuuEyeDD8VeLHsOxUoM-lU'
let galleries=[]
try{
  formData.append('category_id', productData.category_id);   //append the values with key, value pair
  formData.append('title', productData.title);
  formData.append('description', productData.description);
  formData.append('unit_price', productData.unit_price);
  formData.append('quantity', productData.quantity);
  // formData.append('sizes', productData.sizes);
  console.log( productData.sizes)
  formData.append('gain_points', productData.gain_points);
  for (let i = 0; i < productData.galleries.length; i++) {
    formData.append(`galleries[${i}]image`, productData.galleries[i].image);
    formData.append(`galleries[${i}]color_hex`, productData.galleries[i].color_hex);
    formData.append(`galleries[${i}]priority`, productData.galleries[i].priority);
  }
  for (let i = 0; i < productData.sizes.length; i++) {
    formData.append(`sizes[${i}]size_id`, productData.sizes[i].id);
  }

 
  const config = {     
    headers: { 'content-type': 'multipart/form-data',
               'Authorization': `Bearer ${token}`,
  }
}
const response =await axios.post("https://thebeauwow.me/api/v1/admin/products/create/", formData, config)
 console.log(response.data)
 console.log(productData)
   return {...productData, ...response.data}
   
    

 }
catch(e){
  return rejectWithValue(e.message)
  
}

})
 export const editeProduct = createAsyncThunk ('product/Edite',  async(productData ,thunkAPI) =>{
  const {rejectWithValue , getState} = thunkAPI
  const token= getState().auth.token
  try{
    let formData = new FormData(); 
    formData.append('category_id', productData.category_id);   //append the values with key, value pair
    formData.append('title', productData.title);
    formData.append('description', productData.description);
    formData.append('unit_price', productData.unit_price);
    formData.append('quantity', productData.quantity);

    formData.append('product_id', productData.product_id);
    
    for (let i = 0; i < productData.galleries.length; i++) {
      formData.append(`galleries[${i}]image`, productData.galleries[i].image);
      formData.append(`galleries[${i}]color_hex`, productData.galleries[i].color_hex);
      formData.append(`galleries[${i}]priority`, productData.galleries[i].priority);
    }
    for (let i = 0; i < productData.sizes.length; i++) {
      formData.append(`sizes[${i}]size_id`, productData.sizes[i].id);
    }
    // formData.append('sizes', productData.sizes);
    const config = {     
      headers: { 'content-type': 'multipart/form-data',
                 'Authorization': `Bearer ${token}`,
    }
  }
  const response = await axios.put("https://thebeauwow.me/api/v1/admin/products/update/", formData, config)
  
    if(response.status == 200) {
    
      return productData
   
    }
  
  
   }
  catch(e){
    return rejectWithValue(e.message)
    
  }
 

})

const productSlice= createSlice({
    name:'product',
    initialState : { products:[], isLoading:false,prodectAdded:false, productupdated:false, error:null},
    reducers:{
      clearstate:(state)=>{
        state.prodectAdded= false
        state.productupdated= false
      }
    },
    extraReducers:{
     
      [ getProducts.pending ] :(state,action)=>{

          state.isLoading = true
          state.error = null
         
          // state.productupdated=false
     
     },
     [ getProducts.fulfilled ] :(state,action)=>{
      state.isLoading = false
      
      state.error= null
      state.products = action.payload
  
      
      },
      [ getProducts.rejected ] :(state,action)=>{
           state.isLoading = false
           state.error = action.payload
          
          //  state.productupdated=false
         
      }, 
      [ addProduct.pending ] :(state,action)=>{

        state.isLoading = true
        state.error = null
        state.prodectAdded=false
        state.productupdated=false
   
   },
   [ addProduct.fulfilled ] :(state,action)=>{
    state.isLoading = false
    state.prodectAdded=true
    state.productupdated=false
    state.error= null
 

    
    },
    [ addProduct.rejected ] :(state,action)=>{
         state.isLoading = false
         state.error = action.payload
         state.prodectAdded=false
         state.productupdated=false
     
       
    },
    [ editeProduct.pending ] :(state,action)=>{

      state.isLoading = true
      state.error = null
      state.productupdated=false
 
 },
 [ editeProduct.fulfilled ] :(state,action)=>{
  state.isLoading = false
  state.productupdated=true
  state.error= null


  
  },
  [ editeProduct.rejected ] :(state,action)=>{
       state.isLoading = false
       state.error = action.payload
       state.productupdated=false
   
     
  },
    }
 

})
export const {clearstate} = productSlice.actions
export default productSlice.reducer