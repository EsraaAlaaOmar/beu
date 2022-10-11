import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const contactus = createAsyncThunk ('auth/contactus', 
    async (adminData, thunkAPI) => {
        const { rejectWithValue, getState } = thunkAPI
        try {
            const token = getState().auth.token
            const body = JSON.stringify(adminData)
            const response = await axios.post("https://thebeauwow.me/api/v1/contact_us/create/", body, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
          
                }
            })
            return response.data
       
        }
        catch (e) {
            return rejectWithValue(e.response.data);
        }
    })

    
const contactusSlice= createSlice({
    name:'clientbrands',
    initialState : { created:false ,isLoading:false, error:null},
    reducers:{
    
    },
    extraReducers:{
     
      [ contactus.pending ] :(state,action)=>{

          state.isLoading = true
          state.error = null
         
          
     
     },
     [ contactus.fulfilled ] :(state,action)=>{
    
        state.isLoading = false
        state.created=true
  
      
      },
      [ contactus.rejected ] :(state,action)=>{
           state.isLoading = false
           state.error = action.payload
          
       
         
      }, 
      
    }
 

})

export default contactusSlice.reducer
