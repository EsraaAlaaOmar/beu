import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";

import axios from 'axios';
import {addProduct,editeProduct} from './productSlice'
export const getCollections = createAsyncThunk ('collections/get',  async(_ ,thunkAPI) =>{
    const {rejectWithValue , getState} = thunkAPI
  
  try{
    const token= getState().auth.token
    let res = await axios.get("https://thebeauwow.me/api/v1/admin/categories/",{
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
  export const editecollection = createAsyncThunk ('collections/update',  async(editedCollectionData,thunkAPI) =>{
    const {rejectWithValue , getState} = thunkAPI
    const token= getState().auth.token
    let formData = new FormData(); 
    const config = {     
      headers: { 'content-type': 'application/json',
                 'Authorization': `Bearer ${token}`,
    }}
  try{
  
    formData.append('title', editedCollectionData.title);
    formData.append(`image`, editedCollectionData.image);
    formData.append(`category_id`, editedCollectionData.category_id);
    
  let response = await axios.put("https://thebeauwow.me/api/v1/admin/category/update/", formData, config)
  
    if(response.status == 200) {
      return response.data
    }
  
  
   
  }
  catch (e) {
       
   return rejectWithValue(e.response.data)
  }
  
  
  })

  export const deleteCollection=   createAsyncThunk ('collections/delete',  async(data ,thunkAPI) =>{
    const {rejectWithValue , getState} = thunkAPI
    const token= getState().auth.token
    try {
      const body= JSON.stringify(data)
      const response = await axios.delete(`https://thebeauwow.me/api/v1/admin/category/delete/${data.category_id}`, {
        headers: {
          'Content-Type': 'application/json', 
          'Authorization': `Bearer ${token}`,
        },data: body})
        if(response.status==200)
       return data
      } 
      catch (e) {
     
       return rejectWithValue(e.response.data);
    }
    })

  export const addCollection = createAsyncThunk ('collections/add',  async(collectionData ,thunkAPI) =>{
    let formData = new FormData(); 
  const {rejectWithValue , getState} = thunkAPI
  const token= getState().auth.token
  try {
    //const response = await fetch(`url`); //where you want to fetch data
    //Your Axios code part.
    const body= JSON.stringify(collectionData)
    formData.append('title', collectionData.title);
    formData.append(`image`, collectionData.image);
    const response = await axios.post("https://thebeauwow.me/api/v1/admin/category/create/", formData, {
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
 
  
  const collectionsSlice= createSlice({
    name:'discounts',
    initialState : {collectionsList:[],collection:{},collectionadded:false,updated:false, isLoading:false,deleted:false,addLoading:false, error:null},
    reducers:{
      clearstate:(state)=>{
        state.collectionadded= false
        state.updated= false
        state.error= false
        state.deleted=false

      }

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
        state.collectionsList = action.payload.results
      
       
      
        
    
        
        },
        [ getCollections.rejected ] :(state,action)=>{
             state.isLoading = false
             state.error = action.payload
        
        }, 
        // ............. end getCollections ......................

        //.......addCollection ..........
        [ addCollection.pending ] :(state,action)=>{
          state.collectionadded=false
          state.isLoading = true
          state.error = null
          
        
     },
     [ addCollection.fulfilled ] :(state,action)=>{
    
      state.isLoading = false
      state.error= null
      state.collectionadded=true
      state.collectionsList = [...state.collectionsList, action.payload]
     
    
  
      
      },
      [ addCollection.rejected ] :(state,action)=>{
           state.isLoading = false
           state.error = action.payload
           state.collectionadded=false
         console.log(action)
         
      },
      [ editecollection.pending ] :(state,action)=>{

        state.isLoading = true
        state.error = null
        state.updated=false
     
      
   },
   [ editecollection.fulfilled ] :(state,action)=>{
    state.isLoading = false;
    state.error= null;
    state.updated=true
    const index = state.collectionsList.findIndex(brand => brand.id == action.payload.id);                                        
    const newArray = [...state.collectionsList];         
    newArray[index] = action.payload;
    state.collectionsList=newArray ;

    
    },

    [ editecollection.rejected ] :(state,action)=>{
         state.isLoading = false
         state.updated=false
         state.error = action.payload
       console.log(action)
       
    }, 

       //....... delete collection .........
       [ deleteCollection.pending ] :(state,action)=>{

        state.isLoading = true
        state.error = null
        state.deleted=false
        
      
   },


   [ deleteCollection.fulfilled ] :(state,action)=>{
    state.isLoading = false
    state.error= null
    state.deleted=true
    state.collectionsList  = state.collectionsList.filter((collection)=>collection.id != action.payload.category_id)
    
  

    
    },
    [ deleteCollection.rejected ] :(state,action)=>{
         state.isLoading = false
         state.error = action.payload
         state.deleted=false
         console.log(`esraa ${action.payload}`)
      
       
    }, 
    }


})
export const {clearstate} = collectionsSlice.actions
export default collectionsSlice.reducer