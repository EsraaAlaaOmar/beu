import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
export const getSellList = createAsyncThunk ('sell/get',  async(_ ,thunkAPI) =>{
  const {rejectWithValue , getState} = thunkAPI
///................................................................



try{
  const token= getState().auth.token
  let res = await axios.get("https://test-beau-wow.herokuapp.com/api/v1/admin/sell_in_beau_wow/",{
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

const sellSlice= createSlice({
    name:'discounts',
    initialState : {sellList:[], isLoading:false, error:null},
    reducers:{

    },
    extraReducers:{
        //get books 
        [ getSellList.pending ] :(state,action)=>{

            state.isLoading = true
            state.error = null
            
          //  console.log(action)
       },
       [ getSellList.fulfilled ] :(state,action)=>{
        state.isLoading = false
        state.error= null
        state.sellList = action.payload
     //  console.log(state.books)
        
        },
        [ getSellList.rejected ] :(state,action)=>{
          state.isLoading = false
          state.error = action.payload

        
     }, 
    }


})
export default sellSlice.reducer