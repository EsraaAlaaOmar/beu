import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const addDeliveryLocation = createAsyncThunk ('deliveryLocation/add',  async(locationData ,thunkAPI) =>{
    const {rejectWithValue , getState} = thunkAPI
    const token= getState().auth.token
    try {
      const body= JSON.stringify(locationData)
      const response = await axios.post("https://thebeauwow.me/api/v1/delivery_locations/create/", body, {
        headers: {
          'Content-Type': 'application/json', 
          'Authorization': `Bearer ${token}`,
        }})
       
       return response.data
      }
      catch (e) {
        return rejectWithValue(e.response.data);
    }
})
const deliveryLocationSlice = createSlice({
    name: 'deliveryLocation',
    initialState: { CardList: [], locationAdded: false, deliveryError: null },
    reducers: {
 
    },
    extraReducers: {
                      //.......addToCard .........................
                      [ addDeliveryLocation.pending ] :(state,action)=>{
    
                       
                        state.deliveryError = null
                        state.locationAdded=false
                        
                      
                   },
                   [ addDeliveryLocation.fulfilled ] :(state,action)=>{
                   
                    state.locationAdded=true
                  
                
                    
                    },
                    [ addDeliveryLocation.rejected ] :(state,action)=>{
                      
                         state.deliveryError = action.payload
                         state.locationAdded=false
                      
                       
                    }, 
    }

})
export default deliveryLocationSlice.reducer