import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
export const getBrands = createAsyncThunk ('brands/get',  async(collectionId ,thunkAPI) =>{
  const {rejectWithValue , getState} = thunkAPI
///................................................................


try{
  const token= getState().auth.token
  let res = await axios.get(`https://thebeauwow.me/api/v1/admin/category/detail/${collectionId}/`,{
  headers: {
    'Content-Type': 'application/json', 
    'Authorization': `Bearer ${token}`,
       }
})
  return res.data
}
catch (e) {
 return rejectWithValue(e.response.data)
}

})
export const addDiscount = createAsyncThunk ('discounts/add',  async(discountData ,thunkAPI) =>{
  const {rejectWithValue , getState} = thunkAPI
  const token= getState().auth.token
//const token='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ2ODk0MzQ0LCJpYXQiOjE2NDYwMzAzNDQsImp0aSI6ImNlZGRmZjA0OTU2MDQ3NGZhNzAyOGM2MmJmNzJlNDRlIiwidXNlcl9pZCI6MX0.EJUZC1FE4XldJ8syppkdNHuuEyeDD8VeLHsOxUoM-lU'
try{
 let  body= JSON.stringify(discountData)
  const res= await axios.post("https://thebeauwow.me/api/v1/admin/discounts/create/",body, {headers: {
          'Content-Type': 'application/json', 
           'Authorization': `Bearer ${token}`,
      }
      })

  if(res.status == 201) {
    return {...discountData , ...res.data}
  }  
   
  

}
catch (e) {
     
 return rejectWithValue(e.response.data)
}

})

export const editeDiscount = createAsyncThunk ('discount/update',  async(editedDiscountData,thunkAPI) =>{
  const {rejectWithValue , getState} = thunkAPI
  const token= getState().auth.token
  const config = {     
    headers: { 'content-type': 'application/json',
               'Authorization': `Bearer ${token}`,
  }}
try{

let body= JSON.stringify(editedDiscountData)
let response = await axios.put("https://thebeauwow.me/api/v1/admin/discounts/update/", body, config)

  if(response.status == 200) {
    return  ({...editedDiscountData, ...response.data}) 
  }


 
}
catch (e) {
     
 return rejectWithValue(e.response.data)
}


})
const brandSlice= createSlice({
    name:'Brands',
    initialState : {brandList:[], isLoading:false,added:false,updated:false, error:null},
    reducers:{
      clearstate:(state)=>{
        state.added= false
        state.updated= false
        state.error= false

      }

    },
    extraReducers:{
     
        [ getBrands.pending ] :(state,action)=>{

            state.isLoading = true
            state.error = null
            
       
       },
       [ getBrands.fulfilled ] :(state,action)=>{
        state.isLoading = false
        state.error= null
        state.brandList = action.payload.results
    
        
        },
        [ getBrands.rejected ] :(state,action)=>{
             state.isLoading = false
             state.error = action.payload
           console.log(action)
           
        }, 
        [ addDiscount.pending ] :(state,action)=>{

          state.isLoading = true
          state.error = null
          
        //  console.log(action)
     },
     [ addDiscount.fulfilled ] :(state,action)=>{
      state.isLoading = false
      state.error= null
      state.brandList= [...state.brandList, action.payload]
      state.added=true
      
   
      
      },
      [ addDiscount.rejected ] :(state,action)=>{
           state.isLoading = false
           state.error = action.payload

         
      }, 
      [ editeDiscount.pending ] :(state,action)=>{

        state.isLoading = true
        state.error = null
     
      
   },
   [ editeDiscount.fulfilled ] :(state,action)=>{
    state.isLoading = false;
    state.error= null;
    state.updated=true
    console.log(action.payload)
    const index = state.brandList.findIndex(discount => discount.id == action.payload.discount_id);                                                            
    const newArray = [...state.brandList]; 
    if(index)
    {  newArray[index] = action.payload;}
   state.brandList=newArray ;

    
    },

    [ editeDiscount.rejected ] :(state,action)=>{
         state.isLoading = false
         state.error = action.payload
       console.log(action)
       
    }, 
    }


})
export const {clearstate} = brandSlice.actions
export default brandSlice.reducer
