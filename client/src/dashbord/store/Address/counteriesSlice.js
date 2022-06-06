import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from 'axios';

export const getCountries = createAsyncThunk ('address/get',  async(_ ,thunkAPI) =>{
    const {rejectWithValue , getState} = thunkAPI
  
  try{
    const token= getState().auth.token
   
  
    let res = await axios.get(`https://thebeauwow.me/api/v1/admin/addresses/`,{
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

  export const addCountry = createAsyncThunk ('countries/add',  async(country ,thunkAPI) =>{
    const {rejectWithValue , getState} = thunkAPI
    const token= getState().auth.token
    try {
      const body= JSON.stringify(country)
      const response = await axios.post("https://thebeauwow.me/api/v1/admin/country/create/", body, {
        headers: {
          'Content-Type': 'application/json', 
          'Authorization': `Bearer ${token}`,
        }})
       
       return {...country, ...response.data, cities:[]}
      }
      catch (e) {
        return rejectWithValue(e.response.data);
    }
    })
    export const deleteCountry=   createAsyncThunk ('country/delete',  async(id ,thunkAPI) =>{
      const {rejectWithValue , getState} = thunkAPI
      const token= getState().auth.token
      try {
        const body= JSON.stringify(id)
        const response = await axios.delete("https://thebeauwow.me/api/v1/admin/country/delete/", {
          headers: {
            'Content-Type': 'application/json', 
            'Authorization': `Bearer ${token}`,
          },data: body})
          if(response.status==200)
        {  return id}
        }
        catch (e) {
          return rejectWithValue(e.response.data);
      }
      })
      export const addCity = createAsyncThunk ('cities/add',  async(city ,thunkAPI) =>{
        const {rejectWithValue , getState} = thunkAPI
        const token= getState().auth.token
        try {
          const body= JSON.stringify(city)
          const response = await axios.post("https://thebeauwow.me/api/v1/admin/city/create/", body, {
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
        export const addArea = createAsyncThunk ('areas/add',  async(area ,thunkAPI) =>{
          const {rejectWithValue , getState} = thunkAPI
          const token= getState().auth.token
          try {
            const body= JSON.stringify(area)
            const response = await axios.post("https://thebeauwow.me/api/v1/admin/area/create/", body, {
              headers: {
                'Content-Type': 'application/json', 
                'Authorization': `Bearer ${token}`,
              }})
            
             return area
            }
            catch (e) {
              return rejectWithValue(e.response.data);
          }
          })

        export const deleteCity=   createAsyncThunk ('city/delete',  async(id ,thunkAPI) =>{
          const {rejectWithValue , getState} = thunkAPI
          const token= getState().auth.token
          try {
            const body= JSON.stringify(id)
            const response = await axios.delete("https://thebeauwow.me/api/v1/admin/city/delete/", {
              headers: {
                'Content-Type': 'application/json', 
                'Authorization': `Bearer ${token}`,
              },data: body})
              if(response.status==200)
            {  return id}
            }
            catch (e) {
              return rejectWithValue(e.response.data);
          }
          })
          export const deleteArea=   createAsyncThunk ('area/delete',  async(id ,thunkAPI) =>{
            const {rejectWithValue , getState} = thunkAPI
            const token= getState().auth.token
            try {
              const body= JSON.stringify(id)
              const response = await axios.delete("https://thebeauwow.me/api/v1/admin/area/delete/", {
                headers: {
                  'Content-Type': 'application/json', 
                  'Authorization': `Bearer ${token}`,
                },data: body})
                if(response.status==200)
              {  return id}
              }
              catch (e) {
                return rejectWithValue(e.response.data);
            }
            })
  const countriesSlice= createSlice({
    name:'discounts',
    initialState : {countriesList:[],cityadded:false,areaAdded:false,cityUpdated:false, isLoading:false,addLoading:false, error:null},
    reducers:{
      clearstate:(state)=>{
        state.cityadded= false
        state.cityUpdated= false
        state.error= false

      }
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

              // state.isLoading = true
              state.error = null
              state.cityadded=false
              
            
         },
         [ addCity.fulfilled ] :(state,action)=>{
          state.isLoading = false
          state.error= null
         
          state.cityadded=true

        const currentState = current(state)
        const index = currentState.countriesList.findIndex(country => country.id == action.payload.country_id);                                            
        const newArray = [...currentState.countriesList];     
        newArray[index] = {...newArray[index], cities :[action.payload ,...newArray[index].cities]}
        console.log(newArray)
        console.log([...newArray[index].cities,action.payload])
        state.countriesList=newArray;
      




          },
          [ addCity.rejected ] :(state,action)=>{
               state.isLoading = false
               state.error = action.payload 
               state.cityadded=false
             
          }, 

          [ addArea.pending ] :(state,action)=>{

            // state.isLoading = true
            state.error = null
            state.areaAdded=false
            
          
       },
       [ addArea.fulfilled ] :(state,action)=>{
        state.isLoading = false
        state.error= null
       
        state.areaAdded=true

      const currentState = current(state)
      const index = currentState.countriesList.findIndex(country => country.id == action.payload.country_id);                                            
      const newArray = [...currentState.countriesList]; 
      const cityindex = newArray[index].cities.findIndex(city => city.id == action.payload.city_id);
      const newCityArray = [...currentState.countriesList[index].cities];     
      newCityArray[cityindex] = {...newCityArray[cityindex], areas :[action.payload ,...newCityArray[cityindex].areas]}
    
       console.log(newCityArray)
   
      console.log(index)
      console.log(newArray[index])
      console.log(action.payload)

      newArray[index] = {...newArray[index], cities :newCityArray}
      console.log(newArray)
     
      state.countriesList=newArray;
    




        },
        [ addArea.rejected ] :(state,action)=>{
             state.isLoading = false
             state.error = action.payload 
             state.areaAdded=false
           
        }, 
     
       
    }
 


})
export default countriesSlice.reducer