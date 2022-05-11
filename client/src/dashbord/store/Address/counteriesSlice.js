import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



export const getCountries = createAsyncThunk ('countries/get',  async(_ ,thunkAPI) =>{
    const {rejectWithValue , getState} = thunkAPI
  
  try{
    const token= getState().auth.token
  
    
    const  res= await fetch("https://test-beau-wow.herokuapp.com/api/v1/admin/countries/",
    
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
  const countriesSlice= createSlice({
    name:'discounts',
    initialState : {countriesList:[], isLoading:false,addLoading:false, error:null},
    reducers:{

    },
    extraReducers:{
         // ............. start getCountries ......................
        [ getCountries.pending ] :(state,action)=>{

            state.isLoading = true
            state.error = null
            
          
       },
       [ getCountries.fulfilled ] :(state,action)=>{
        state.isLoading = false
        state.error= null
        state.countriesList = action.payload
    
        
        },
        [ getCountries.rejected ] :(state,action)=>{
             state.isLoading = false
             state.error = action.payload
           console.log(action)
           
        }, 
        // ............. end getCountries ......................
     
       
    }


})
export default countriesSlice.reducer