import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const getOffers = createAsyncThunk ('offers/get',  async(_ ,thunkAPI) =>{
    const {rejectWithValue , getState} = thunkAPI
  
  try{
    const token= getState().auth.token
  
    let res = await axios.get("https://thebeauwow.me/api/v1/admin/offers/",{
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
  export const addOffer = createAsyncThunk ('offers/add',  async(offer ,thunkAPI) =>{
    const {rejectWithValue , getState} = thunkAPI
    const token= getState().auth.token
    try {
      const body= JSON.stringify(offer)
      const response = await axios.post("https://thebeauwow.me/api/v1/admin/offers/create/", body, {
        headers: {
          'Content-Type': 'application/json', 
          'Authorization': `Bearer ${token}`,
        }})
        if(response.status==201)
       {return ({...offer, response})}
      }
      catch (e) {
     
        return rejectWithValue(e.response.data);
    }
    })

    export const editOffer = createAsyncThunk ('offer/update',  async(editedOfferData,thunkAPI) =>{
      const {rejectWithValue , getState} = thunkAPI
      const token= getState().auth.token
      const config = {     
        headers: { 'content-type': 'application/json',
                   'Authorization': `Bearer ${token}`,
      }}
    try{
    
    let body= JSON.stringify(editedOfferData)
    let response = await axios.put("https://thebeauwow.me/api/v1/admin/offers/update/", body, config)
    
      if(response.status == 200) {
        return  {...editedOfferData }
      }
   
    
     
    }
    catch (e) {
     
      return rejectWithValue(e.response.data);
  }
   
  
  })
  
  const offersSlice= createSlice({
    name:'discounts',
    initialState : {offersList:[],updated:false,created:false, isLoading:false,addLoading:false, error:null},
    reducers:{
      clearstate:(state)=>{
        state.created= false
        state.updated= false
        state.error= false

      }

    },
    extraReducers:{
         // ............. start getOffers ......................
        [ getOffers.pending ] :(state,action)=>{

            state.isLoading = true
            state.error = null
            
            
          
       },
       [ getOffers.fulfilled ] :(state,action)=>{
        state.isLoading = false
        state.error= null
        state.offersList = action.payload
    
        
        },
        [ getOffers.rejected ] :(state,action)=>{
             state.isLoading = false
             state.error = action.payload
         
           
        }, 
        // ............. end getOffers ......................
          //.......add offer .........................
          [ addOffer.pending ] :(state,action)=>{

            state.isLoading = true
            state.error = null
            state.updated=false
            state.created=false
            
          
       },
       [ addOffer.fulfilled ] :(state,action)=>{
        state.isLoading = false
        state.error= null
        state.offersList  = [...state.offersList, action.payload]
        state.updated=false
        state.created=true
      
      
    
        
        },
        [ addOffer.rejected ] :(state,action)=>{
             state.isLoading = false
             state.error = action.payload
             state.updated=false
             state.created=false
             
            
          
           
        }, 
        [ editOffer.pending ] :(state,action)=>{

          state.isLoading = true
          state.error = null
          state.updated=false
          state.created=false
       
        
     },
     [ editOffer.fulfilled ] :(state,action)=>{
      state.isLoading = false;
    
      state.error= null;
      console.log(action.payload)
      const index = state.offersList.findIndex(offer => offer.id == action.payload.offer_id);                                                            
      const newArray = [...state.offersList]; 
      if(index)
      {  newArray[index] = action.payload;}
     state.offersList=newArray ;
      state.updated=true
      state.created=false
      
      },

      [ editOffer.rejected ] :(state,action)=>{
           state.isLoading = false
           state.error = action.payload
           state.updated=false
           state.created=false
       
         
      }, 
     
    }


})

export const {clearstate} = offersSlice.actions
export default offersSlice.reducer