import axios from 'axios';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const getClientquestions = createAsyncThunk ('clientfeedbacks/get',  async(_,thunkAPI) =>{
  const {rejectWithValue , getState} = thunkAPI
///................................................................



try{
  const token= getState().auth.token

  let res = await axios.get(`https://thebeauwow.me/api/v1/feedback/`,{
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

const clientFeedbackslice= createSlice({
    name:'clientfeedbacks',
    initialState : { questions:[], isLoading:false, error:null},
    reducers:{
      clearstate:(state)=>{
        state.error= false

      }
    },
    extraReducers:{
     
      [ getClientquestions.pending ] :(state,action)=>{

          state.isLoading = true
          state.error = null
         
          
     
     },
     [ getClientquestions.fulfilled ] :(state,action)=>{
      state.isLoading = false
      
      state.error= null
      state.questions = action.payload.results
     
  
      
      },
      [ getClientquestions.rejected ] :(state,action)=>{
           state.isLoading = false
           state.error = action.payload
          
       
         
      }, 

    }
 

})
export const {clearstate} = clientFeedbackslice.actions
export default clientFeedbackslice.reducer
