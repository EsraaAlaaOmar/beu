import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
export const adminDetils = createAsyncThunk('admindetails/get', 
async(_ ,thunkAPI) =>{
const {rejectWithValue, getState} = thunkAPI
try{
 const token= getState().auth.token
 let res = await axios.get(`https://thebeauwow.me/api/v1/users/detail/`,{
      headers: {
    'Content-Type': 'application/json', 
     'Authorization': `Bearer ${token}`,}
    
    })
  
    return await res.data

}

catch(e){
  return rejectWithValue(e.response.data)
}

})

  const deitailsSlice= createSlice({
    name:'admindetails',
    initialState : {error:null, name:sessionStorage.getItem('loggedName'), staff:'', superuser:''},
    reducers:{

    },
    extraReducers:{
        [adminDetils.pending]:(state,action)=>{
          state.error = null
           
        },
        [adminDetils.fulfilled]:(state,action)=>{
           
          
            state.error= null
            state.name =action.payload.name
            state.staff=action.payload.is_staff
            state.superuser= action.payload.is_superuser
            sessionStorage.setItem('loggedName',action.payload.name)
           
           
         
    
        },
        [adminDetils.rejected]:(state,action)=>{
            state.error = action.payload
            console.log(action.payload)
        }
     
    }


})
export default deitailsSlice.reducer