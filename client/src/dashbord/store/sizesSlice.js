import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


export const getSizes = createAsyncThunk ('sizes/get',  async(_ ,thunkAPI) =>{
    const {rejectWithValue , getState} = thunkAPI
  
  try{
    const token= getState().auth.token
  
    
    const  res= await fetch("https://thebeauwow.me/api/v1/admin/sizes/",
    
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
  export const addSize = createAsyncThunk ('sizes/add',  async(size ,thunkAPI) =>{
    const {rejectWithValue , getState} = thunkAPI
    const token= getState().auth.token
    try {
      const body= JSON.stringify(size)
      const response = await axios.post("https://thebeauwow.me/api/v1/admin/sizes/create/", body, {
        headers: {
          'Content-Type': 'application/json', 
          'Authorization': `Bearer ${token}`,
        }})
        {return {...size, ...response.data}}
      }
      catch (e) {
      return rejectWithValue(e.response.data);
    }
    })
   export const deleteSize=   createAsyncThunk ('sizes/delete',  async(id ,thunkAPI) =>{
      const {rejectWithValue , getState} = thunkAPI
      const token= getState().auth.token
      try {
        const body= JSON.stringify(id)
        const response = await axios.delete("https://thebeauwow.me/api/v1/admin/sizes/delete/", {
          headers: {
            'Content-Type': 'application/json', 
            'Authorization': `Bearer ${token}`,
          },data: body})
          if(response.status==200)
         return id 
        }
        catch (e) {
        return rejectWithValue(e.response.data);
      }
      })
   
  const sizesSlice= createSlice({
    name:'discounts',
    initialState : {sizsList:[], isLoading:false,addLoading:false, error:null},
    reducers:{

    },
    extraReducers:{
         // ............. start getSizes ......................
        [ getSizes.pending ] :(state,action)=>{

            state.isLoading = true
            state.error = null
            
          
       },
       [ getSizes.fulfilled ] :(state,action)=>{
        state.isLoading = false
        state.error= null
        state.sizsList = action.payload
    
        
        },
        [ getSizes.rejected ] :(state,action)=>{
             state.isLoading = false
             state.error = action.payload
           console.log(action)
           
        }, 
        // ............. end getSizes ......................
        //.......addSize .........................
        [ addSize.pending ] :(state,action)=>{

          state.isLoading = true
          state.error = null
          
        
     },
     [ addSize.fulfilled ] :(state,action)=>{
      state.isLoading = false
      state.error= null
      state.sizsList  = [...state.sizsList, action.payload]
    
  
      
      },
      [ addSize.rejected ] :(state,action)=>{
           state.isLoading = false
           state.error = action.payload
           console.log(`esraa ${action.payload}`)
        
         
      }, 

      //....... delete size .........
      [ deleteSize.pending ] :(state,action)=>{

        state.isLoading = true
        state.error = null
        
      
   },
   [ deleteSize.fulfilled ] :(state,action)=>{
    state.isLoading = false
    state.error= null
    state.sizsList  = state.sizsList.filter((size)=>size.id != action.payload.size_id)
    
  

    
    },
    [ deleteSize.rejected ] :(state,action)=>{
         state.isLoading = false
         state.error = action.payload
         console.log(`esraa ${action.payload}`)
      
       
    }, 

     
       
    }


})
export default sizesSlice.reducer