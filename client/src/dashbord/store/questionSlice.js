import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
export const getQuestions = createAsyncThunk ('questions/get',  async(_ ,thunkAPI) =>{
  const {rejectWithValue , getState} = thunkAPI
///................................................................
const token= getState().auth.token


try{
  const token= getState().auth.token
  let res = await axios.get("https://test-beau-wow.herokuapp.com/api/v1/feedback",{
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
export const addQuestion = createAsyncThunk ('questions/add',  async(questionData ,thunkAPI) =>{
  const {rejectWithValue , getState} = thunkAPI
  const token= getState().auth.token

try{
 let  body= JSON.stringify(questionData)
  const res= await axios.post("https://thebeauwow.me/api/v1/admin/feedbacks/create_question/",body, {headers: {
          'Content-Type': 'application/json', 
           'Authorization': `Bearer ${token}`,
      }
      })

  if(res.status == 201) {
    return {...questionData , ...res.data}
  }  
   
  

}
catch (e) {
     
  return rejectWithValue(e.message);
}

})

export const updateQuestion = createAsyncThunk ('question/update',  async(editedQuestionData,thunkAPI) =>{
  const {rejectWithValue , getState} = thunkAPI
  const token= getState().auth.token
  const config = {     
    headers: { 'content-type': 'application/json',
               'Authorization': `Bearer ${token}`,
  }}
try{

let body= JSON.stringify(editedQuestionData)
let response = await axios.put("https://test-beau-wow.herokuapp.com/api/v1/admin/feedbacks/update_question/", body, config)

  if(response.status == 200) {
    return  ({...editedQuestionData, ...response.data}) 
  }


 
}
catch (e) {
     
  return rejectWithValue(e.message);
}


})
const questionSlice= createSlice({
    name:'discounts',
    initialState : {questionList:[], isLoading:false,addLoading:false, error:null},
    reducers:{

    },
    extraReducers:{
         
        [ getQuestions.pending ] :(state,action)=>{

            state.isLoading = true
            state.error = null
            
        
       },
       [ getQuestions.fulfilled ] :(state,action)=>{
        state.isLoading = false
        state.error= null
        state.questionList = action.payload
    
        
        },
        [ getQuestions.rejected ] :(state,action)=>{
             state.isLoading = false
             state.error = action.payload
       
           
        }, 
        [ addQuestion.pending ] :(state,action)=>{

          state.addLoading = true
          state.error = null
          
        
     },
     [ addQuestion.fulfilled ] :(state,action)=>{
      state.addLoading = false
      state.error= null
      state.questionList= [...state.questionList, action.payload]
      
      
   
      
      },
      [ addQuestion.rejected ] :(state,action)=>{
           state.addLoading = false
           state.error = action.payload
         console.log(action)
         
      }, 
      [ updateQuestion.pending ] :(state,action)=>{

        state.isLoading = true
        state.error = null
     
      
   },
   [ updateQuestion.fulfilled ] :(state,action)=>{
    state.isLoading = true;
    state.error= null;
    console.log(action.payload)
    const index = state.questionList.findIndex(discount => discount.id == action.payload.discount_id);                                                            
    const newArray = [...state.questionList]; 
    if(index)
    {  newArray[index] = action.payload;}
   state.questionList=newArray ;

    
    },

    [ updateQuestion.rejected ] :(state,action)=>{
         state.isLoading = false
         state.error = action.payload
       console.log(action)
       
    }, 
    }


})
export default questionSlice.reducer
