import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getDiscounts = createAsyncThunk ('discounts/get',  async(_ ,thunkAPI) =>{
  const {rejectWithValue , getState} = thunkAPI

try{
  const token= getState().auth.token

  
  const  res= await fetch("https://test-beau-wow.herokuapp.com/api/v1/admin/discounts/",
  
    {
        method: "GET",
        headers: {
            'Content-Type': 'application/json', 
             'Authorization': `bearer ${token}`,
        
        }
    }
    )
    

    
    return res.json() 
    // await res.json();               
  //  return data
}
catch(e){
  return rejectWithValue(e.message)
}

})
export const addDiscount = createAsyncThunk ('discounts/add',  async(discountData ,thunkAPI) =>{
  const {rejectWithValue , getState} = thunkAPI
  const token= getState().auth.token
//const token='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ2ODk0MzQ0LCJpYXQiOjE2NDYwMzAzNDQsImp0aSI6ImNlZGRmZjA0OTU2MDQ3NGZhNzAyOGM2MmJmNzJlNDRlIiwidXNlcl9pZCI6MX0.EJUZC1FE4XldJ8syppkdNHuuEyeDD8VeLHsOxUoM-lU'

try{
  
  const  res= await fetch("https://test-beau-wow.herokuapp.com/api/v1/admin/discounts/create/",
  
    {
        method: "POST",
        body: JSON.stringify(discountData),
        headers: {
            'Content-Type': 'application/json', 
             'Authorization': `Bearer ${token}`,
        
        }
    }
    )
    return (discountData)
    // await res.json();               
  //  return data
}
catch(e){
  console.log(e)
  return rejectWithValue(e.message)
  
}

})
const discountSlice= createSlice({
    name:'discounts',
    initialState : {discountList:[], isLoading:false,addLoading:false, error:null},
    reducers:{

    },
    extraReducers:{
        //get books 
        [ getDiscounts.pending ] :(state,action)=>{

            state.isLoading = true
            state.error = null
            
          //  console.log(action)
       },
       [ getDiscounts.fulfilled ] :(state,action)=>{
        state.isLoading = false
        state.error= null
        state.discountList = action.payload
     //  console.log(state.books)
        
        },
        [ getDiscounts.rejected ] :(state,action)=>{
             state.isLoading = false
             state.error = action.payload
           console.log(action)
           
        }, 
        [ addDiscount.pending ] :(state,action)=>{

          state.addLoading = true
          state.error = null
          
        //  console.log(action)
     },
     [ addDiscount.fulfilled ] :(state,action)=>{
      state.addLoading = false
      state.error= null
      state.discountList= [...state.discountList, action.payload]
      
      
   
      
      },
      [ addDiscount.rejected ] :(state,action)=>{
           state.addLoading = false
           state.error = action.payload
         console.log(action)
         
      }, 
    }


})
export default discountSlice.reducer