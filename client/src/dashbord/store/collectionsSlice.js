import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



export const getCollections = createAsyncThunk ('collections/get',  async(_ ,thunkAPI) =>{
    const {rejectWithValue , getState} = thunkAPI
  
  try{
    const token= getState().auth.token
  
    
    const  res= await fetch("https://test-beau-wow.herokuapp.com/api/v1/admin/categories/",
    
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
  const collectionsSlice= createSlice({
    name:'discounts',
    initialState : {collectionsList:[], isLoading:false,addLoading:false, error:null},
    reducers:{

    },
    extraReducers:{
         // ............. start getCollections ......................
        [ getCollections.pending ] :(state,action)=>{

            state.isLoading = true
            state.error = null
            
          
       },
       [ getCollections.fulfilled ] :(state,action)=>{
        state.isLoading = false
        state.error= null
        state.collectionsList = action.payload
    
        
        },
        [ getCollections.rejected ] :(state,action)=>{
             state.isLoading = false
             state.error = action.payload
           console.log(action)
           
        }, 
        // ............. end getCollections ......................
     
       
    }


})
export default collectionsSlice.reducer