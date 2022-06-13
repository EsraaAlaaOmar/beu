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

        export const deleteCity=   createAsyncThunk ('city/delete',  async(data ,thunkAPI) =>{
          const {rejectWithValue , getState} = thunkAPI
          const token= getState().auth.token
          try {
            const body= JSON.stringify(data.id)
            const response = await axios.delete("https://thebeauwow.me/api/v1/admin/city/delete/", {
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
          export const deleteArea=   createAsyncThunk ('area/delete',  async(data ,thunkAPI) =>{
            const {rejectWithValue , getState} = thunkAPI
            const token= getState().auth.token
            try { 
              const body= JSON.stringify(data.id)
              const response = await axios.delete("https://thebeauwow.me/api/v1/admin/area/delete/", {
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
  const countriesSlice= createSlice({
    name:'discounts',
    initialState : {countriesList:[],countryAdded:false,countryupdated:false,countryDeleted:false,cityadded:false,areaAdded:false,cityUpdated:false,cityDeleted:false,areaUpdated:false,areaDeleted:false, isLoading:false,addLoading:false, error:null},
    reducers:{
      clearstate:(state)=>{
        state.cityadded= false
        state.cityUpdated= false
        state.countryupdated= false
        state.countryAdded= false
        state.countryDeleted= false
        state.error= false
        state.areaAdded=false
        state.areaUpdated=false

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
            state.countryAdded=false
            
          
       },
       [ addCountry.fulfilled ] :(state,action)=>{
        state.isLoading = false
        state.error= null
        state.countriesList  = [...state.countriesList, action.payload]
        state.countryAdded=true
      
    
        
        },
        [ addCountry.rejected ] :(state,action)=>{
             state.isLoading = false
             state.error = action.payload
             console.log(`esraa ${action.payload}`)
             state.countryAdded=false
          
           
        }, 
         //....... delete country .........
      [ deleteCountry.pending ] :(state,action)=>{

        state.isLoading = true
        state.error = null
        state.countryDeleted= false
        
      
   },
   [ deleteCountry.fulfilled ] :(state,action)=>{
    state.isLoading = false
    state.error= null
    state.countriesList = state.countriesList.filter((country)=>country.id !== action.payload.country_id)
    
    state.countryDeleted= true
  

    
    },
    [ deleteCountry.rejected ] :(state,action)=>{
         state.isLoading = false
         state.error = action.payload
         console.log(`esraa ${action.payload}`)
         state.countryDeleted= false
      
       
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
            state.countryupdated=false
         
          
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
       state.countryupdated=true
    
        
        },
    
        [ editeCountry.rejected ] :(state,action)=>{
             state.isLoading = false
             state.error = action.payload
             state.countryupdated=false
           
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
      [ deleteCity.pending ] :(state,action)=>{

        state.isLoading = true
        state.error = null
        state.cityDeleted= false
        
      
   },
   [ deleteCity.fulfilled ] :(state,action)=>{
    state.isLoading = false
    state.error= null
   

    const currentState = current(state)
    const index = currentState.countriesList.findIndex(country => country.id == action.payload.countryId);  
                                              
    const newArray = [...currentState.countriesList];     
    const newCitiesArray =newArray[index].cities.filter(city=>city.id!== action.payload.id.city_id)     
     newArray[index] = {...newArray[index], cities :newCitiesArray}
    console.log(action.payload)
    console.log(newArray)
    state.countriesList=newArray;
    state.cityDeleted= true
  

    
    },
    [ deleteCity.rejected ] :(state,action)=>{
         state.isLoading = false
         state.error = action.payload
         state.cityDeleted= false
      
       
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
          state.areaUpdated=false
          
        
     },
     [ editeArea.fulfilled ] :(state,action)=>{
      state.isLoading = false
      state.error= null
     
      state.areaUpdated=true

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
           state.areaUpdated=false
         
      }, 
      [ deleteArea.pending ] :(state,action)=>{

        state.isLoading = true
        state.error = null
        state.areaDeleted= false
        
      
   },
   [ deleteArea.fulfilled ] :(state,action)=>{
    state.isLoading = false
    state.error= null

    state.areaDeleted= true
  
    const currentState = current(state)

    const index = currentState.countriesList.findIndex(country => country.id == action.payload.countryId);                                            
    const newArray = [...currentState.countriesList]; 
    const cityindex = newArray[index].cities.findIndex(city => city.id == action.payload.cityId);
    const newCityArray = [...currentState.countriesList[index].cities]; 
    const newAreaArray=  newCityArray[cityindex].areas.filter(area => area.id !== action.payload.id.area_id)
    newCityArray[cityindex] = {...newCityArray[cityindex], areas :newAreaArray}
    newArray[index] = {...newArray[index], cities :newCityArray}
    state.countriesList=newArray;
    
    },
    [ deleteArea.rejected ] :(state,action)=>{
         state.isLoading = false
         state.error = action.payload
         console.log(`esraa ${action.payload}`)
         state.areaDeleted= false
      
       
    }, 

     
       
    }
 


})
export const {clearstate} = countriesSlice.actions
export default countriesSlice.reducer