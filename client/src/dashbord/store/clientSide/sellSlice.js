import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
let formData = new FormData(); 

export const sell = createAsyncThunk ('clinetSell/add',  async(sellData ,thunkAPI) =>{
    const {rejectWithValue , getState} = thunkAPI
    const token= getState().auth.token
  //const token='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ2ODk0MzQ0LCJpYXQiOjE2NDYwMzAzNDQsImp0aSI6ImNlZGRmZjA0OTU2MDQ3NGZhNzAyOGM2MmJmNzJlNDRlIiwidXNlcl9pZCI6MX0.EJUZC1FE4XldJ8syppkdNHuuEyeDD8VeLHsOxUoM-lU'
  
    formData.append('full_name', sellData.full_name);   //append the values with key, value pair
    formData.append('email', sellData.email);
    formData.append('phone', sellData.phone);
    formData.append('brand_name_english', sellData.brand_name_english);
    formData.append('brand_name_arabic', sellData.brand_name_arabic);
    formData.append('country_id', sellData.country_id);
    formData.append('city_id', sellData.city_id);
    formData.append('logo', sellData.logo);
    formData.append('social_media', sellData.social_media);
    formData.append('comment', sellData.comment);
    formData.append('country_id', sellData.country_id);
    formData.append('city_id', sellData.city_id);
    // formData.append('files', sellData.files);
    formData.append('categories', sellData.categories);
    for (let i = 0; i < sellData.files.length; i++) {
        formData.append(`files[${i}]file`, sellData.files[i]);
      }
   
    const config = {     
      headers: { 'content-type': 'multipart/form-data',
                 'Authorization': `Bearer ${token}`,
    }
  }
  try{
  const response =await axios.post("https://thebeauwow.me/api/v1/sell_in_beau_wow/create/", formData, config)
   console.log(response.data)
   console.log(sellData)
     return response.data
  
     
      
  
   }
   catch(e){
    return rejectWithValue(e.response.data)
  }
  
  
  
  
  })