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
      export const editeCountry = createAsyncThunk ('country/update',  async(EditeCountryData,thunkAPI) =>{
        const {rejectWithValue , getState} = thunkAPI
        const token= getState().auth.token
        const config = {     
          headers: { 'content-type': 'application/json',
                     'Authorization': `Bearer ${token}`,
        }}
      try{
        if(EditeCountryData.oldName == EditeCountryData.name ){
          delete EditeCountryData.name
        
        }
        if(EditeCountryData.oldCode == EditeCountryData.code ){
          delete EditeCountryData.code
        
        }
        if(EditeCountryData.oldPhone_code == EditeCountryData.phone_code ){
          delete EditeCountryData.phone_code
        
        }
        let data = EditeCountryData
      let body= JSON.stringify(data)
      let response = await axios.put("https://thebeauwow.me/api/v1/admin/country/update/", body, config)
      
        
          return   {...response.data,cities:EditeCountryData.cities} 
        
      
      
       
      }
      catch (e) {
           
       return rejectWithValue(e.response.data)
      }
      
      
      })
      export const editeCity = createAsyncThunk ('city/update',  async(EditeCityData,thunkAPI) =>{
        const {rejectWithValue , getState} = thunkAPI
        const token= getState().auth.token
        const config = {     
          headers: { 'content-type': 'application/json',
                     'Authorization': `Bearer ${token}`,
        }}
      try{
        if(EditeCityData.oldName == EditeCityData.name ){
          delete EditeCityData.name
        
        }
       
        let data = EditeCityData
      let body= JSON.stringify(data)
      let response = await axios.put("https://thebeauwow.me/api/v1/admin/city/update/", body, config)
      
        
          return   EditeCityData 
        
      
      
       
      }
      catch (e) {
           
       return rejectWithValue(e.response.data)
      }
      
      
      })
      export const editeArea = createAsyncThunk ('area/update',  async(EditeAreaData,thunkAPI) =>{
        const {rejectWithValue , getState} = thunkAPI
        const token= getState().auth.token
        const config = {     
          headers: { 'content-type': 'application/json',
                     'Authorization': `Bearer ${token}`,
        }}
      try{
        if(EditeAreaData.oldName == EditeAreaData.name ){
          delete EditeAreaData.name
        
        }
       
        let data = EditeAreaData
      let body= JSON.stringify(data)
      let response = await axios.put("https://thebeauwow.me/api/v1/admin/area/update/", body, config)
      
        
          return   EditeAreaData 
        
      
      
       
      }
      catch (e) {
           
       return rejectWithValue(e.response.data)
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
    initialState : {countriesList:[],countryAdded:false,countryupdated:false,cityadded:false,areaAdded:false,cityUpdated:false,areaUpdated:false, isLoading:false,addLoading:false, error:null},
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
          [ editeCountry.pending ] :(state,action)=>{

            state.isLoading = true
            state.error = null
         
          
       },
       [ editeCountry.fulfilled ] :(state,action)=>{
        state.isLoading = false;
        state.error= null;
        state.updated=true
        const index = state.countriesList.findIndex(country => country.id == action.payload.id);        
        console.log(index)                                                    
        const newArray = [...state.countriesList]; 
        
          newArray[index] = action.payload;
       state.countriesList=newArray ;
       console.log(newArray)
       console.log(action.payload)
    
        
        },
    
        [ editeCountry.rejected ] :(state,action)=>{
             state.isLoading = false
             state.error = action.payload
           console.log(action)
           
        }, 
        [ editeCity.pending ] :(state,action)=>{

          // state.isLoading = true
          state.error = null
          state.cityUpdated=false
          
        
     },
     [ editeCity.fulfilled ] :(state,action)=>{
      state.isLoading = false
      state.error= null
     
      state.cityUpdated=true

    const currentState = current(state)
    const index = currentState.countriesList.findIndex(country => country.id == action.payload.country_id);  
                                              
    const newArray = [...currentState.countriesList];     
    const newCitiesArray =[...newArray[index].cities];     
    const cityIndex=newArray[index].cities.findIndex(city => city.id== action.payload.city_id)
    newCitiesArray[cityIndex]=action.payload
  newArray[index] = {...newArray[index], cities :newCitiesArray}
    console.log(action.payload)
    console.log(newArray)
    state.countriesList=newArray;
  




      },
      [ editeCity.rejected ] :(state,action)=>{
           state.isLoading = false
           state.error = action.payload 
           state.cityUpdated=false
         
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
        [ editeArea.pending ] :(state,action)=>{

          // state.isLoading = true
          state.error = null
          state.areaAdded=false
          
        
     },
     [ editeArea.fulfilled ] :(state,action)=>{
      state.isLoading = false
      state.error= null
     
      state.areaAdded=true

    const currentState = current(state)
    const index = currentState.countriesList.findIndex(country => country.id == action.payload.country_id);                                            
    const newArray = [...currentState.countriesList]; 
    const cityindex = newArray[index].cities.findIndex(city => city.id == action.payload.city_id);
    const newCityArray = [...currentState.countriesList[index].cities]; 
    const newAreaArray=  [...currentState.countriesList[index].cities[cityindex].areas]
    const areaIndex= newAreaArray.findIndex(area => area.id == action.payload.area_id);
    newAreaArray[areaIndex]=action.payload
    newCityArray[cityindex] = {...newCityArray[cityindex], areas :newAreaArray}
  
     console.log(newCityArray)
 
    console.log(index)
    console.log(newArray[index])
    console.log(action.payload)

    newArray[index] = {...newArray[index], cities :newCityArray}
    console.log(newArray)
   
    state.countriesList=newArray;
  




      },
      [ editeArea.rejected ] :(state,action)=>{
           state.isLoading = false
           state.error = action.payload 
           state.areaAdded=false
         
      }, 
     
       
    }
 


})
export const {clearstate} = countriesSlice.actions
export default countriesSlice.reducer