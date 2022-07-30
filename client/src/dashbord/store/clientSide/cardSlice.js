import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const getCard = createAsyncThunk ('Card/get',  async(_ ,thunkAPI) =>{
    const {rejectWithValue , getState} = thunkAPI
  
  try{
    const token= getState().auth.token
   
  
    let res = await axios.get(`https://thebeauwow.me/api/v1/shopping_cart/`,{
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

  export const addToCard = createAsyncThunk ('Card/add',  async(Carddata ,thunkAPI) =>{
    const {rejectWithValue , getState} = thunkAPI
    const token= getState().auth.token
    try {
      const body= JSON.stringify(Carddata)
      const response = await axios.post("https://thebeauwow.me/api/v1/shopping_cart/add/", body, {
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
    export const editeCard = createAsyncThunk ('card/update',  async(data,thunkAPI) =>{
      const {rejectWithValue , getState} = thunkAPI
      const token= getState().auth.token
      const config = {     
        headers: { 'content-type': 'application/json',
                   'Authorization': `Bearer ${token}`,
      }}
    try{
    
    let body= JSON.stringify(data)
    let response = await axios.put("https://thebeauwow.me/api/v1/shopping_cart/update/", body, config)
    
      if(response.status == 200) {
        return  ({...data, ...response.data}) 
      }
    
    
     
    }
    catch (e) {
         
     return rejectWithValue(e.response.data)
    }
   })    
    export const deleteFromCard=   createAsyncThunk ('Card/delete',  async(product ,thunkAPI) =>{
      const {rejectWithValue , getState} = thunkAPI
      const token= getState().auth.token
      try {
        const body= JSON.stringify(product)
        const response = await axios.delete("https://thebeauwow.me/api/v1/shopping_cart/delete/", {
          headers: {
            'Content-Type': 'application/json', 
            'Authorization': `Bearer ${token}`,
          },data: body})
          if(response.status==200)
        {  return product}
        }
        catch (e) {
          return rejectWithValue(e.response.data);
      }
      })
    
      const CardSlice= createSlice({
        name:'card',
        initialState : {CardList:[],totalPrice:0,added:false,edited:false,deleted:false, cardLoading:false, error:null},
        reducers:{
          clearstate:(state)=>{
            state.added=false
            state.edited=false
            state.deleted=false
          }
        },
        extraReducers:{
             // ............. start getCard ......................
            [ getCard.pending ] :(state,action)=>{
    
                state.cardLoading = true
                state.error = null
                
              
           },
           [ getCard.fulfilled ] :(state,action)=>{
            state.cardLoading = false
            state.error= null
            state.CardList = action.payload.products
            state.totalPrice = action.payload.total_price
        
            
            },
            [ getCard.rejected ] :(state,action)=>{
                 state.cardLoading = false
                 state.error = action.payload   
            }, 
            // ............. end getCard ......................
            //update card 
            [ editeCard.pending ] :(state,action)=>{
    
              state.cardLoading = true
              state.error = null
              state.edited=false
              
            
         },
         [ editeCard.fulfilled ] :(state,action)=>{
          state.cardLoading = false
          state.error= null
          state.edited=true
          
          },
          [ editeCard.rejected ] :(state,action)=>{
               state.cardLoading = false
               state.error = action.payload   
               state.edited=false
          }, 
               //.......addToCard .........................
               [ addToCard.pending ] :(state,action)=>{
    
                state.cardLoading = true
                state.error = null
                state.CardAdded=false
                
              
           },
           [ addToCard.fulfilled ] :(state,action)=>{
           
            state.CardAdded=true
          
        
            
            },
            [ addToCard.rejected ] :(state,action)=>{
                 state.cardLoading = false
                 state.error = action.payload
                 state.CardAdded=false
              
               
            }, 
             //....... delete Card .........
          [ deleteFromCard.pending ] :(state,action)=>{
    
            state.cardLoading = true
            state.error = null
            state.CardDeleted= false
            
          
       },
       [ deleteFromCard.fulfilled ] :(state,action)=>{
        state.cardLoading = false
        state.error= null  
        state.CardDeleted= true
      
    
        
        },
        [ deleteFromCard.rejected ] :(state,action)=>{
             state.cardLoading = false
             state.error = action.payload
             state.CardDeleted= false
          
           
        },            
        }
     
    
    
    })
    export const {clearstate} = CardSlice.actions
    export default CardSlice.reducer