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
export const addFeedback = createAsyncThunk ('clientfeedbacks/add',  async(feedbackdata ,thunkAPI) =>{
    const {rejectWithValue , getState} = thunkAPI
    const token= getState().auth.token
    try {
      const body= JSON.stringify({feedbacks:feedbackdata})
      const response = await axios.post("https://thebeauwow.me/api/v1/feedback/create/", body, {
        headers: {
          'Content-Type': 'application/json', 
          'Authorization': `Bearer ${token}`,
        }})
       
       return response.data
      }
      catch (e) {
        return rejectWithValue(e.response.data);
    }
    })
const clientFeedbackslice= createSlice({
    name:'clientfeedbacks',
    initialState : { questions:[],feedbackAdded:false, isLoading:false, error:null},
    reducers:{
 
    },
    extraReducers:{
     
      [ getClientquestions.pending ] :(state,action)=>{

          state.isLoading = true
          state.error = null
         
          
     
     },
     [ getClientquestions.fulfilled ] :(state,action)=>{
      state.isLoading = false
      
      state.error= null
      state.questions = action.payload
     
  
      
      },
      [ getClientquestions.rejected ] :(state,action)=>{
           state.isLoading = false
           state.error = action.payload
          
       
         
      }, 
                   //.......addFeedback .........................
                   [ addFeedback.pending ] :(state,action)=>{
    
                    state.cardLoading = true
                    state.error = null
                    state.feedbackAdded=false
                    
                  
               },
               [ addFeedback.fulfilled ] :(state,action)=>{
               
                state.feedbackAdded=true
              
            
                
                },
                [ addFeedback.rejected ] :(state,action)=>{
                     state.cardLoading = false
                     state.error = action.payload
                     state.feedbackAdded=false
                  
                   
                }, 

    }
 

})

export default clientFeedbackslice.reducer
