import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
export const getOrders = createAsyncThunk ('clientorders/get',  async(_ ,thunkAPI) =>{
  const {rejectWithValue , getState} = thunkAPI
///................................................................

try{
  const token= getState().auth.token
  let res = await axios.get("https://thebeauwow.me/api/v1/orders/",{
  headers: {
'Content-Type': 'application/json', 
 'Authorization': `Bearer ${token}`,}

})
  return res.data
}
catch (e) {
     
 return rejectWithValue(e.response.data)
}

})

const clientOrdersSlice= createSlice({
    name:'clientorders',
    initialState : {ordersList:[], isLoading:false,added:false,updated:false, error:null},
    reducers:{
      clearstate:(state)=>{
        state.added= false
        state.updated= false
        state.error= false

      }

    },
    extraReducers:{
     
        [ getOrders.pending ] :(state,action)=>{

            state.isLoading = true
            state.error = null
            
       
       },
       [ getOrders.fulfilled ] :(state,action)=>{
        state.isLoading = false
        state.error= null
        state.ordersList = action.payload
    
        
        },
        [ getOrders.rejected ] :(state,action)=>{
             state.isLoading = false
             state.error = action.payload
           console.log(action)
           
        }, 
    
    }


})
export const {clearstate} = clientOrdersSlice.actions
export default clientOrdersSlice.reducer