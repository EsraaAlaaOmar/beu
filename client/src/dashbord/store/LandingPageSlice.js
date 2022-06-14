import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
let formData = new FormData(); 
export const getSections = createAsyncThunk ('sections/get',  async(_ ,thunkAPI) =>{
  const {rejectWithValue , getState} = thunkAPI
///................................................................
const token= getState().auth.token


try{
  const token= getState().auth.token
  let res = await axios.get("https://thebeauwow.me/api/v1/admin/sections/",{
  headers: {
'Content-Type': 'application/json', 
 'Authorization': `Bearer ${token}`,}

})
  return res.data
}
catch (e) {
     
 return rejectWithValue(e.response.data)
}

})
export const addSection = createAsyncThunk ('section/add',  async(discountData ,thunkAPI) =>{
  const {rejectWithValue , getState} = thunkAPI
  const token= getState().auth.token
//const token='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ2ODk0MzQ0LCJpYXQiOjE2NDYwMzAzNDQsImp0aSI6ImNlZGRmZjA0OTU2MDQ3NGZhNzAyOGM2MmJmNzJlNDRlIiwidXNlcl9pZCI6MX0.EJUZC1FE4XldJ8syppkdNHuuEyeDD8VeLHsOxUoM-lU'
try{
 let  body= JSON.stringify(discountData)
  const res= await axios.post("https://thebeauwow.me/api/v1/admin/section/create/",body, {headers: {
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

export const editeSection = createAsyncThunk ('section/update',  async(editSectionData,thunkAPI) =>{
  const {rejectWithValue , getState} = thunkAPI
  const token= getState().auth.token
  const config = {     
    headers: {  'content-type': 'multipart/form-data',
               'Authorization': `Bearer ${token}`,
  }}

  formData.append('section_id',2);   //append the values with key, value pair

    formData.append(`update_galleries[${editSectionData.section_id}]image`, editSectionData.updategallery.image ,'galary.jpeg');
    formData.append(`update_galleries[${editSectionData.section_id}]gallery_id`, editSectionData.updategallery.id);
    // formData.append(`update_galleries[${editSectionData.section_id}]priority`, editSectionData.updategallery.priority);

    console.log(formData);
  
  
try{


let response = await axios.put("https://thebeauwow.me/api/v1/admin/section/update/", formData, config)

  if(response.status == 200) {
    return  ({...editSectionData, ...response.data}) 
  }


 
}
catch (e) {
     
 return rejectWithValue(e.response.data)
}


})
const landPageSlice= createSlice({
    name:'landingpage',
    initialState : {sectionsList:[], isLoading:false,added:false,updated:false, error:null},
    reducers:{
      clearstate:(state)=>{
        state.added= false
        state.updated= false
        state.error= false

      }

    },
    extraReducers:{
     
        [ getSections.pending ] :(state,action)=>{

            state.isLoading = true
            state.error = null
            
       
       },
       [ getSections.fulfilled ] :(state,action)=>{
        state.isLoading = false
        state.error= null
        state.sectionsList = action.payload
    
        
        },
        [ getSections.rejected ] :(state,action)=>{
             state.isLoading = false
             state.error = action.payload
      
           
        }, 
        [ addSection.pending ] :(state,action)=>{

          state.isLoading = true
          state.error = null
          
        //  console.log(action)
     },
        [ addSection.fulfilled ] :(state,action)=>{
          state.isLoading = false
          state.error= null
          state.sectionsList= [...state.sectionsList, action.payload]
          state.added=true
          
       
          
          },
          [ addSection.rejected ] :(state,action)=>{
               state.isLoading = false
               state.error = action.payload
    
             
          }, 
          [ editeSection.pending ] :(state,action)=>{

            state.isLoading = true
            state.error = null
         
          
       },
       [ editeSection.fulfilled ] :(state,action)=>{
        state.isLoading = false;
        state.error= null;
        state.updated=true
       
    
        
        },
    
        [ editeSection.rejected ] :(state,action)=>{
             state.isLoading = false
             state.error = action.payload
           console.log(action)
           
        }, 
        
      } 
      


})
// export const {clearstate} = landPageSlice.actions
export default landPageSlice.reducer
