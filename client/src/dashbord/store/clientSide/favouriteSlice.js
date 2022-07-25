import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from 'axios';

export const getFavourites = createAsyncThunk ('fav/get',  async(_ ,thunkAPI) =>{
    const {rejectWithValue , getState} = thunkAPI
  
  try{
    const token= getState().auth.token
   
  
    let res = await axios.get(`https://thebeauwow.me/api/v1/favorites/`,{
      headers: {
    'Content-Type': 'application/json', 
     'Authorization': `Bearer ${token}`,}
    
    })
  
    return await res.data[0].products

}

  catch(e){
    return rejectWithValue(e.response.data)
  }
  
  })

  export const addFav = createAsyncThunk ('fav/add',  async(favdata ,thunkAPI) =>{
    const {rejectWithValue , getState} = thunkAPI
    const token= getState().auth.token
    try {
      const body= JSON.stringify(favdata)
      const response = await axios.post("https://thebeauwow.me/api/v1/favorites/create/", body, {
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
    export const deletefav=   createAsyncThunk ('fav/delete',  async(data ,thunkAPI) =>{
      const {rejectWithValue , getState} = thunkAPI
      const token= getState().auth.token
      try {
        const body= JSON.stringify(data)
        const response = await axios.delete("https://thebeauwow.me/api/v1/favorites/delete/", {
          headers: {
            'Content-Type': 'application/json', 
            'Authorization': `Bearer ${token}`,
          },data: body})
          if(response.status==200)
        {  return data}
        }
        catch (e) {
          return rejectWithValue(e.response.data);
      }
      })
    
      const favSlice= createSlice({
        name:'discounts',
        initialState : {favList:[],favAdded:false,favupdated:false,favDeleted:false,cityadded:false,areaAdded:false,cityUpdated:false,cityDeleted:false,areaUpdated:false,areaDeleted:false, isLoading:false,addLoading:false, error:null},
        reducers:{
          clearstate:(state)=>{
            state.cityadded= false
            state.cityUpdated= false
            state.favupdated= false
            state.favAdded= false
            state.favDeleted= false
            state.error= false
            state.areaAdded=false
            state.areaUpdated=false
    
          }
        },
        extraReducers:{
             // ............. start getFavourites ......................
            [ getFavourites.pending ] :(state,action)=>{
    
                state.isLoading = true
                state.error = null
                
              
           },
           [ getFavourites.fulfilled ] :(state,action)=>{
            state.isLoading = false
            state.error= null
           
            state.favList = action.payload
        
            
            },
            [ getFavourites.rejected ] :(state,action)=>{
                 state.isLoading = false
                 state.error = action.payload
               console.log(action)
               
            }, 
            // ............. end getFavourites ......................
               //.......addFav .........................
               [ addFav.pending ] :(state,action)=>{
    
                state.isLoading = true
                state.error = null
                state.favAdded=false
                
              
           },
           [ addFav.fulfilled ] :(state,action)=>{
           
            state.favAdded=true
          
        
            
            },
            [ addFav.rejected ] :(state,action)=>{
                 state.isLoading = false
                 state.error = action.payload
                 console.log(`esraa ${action.payload}`)
                 state.favAdded=false
              
               
            }, 
             //....... delete fav .........
          [ deletefav.pending ] :(state,action)=>{
    
            state.isLoading = true
            state.error = null
            state.favDeleted= false
            
          
       },
       [ deletefav.fulfilled ] :(state,action)=>{
        state.isLoading = false
        state.error= null
        state.favList = state.favList.filter((fav)=>fav.id !== action.payload.product_id)
        
        state.favDeleted= true
      
    
        
        },
        [ deletefav.rejected ] :(state,action)=>{
             state.isLoading = false
             state.error = action.payload
             state.favDeleted= false
          
           
        },            
        }
     
    
    
    })
    export const {clearstate} = favSlice.actions
    export default favSlice.reducer