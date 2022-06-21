import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const getOrders = createAsyncThunk ('orders/get',  async(_ ,thunkAPI) =>{
    const {rejectWithValue , getState} = thunkAPI
  
  try{
    const token= getState().auth.token
  
    let res = await axios.get("https://thebeauwow.me/api/v1/admin/orders/",{
      headers: {
    'Content-Type': 'application/json', 
     'Authorization': `Bearer ${token}`,}
    
    })
    
    

      return res.data
  }
  catch(e){
    return rejectWithValue(e.response.data)
  }
  
  })

  const ordersSlice= createSlice({
    name:'orders',
    initialState : {orderList:[], isLoading:false,error:null},
    reducers:{ },
    extraReducers:{
         // ............. start getOrders ......................
        [ getOrders.pending ] :(state,action)=>{

            state.isLoading = true
            state.error = null
            
            
          
       },
       [ getOrders.fulfilled ] :(state,action)=>{
        state.isLoading = false
        state.error= null
        state.orderList = action.payload.results
    
        
        },
        [ getOrders.rejected ] :(state,action)=>{
             state.isLoading = false
             state.error = action.payload
         
           
        }, 
  
    }


})


export default ordersSlice.reducer