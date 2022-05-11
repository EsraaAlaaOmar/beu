import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getOffers = createAsyncThunk ('offers/get',  async(_ ,thunkAPI) =>{
    const {rejectWithValue , getState} = thunkAPI
  
  try{
    const token= getState().auth.token
  
    
    const  res= await fetch("https://test-beau-wow.herokuapp.com/api/v1/admin/offers/",
    
      {
          method: "GET",
          headers: {
              'Content-Type': 'application/json', 
               'Authorization': `bearer ${token}`,
          
          }
      }
      )

      return res.json() 
  }
  catch(e){
    return rejectWithValue(e.message)
  }
  
  })
  const offersSlice= createSlice({
    name:'discounts',
    initialState : {offersList:[], isLoading:false,addLoading:false, error:null},
    reducers:{

    },
    extraReducers:{
         // ............. start getOffers ......................
        [ getOffers.pending ] :(state,action)=>{

            state.isLoading = true
            state.error = null
            
          
       },
       [ getOffers.fulfilled ] :(state,action)=>{
        state.isLoading = false
        state.error= null
        state.offersList = action.payload
    
        
        },
        [ getOffers.rejected ] :(state,action)=>{
             state.isLoading = false
             state.error = action.payload
           console.log(action)
           
        }, 
        // ............. end getOffers ......................
     
    }


})
export default offersSlice.reducer