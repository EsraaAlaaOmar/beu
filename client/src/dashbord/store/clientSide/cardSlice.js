import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const getcCardourites = createAsyncThunk ('cCard/get',  async(_ ,thunkAPI) =>{
    const {rejectWithValue , getState} = thunkAPI
  
  try{
    const token= getState().auth.token
   
  
    let res = await axios.get(`https://thebeauwow.me/api/v1/shopping_cart/`,{
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

  export const addcCard = createAsyncThunk ('cCard/add',  async(cCarddata ,thunkAPI) =>{
    const {rejectWithValue , getState} = thunkAPI
    const token= getState().auth.token
    try {
      const body= JSON.stringify(cCarddata)
      const response = await axios.post("https://thebeauwow.me/api/v1/cCardorites/create/", body, {
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
    export const deletecCard=   createAsyncThunk ('cCard/delete',  async(data ,thunkAPI) =>{
      const {rejectWithValue , getState} = thunkAPI
      const token= getState().auth.token
      try {
        const body= JSON.stringify(data)
        const response = await axios.delete("https://thebeauwow.me/api/v1/cCardorites/delete/", {
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
    
      const cCardSlice= createSlice({
        name:'discounts',
        initialState : {cCardList:[],cCardAdded:false,cCardupdated:false,cCardDeleted:false,cityadded:false,areaAdded:false,cityUpdated:false,cityDeleted:false,areaUpdated:false,areaDeleted:false, isLoading:false,addLoading:false, error:null},
        reducers:{
          clearstate:(state)=>{
            state.cityadded= false
            state.cityUpdated= false
            state.cCardupdated= false
            state.cCardAdded= false
            state.cCardDeleted= false
            state.error= false
            state.areaAdded=false
            state.areaUpdated=false
    
          }
        },
        extraReducers:{
             // ............. start getcCardourites ......................
            [ getcCardourites.pending ] :(state,action)=>{
    
                state.isLoading = true
                state.error = null
                
              
           },
           [ getcCardourites.fulfilled ] :(state,action)=>{
            state.isLoading = false
            state.error= null
           
            state.cCardList = action.payload
        
            
            },
            [ getcCardourites.rejected ] :(state,action)=>{
                 state.isLoading = false
                 state.error = action.payload
               console.log(action)
               
            }, 
            // ............. end getcCardourites ......................
               //.......addcCard .........................
               [ addcCard.pending ] :(state,action)=>{
    
                state.isLoading = true
                state.error = null
                state.cCardAdded=false
                
              
           },
           [ addcCard.fulfilled ] :(state,action)=>{
           
            state.cCardAdded=true
          
        
            
            },
            [ addcCard.rejected ] :(state,action)=>{
                 state.isLoading = false
                 state.error = action.payload
                 console.log(`esraa ${action.payload}`)
                 state.cCardAdded=false
              
               
            }, 
             //....... delete cCard .........
          [ deletecCard.pending ] :(state,action)=>{
    
            state.isLoading = true
            state.error = null
            state.cCardDeleted= false
            
          
       },
       [ deletecCard.fulfilled ] :(state,action)=>{
        state.isLoading = false
        state.error= null
        state.cCardList = state.cCardList.filter((cCard)=>cCard.id !== action.payload.product_id)
        
        state.cCardDeleted= true
      
    
        
        },
        [ deletecCard.rejected ] :(state,action)=>{
             state.isLoading = false
             state.error = action.payload
             state.cCardDeleted= false
          
           
        },            
        }
     
    
    
    })
    export const {clearstate} = cCardSlice.actions
    export default cCardSlice.reducer