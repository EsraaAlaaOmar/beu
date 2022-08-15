import axios from 'axios';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const getClientLanding = createAsyncThunk ('clientLanding/get',  async(_,thunkAPI) =>{
  const {rejectWithValue , getState} = thunkAPI
///................................................................



try{


  let res = await axios.get(`https://thebeauwow.me/api/v1/customer/sections/`,{
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

const sectionsSlice= createSlice({
    name:'clientLanding',
    initialState : { sections:[], isLoading:false, error:null},
    reducers:{
      clearstate:(state)=>{
        state.error= false

      }
    },
    extraReducers:{
     
      [ getClientLanding.pending ] :(state,action)=>{

          state.isLoading = true
          state.error = null
         
          
     
     },
     [ getClientLanding.fulfilled ] :(state,action)=>{
      state.isLoading = false
      
      state.error= null
      state.sections = action.payload
     
  
      
      },
      [ getClientLanding.rejected ] :(state,action)=>{
           state.isLoading = false
           state.error = action.payload
          
       
         
      }, 

    }
 

})
export const {clearstate} = sectionsSlice.actions
export default sectionsSlice.reducer
