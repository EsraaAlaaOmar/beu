import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



export const getSizes = createAsyncThunk ('sizes/get',  async(_ ,thunkAPI) =>{
    const {rejectWithValue , getState} = thunkAPI
  
  try{
    const token= getState().auth.token
  
    
    const  res= await fetch("https://test-beau-wow.herokuapp.com/api/v1/admin/sizes/",
    
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
  const sizesSlice= createSlice({
    name:'discounts',
    initialState : {sizsList:[], isLoading:false,addLoading:false, error:null},
    reducers:{

    },
    extraReducers:{
         // ............. start getSizes ......................
        [ getSizes.pending ] :(state,action)=>{

            state.isLoading = true
            state.error = null
            
          
       },
       [ getSizes.fulfilled ] :(state,action)=>{
        state.isLoading = false
        state.error= null
        state.sizsList = action.payload
    
        
        },
        [ getSizes.rejected ] :(state,action)=>{
             state.isLoading = false
             state.error = action.payload
           console.log(action)
           
        }, 
        // ............. end getSizes ......................
     
       
    }


})
export default sizesSlice.reducer