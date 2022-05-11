import axios from 'axios';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
let formData = new FormData(); 

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
  formData.append('overall_quantity', productData.overall_quantity);
  formData.append('sizes', productData.sizes);
  formData.append('gain_points', productData.gain_points);
  for (let i = 0; i < productData.galleries.length; i++) {
    formData.append(`galleries[${i}]image`, productData.galleries[i].image);
    formData.append(`galleries[${i}]color_hex`, productData.galleries[i].color_hex);
    formData.append(`galleries[${i}]priority`, productData.galleries[i].priority);
  }
  for (let i = 0; i < productData.sizes.length; i++) {
    formData.append(`sizes[${i}]size_id`, productData.sizes[i].size_id);
  }

 
  const config = {     
    headers: { 'content-type': 'multipart/form-data',
               'Authorization': `Bearer ${token}`,
  }
}
const response =await axios.post("https://test-beau-wow.herokuapp.com/api/v1/admin/products/create/", formData, config)
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
    formData.append('overall_quantity', productData.overall_quantity);
    formData.append('gain_points', productData.gain_points);
    formData.append('product_id', productData.product_id);
    
    for (let i = 0; i < productData.galleries.length; i++) {
      formData.append(`galleries[${i}]image`, productData.galleries[i].image);
      formData.append(`galleries[${i}]color_hex`, productData.galleries[i].color_hex);
      formData.append(`galleries[${i}]priority`, productData.galleries[i].priority);
    }
    for (let i = 0; i < productData.sizes.length; i++) {
      formData.append(`sizes[${i}]size_id`, productData.sizes[i].size_id);
    }
  
    const config = {     
      headers: { 'content-type': 'multipart/form-data',
                 'Authorization': `Bearer ${token}`,
    }
  }
  const response = await axios.put("https://test-beau-wow.herokuapp.com/api/v1/admin/products/update/", formData, config)
  
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
    initialState : { product:'', isLoading:false,addLoading:false, error:null},
    reducers:{

    },
 

})
export default productSlice.reducer