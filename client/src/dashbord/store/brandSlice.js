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
export const addBrand =createAsyncThunk ('brand/add',  async(brandData ,thunkAPI) =>{
  let formData = new FormData(); 
const {rejectWithValue , getState} = thunkAPI
const token= getState().auth.token
try {
  //const response = await fetch(`url`); //where you want to fetch data
  //Your Axios code part.
  const body= JSON.stringify(brandData)
  formData.append('title', brandData.title);
  formData.append(`image`, brandData.image);
  formData.append(`category_id`, brandData.category_id);
 
  const response = await axios.post("https://thebeauwow.me/api/v1/admin/brand/create/", formData, {
    headers: {
      'Content-Type': 'application/json', 
      'Authorization': `Bearer ${token}`,
    }})
   return {...response.data , ...brandData }
  }
  catch (e) {
   
   return rejectWithValue(e.response.data);
}
})

export const editeBrand = createAsyncThunk ('discount/update',  async(editedBrandData,thunkAPI) =>{
  const {rejectWithValue , getState} = thunkAPI
  const token= getState().auth.token
  const config = {     
    headers: { 'content-type': 'application/json',
               'Authorization': `Bearer ${token}`,
  }}
try{

let body= JSON.stringify(editedBrandData)
let response = await axios.put("https://thebeauwow.me/api/v1/admin/discounts/update/", body, config)

  if(response.status == 200) {
    return  ({...editedBrandData, ...response.data}) 
  }


 
}
catch (e) {
     
 return rejectWithValue(e.response.data)
}


})

export const deleteBrand=   createAsyncThunk ('brand/delete',  async(id ,thunkAPI) =>{
  const {rejectWithValue , getState} = thunkAPI
  const token= getState().auth.token
  try {
    const body= JSON.stringify(id)
    const response = await axios.delete("https://thebeauwow.me/api/v1/admin/category/delete/", {
      headers: {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}`,
      },data: body})
      if(response.status==200)
     return id 
    } 
    catch (e) {
   
     return rejectWithValue(e.response.data);
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
        [ addBrand.pending ] :(state,action)=>{

          state.isLoading = true
          state.error = null
          
        //  console.log(action)
     },
     [ addBrand.fulfilled ] :(state,action)=>{
      state.isLoading = false
      state.error= null
      state.brandList= [...state.brandList, action.payload]
      state.added=true
      
   
      
      },
      [ addBrand.rejected ] :(state,action)=>{
           state.isLoading = false
           state.error = action.payload

         
      }, 
      [ editeBrand.pending ] :(state,action)=>{

        state.isLoading = true
        state.error = null
     
      
   },
   [ editeBrand.fulfilled ] :(state,action)=>{
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

    [ editeBrand.rejected ] :(state,action)=>{
         state.isLoading = false
         state.error = action.payload
       console.log(action)
       
    }, 
    [ deleteBrand.pending ] :(state,action)=>{

      state.isLoading = true
      state.error = null
      
    
 },


 [ deleteBrand.fulfilled ] :(state,action)=>{
  state.isLoading = false
  state.error= null
  state.collectionsList  = state.collectionsList.filter((collection)=>collection.id != action.payload.category_id)
  


  
  },
  [ deleteBrand.rejected ] :(state,action)=>{
       state.isLoading = false
       state.error = action.payload
       console.log(`esraa ${action.payload}`)
    
     
  }, 
    }


})
export const {clearstate} = brandSlice.actions
export default brandSlice.reducer
