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
 
    export const editeSize = createAsyncThunk ('size/update',  async(editedSizetData,thunkAPI) =>{
      const {rejectWithValue , getState} = thunkAPI
      const token= getState().auth.token
      const config = {     
        headers: { 'content-type': 'application/json',
                   'Authorization': `Bearer ${token}`,
      }}
    try{
    
    let body= JSON.stringify(editedSizetData)
    let response = await axios.put("https://thebeauwow.me/api/v1/admin/sizes/update/", body, config)
    
      if(response.status == 200) {
        return  ({...editedSizetData, ...response.data}) 
      }
    
    
     
    }
    catch (e) {
         
     return rejectWithValue(e.response.data)
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
    initialState : {sizsList:[], isLoading:false,addLoading:false,added:false, updated:false,deleted:false, error:null},
    reducers:{
      clearstate:(state)=>{
        state.added= false
        state.updated= false
        state.error= false
        state.deleted=false

      }
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
          state.added= false
          state.deleted=false
          state.updated=false
          
        
     },
     [ addSize.fulfilled ] :(state,action)=>{
      state.isLoading = false
      state.error= null
      state.sizsList  = [...state.sizsList, action.payload]
      state.added= true
      state.deleted=false
      state.updated=false
    
  
      
      },
      [ addSize.rejected ] :(state,action)=>{
           state.isLoading = false
           state.error = action.payload
           console.log(`esraa ${action.payload}`)
           state.added= false
           state.deleted=false
           state.updated=false
        
         
      }, 

      //....... delete size .........
      [ deleteSize.pending ] :(state,action)=>{

        state.isLoading = true
        state.error = null
        state.deleted=false
        state.updated=false
        state.added=false
        
      
   },
   [ deleteSize.fulfilled ] :(state,action)=>{
    state.isLoading = false
    state.error= null
    state.deleted=true
    state.sizsList  = state.sizsList.filter((size)=>size.id != action.payload.size_id)
    state.updated=false
        state.added=false
    
  

    
    },
    [ deleteSize.rejected ] :(state,action)=>{
         state.isLoading = false
         state.error = action.payload
         console.log(`esraa ${action.payload}`)
         state.deleted=false
         state.updated=false
        state.added=false
      
       
    }, 
    [ editeSize.pending ] :(state,action)=>{

      state.isLoading = true
      state.error = null
  state.updated=false
  state.added= false
  state.deleted=false
   
    
 },
 [ editeSize.fulfilled ] :(state,action)=>{
  state.isLoading = false;
  state.error= null;
  state.updated=true
  state.added= false
  state.deleted=false
  
  const index = state.sizsList.findIndex(size => size.id == action.payload.size_id);                                                            
  const newArray = [...state.sizsList]; 
  if(index)
  {  newArray[index] = action.payload;}
 state.sizsList=newArray ;

  
  },

  [ editeSize.rejected ] :(state,action)=>{
       state.isLoading = false
       state.error = action.payload
       state.updated=false
       state.added= false
       state.deleted=false
   
     
  }, 
     
       
    }


})
export const {clearstate} = sizesSlice.actions
export default sizesSlice.reducer