import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


export const getCities = createAsyncThunk ('cities/get',  async(_ ,thunkAPI) =>{
    const {rejectWithValue , getState} = thunkAPI
  
  try{
    const token= getState().auth.token
  
    
    const  res= await fetch("https://test-beau-wow.herokuapp.com/api/v1/admin/cities/",
    
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

  const citiesSlice= createSlice({
    name:'discounts',
    initialState : {citiesList:[], isLoading:false,addLoading:false, error:null},
    reducers:{

    },
    extraReducers:{
         // ............. start getCities ......................
        [ getCities.pending ] :(state,action)=>{

            state.isLoading = true
            state.error = null
            
          
       },
       [ getCities.fulfilled ] :(state,action)=>{
        state.isLoading = false
        state.error= null
        state.citiesList = action.payload
    
        
        },
        [getCities.rejected ] :(state,action)=>{
             state.isLoading = false
             state.error = action.payload
           console.log(action)
           
        }, 
        // ............. end getCities ......................
 
     
       
    }


})
export default citiesSlice.reducer