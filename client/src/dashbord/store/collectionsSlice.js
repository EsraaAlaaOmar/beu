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
    return rejectWithValue(e.message)
  }
  
  })

  export const deleteCollection=   createAsyncThunk ('collections/delete',  async(id ,thunkAPI) =>{
    const {rejectWithValue , getState} = thunkAPI
    const token= getState().auth.token
    try {
      const body= JSON.stringify(id)
      const response = await axios.delete("https://thebeauwow.me/api/v1/admin/categories/delete/", {
        headers: {
          'Content-Type': 'application/json', 
          'Authorization': `Bearer ${token}`,
        },data: body})
        if(response.status==200)
       return id 
      }
      catch (e) {
     
       return rejectWithValue(e.message);
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
     return {...response.data , ...collectionData }
    }
    catch (e) {
     
     return rejectWithValue(e.message);
  }
  })
 
  
  const collectionsSlice= createSlice({
    name:'discounts',
    initialState : {collectionsList:[],collection:{},collectionadded:false, isLoading:false,addLoading:false, error:null},
    reducers:{

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
      [ addProduct.pending ] :(state,action)=>{
        state.isLoading = false
        state.error= null
      },
      [ addProduct.fulfilled ] :(state,action)=>{
            const currentState = current(state)
        state.isLoading = false
        state.error= null
        const index = currentState.collectionsList.findIndex(collection => collection.id == action.payload.category_id);       
        // console.log(currentState.collectionsList.map(collection => console.log(typeof collection.id)))                                   
         const newArray = [...currentState.collectionsList]; 
         
        // console.log(typeof action.payload.category_id )
        // console.log(index)
        // console.log(currentState.collectionsList)
       
      //   if(index)
      //   { let  esrray = {...newArray[index], products :[...newArray[index].products, action.payload]};
      //   console.log(esrray)
      // }
      newArray[index] = {...newArray[index], products :[...newArray[index].products, action.payload]}
        console.log(newArray)
        console.log([...newArray[index].products,action.payload])
        state.collectionsList=newArray;
        // let collection= state.collectionsList.find((collection)=> collection.id === action.payload.category_id)
        // state.collectionsList.find((collection)=> collection.id==action.payload.category_id).push(action.payload)

      //  state.products=[...state.products ,action.payload]
    
      },
      [ addProduct.rejected ] :(state,action)=>{
        state.isLoading = false
        state.error=action.payload
       
    
      },
       //....... delete collection .........
       [ deleteCollection.pending ] :(state,action)=>{

        state.isLoading = true
        state.error = null
        
      
   },
      [ editeProduct.pending ] :(state,action)=>{
        state.isLoading = false
        state.error= null
      },
     [ editeProduct.fulfilled ] :(state,action)=>{
        const currentState = current(state)
        state.isLoading = false
        state.error= null
        const index = currentState.collectionsList.findIndex(collection => collection.id == action.payload.category_id); 
        const productIndex = currentState.collectionsList[index].products.findIndex(product => product.id == action.payload.product_id);       
              {console.log(productIndex)}                          
       const newArray = [...currentState.collectionsList]; 
       newArray[index] = {...newArray[index], products : Object.assign([...newArray[index].products], {[productIndex]: action.payload})}
       state.collectionsList=newArray;
      },
      [ editeProduct.rejected ] :(state,action)=>{
        state.isLoading = false
        state.error=action.payload
       
    
      },




   [ deleteCollection.fulfilled ] :(state,action)=>{
    state.isLoading = false
    state.error= null
    state.collectionsList  = state.collectionsList.filter((collection)=>collection.id != action.payload.category_id)
    
  

    
    },
    [ deleteCollection.rejected ] :(state,action)=>{
         state.isLoading = false
         state.error = action.payload
         console.log(`esraa ${action.payload}`)
      
       
    }, 
    }


})
export default collectionsSlice.reducer