import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



export const getMessages = createAsyncThunk ('messages/get',  async(_ ,thunkAPI) =>{
    const {rejectWithValue , getState} = thunkAPI
  
  try{
    const token= getState().auth.token
  
    
    const  res= await fetch("https://test-beau-wow.herokuapp.com/api/v1/admin/contact_us/",
    
      {
          method: "GET",
          headers: {
              'Content-Type': 'application/json', 
               'Authorization': `Bearer ${token}`,
          
          }
      }
      )

      return res.json() 
  }
  catch(e){
    return rejectWithValue(e.message)
  }
  
  })
  const messagesSlice= createSlice({
    name:'discounts',
    initialState : {messagesList:[], isLoading:false,addLoading:false, error:null},
    reducers:{

    },
    extraReducers:{
         // ............. start getMessages ......................
        [ getMessages.pending ] :(state,action)=>{

            state.isLoading = true
            state.error = null
            
          
       },
       [ getMessages.fulfilled ] :(state,action)=>{
        state.isLoading = false
        state.error= null
        state.messagesList = action.payload
    
        
        },
        [ getMessages.rejected ] :(state,action)=>{
             state.isLoading = false
             state.error = action.payload
           console.log(action)
           
        }, 
        // ............. end getMessages ......................
     
       
    }


})
export default messagesSlice.reducer