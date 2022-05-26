import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
export const getFeedbacks = createAsyncThunk ('feedback/get',  async(_ ,thunkAPI) =>{
    const {rejectWithValue , getState} = thunkAPI
    ///................................................................
    const token= getState().auth.token
    
    
    try{
      const token= getState().auth.token
      let res = await axios.get("https://test-beau-wow.herokuapp.com/api/v1/admin/feedbacks/",{
      headers: {
    'Content-Type': 'application/json', 
     'Authorization': `Bearer ${token}`,}
    
    })
      return res.data
    }
    catch (e) {
         
      return rejectWithValue(e.message);
    }
    
    })

    const FeedbackSlice= createSlice({
        name:'feedback',
        initialState : {feedbackList:[], isLoading:false, error:null},
        reducers:{
    
        },
        extraReducers:{
            //get feedbacks 
            [ getFeedbacks.pending ] :(state,action)=>{
    
                state.isLoading = true
                state.error = null
                
            
           },
           [ getFeedbacks.fulfilled ] :(state,action)=>{
            state.isLoading = false
            state.error= null
            state.feedbackList = action.payload
      
            
            },
            [ getFeedbacks.rejected ] :(state,action)=>{
                 state.isLoading = false
                 state.error = action.payload
             
               
            }, 
        }
    })
    export default FeedbackSlice.reducer