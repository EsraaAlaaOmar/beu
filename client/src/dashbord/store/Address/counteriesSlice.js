import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const getCountries = createAsyncThunk ('address/get',  async(_ ,thunkAPI) =>{
    const {rejectWithValue , getState} = thunkAPI
  
  try{
    const token= getState().auth.token
   
  
    let res = await axios.get(`https://test-beau-wow.herokuapp.com/api/v1/admin/addresses/`,{
      headers: {
    'Content-Type': 'application/json', 
     'Authorization': `Bearer ${token}`,}
    
    })
  
    return await res.data

}

  catch(e){
    return rejectWithValue(e.message)
  }
  
  })

  export const addCountry = createAsyncThunk ('countries/add',  async(country ,thunkAPI) =>{
    const {rejectWithValue , getState} = thunkAPI
    const token= getState().auth.token
    try {
      const body= JSON.stringify(country)
      const response = await axios.post("https://test-beau-wow.herokuapp.com/api/v1/admin/countries/create/", body, {
        headers: {
          'Content-Type': 'application/json', 
          'Authorization': `Bearer ${token}`,
        }})
       
       return {...country, ...response.data, cities:[]}
      }
      catch (e) {
        return rejectWithValue(e.message);
    }
    })
    export const deleteCountry=   createAsyncThunk ('country/delete',  async(id ,thunkAPI) =>{
      const {rejectWithValue , getState} = thunkAPI
      const token= getState().auth.token
      try {
        const body= JSON.stringify(id)
        const response = await axios.delete("https://test-beau-wow.herokuapp.com/api/v1/admin/countries/delete/", {
          headers: {
            'Content-Type': 'application/json', 
            'Authorization': `Bearer ${token}`,
          },data: body})
          if(response.status==200)
        {  return id}
        }
        catch (e) {
          return rejectWithValue(e.message);
      }
      })
      export const addCity = createAsyncThunk ('cities/add',  async(city ,thunkAPI) =>{
        const {rejectWithValue , getState} = thunkAPI
        const token= getState().auth.token
        try {
          const body= JSON.stringify(city)
          const response = await axios.post("https://test-beau-wow.herokuapp.com/api/v1/admin/cities/create/", body, {
            headers: {
              'Content-Type': 'application/json', 
              'Authorization': `Bearer ${token}`,
            }})
            if(response.status==201)
           return {...city, ...response.data}
          }
          catch (e) {
            return rejectWithValue(e.message);
        }
        })
  const countriesSlice= createSlice({
    name:'discounts',
    initialState : {countriesList:[], isLoading:false,addLoading:false, error:null},
    reducers:{

    },
    extraReducers:{
         // ............. start getCountries ......................
        [ getCountries.pending ] :(state,action)=>{

            state.isLoading = true
            state.error = null
            
          
       },
       [ getCountries.fulfilled ] :(state,action)=>{
        state.isLoading = false
        state.error= null
       
        state.countriesList = action.payload
    
        
        },
        [ getCountries.rejected ] :(state,action)=>{
             state.isLoading = false
             state.error = action.payload
           console.log(action)
           
        }, 
        // ............. end getCountries ......................
           //.......addCountry .........................
           [ addCountry.pending ] :(state,action)=>{

            state.isLoading = true
            state.error = null
            
          
       },
       [ addCountry.fulfilled ] :(state,action)=>{
        state.isLoading = false
        state.error= null
        state.countriesList  = [...state.countriesList, action.payload]
      
    
        
        },
        [ addCountry.rejected ] :(state,action)=>{
             state.isLoading = false
             state.error = action.payload
             console.log(`esraa ${action.payload}`)
          
           
        }, 
         //....... delete country .........
      [ deleteCountry.pending ] :(state,action)=>{

        state.isLoading = true
        state.error = null
        
      
   },
   [ deleteCountry.fulfilled ] :(state,action)=>{
    state.isLoading = false
    state.error= null
    state.countriesList = state.countriesList.filter((country)=>country.id !== action.payload.country_id)
    
  

    
    },
    [ deleteCountry.rejected ] :(state,action)=>{
         state.isLoading = false
         state.error = action.payload
         console.log(`esraa ${action.payload}`)
      
       
    }, 
   //.......addCity .........................
    [ addCity.pending ] :(state,action)=>{

              state.isLoading = true
              state.error = null
              
            
         },
         [ addCity.fulfilled ] :(state,action)=>{
          state.isLoading = false
          state.error= null
          state.countriesList.cities = {...state.countriesList.cities, ...action.payload}
          },
          [ addCity.rejected ] :(state,action)=>{
               state.isLoading = false
               state.error = action.payload
              
            
             
          }, 
     
       
    }
 


})
export default countriesSlice.reducer