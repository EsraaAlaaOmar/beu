import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



export const getdetailedAddres = createAsyncThunk ('detailed/get',  async(_ ,thunkAPI) =>{
    const {rejectWithValue , getState} = thunkAPI
  
  try{
    const token= getState().auth.token
  
    
    const  res= await fetch("https://thebeauwow.me/api/v1/delivery_locations/",
    
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
    return rejectWithValue(e.response.data)
  }
  
  })
  const detailedAddressSlice= createSlice({
    name:'discounts',
    initialState : {address:[], isLoading:false,addLoading:false, error:null},
    reducers:{

    },
    extraReducers:{
         // ............. start getdetailedAddres ......................
        [ getdetailedAddres.pending ] :(state,action)=>{

            state.isLoading = true
            state.error = null
            
          
       },
       [ getdetailedAddres.fulfilled ] :(state,action)=>{
        state.isLoading = false
        state.error= null
        state.address = action.payload
    
        
        },
        [ getdetailedAddres.rejected ] :(state,action)=>{
             state.isLoading = false
             state.error = action.payload
           console.log(action)
           
        }, 
        // ............. end getdetailedAddres ......................
     
       
    }


})
export default detailedAddressSlice.reducer