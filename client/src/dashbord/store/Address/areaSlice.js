import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



export const getAreas = createAsyncThunk ('areas/get',  async(_ ,thunkAPI) =>{
    const {rejectWithValue , getState} = thunkAPI
  
  try{
    const token= getState().auth.token
  
    
    const  res= await fetch("https://test-beau-wow.herokuapp.com/api/v1/admin/areas/",
    
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
  const areasSlice= createSlice({
    name:'discounts',
    initialState : {AreasList:[], isLoading:false,addLoading:false, error:null},
    reducers:{

    },
    extraReducers:{
         // ............. start getAreas ......................
        [ getAreas.pending ] :(state,action)=>{

            state.isLoading = true
            state.error = null
            
          
       },
       [ getAreas.fulfilled ] :(state,action)=>{
        state.isLoading = false
        state.error= null
        state.AreasList = action.payload
    
        
        },
        [ getAreas.rejected ] :(state,action)=>{
             state.isLoading = false
             state.error = action.payload
           console.log(action)
           
        }, 
        // ............. end getAreas ......................
     
       
    }


})
export default areasSlice.reducer