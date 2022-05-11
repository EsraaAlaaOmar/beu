
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const adminRegister = createAsyncThunk ('auth/adminregister', 
    async(adminData ,thunkAPI) =>{
    const {rejectWithValue, getState} = thunkAPI
    try{
      const token= getState().auth.token
      const  res= await fetch("https://test-beau-wow.herokuapp.com/api/v1/admin/users/admins/create/",
      
        {
            method: "POST",
            body: JSON.stringify(adminData),
            
            headers: {
                'Content-Type': 'application/json', 
                 'Authorization': `Bearer ${token}`,
           
            }
        }
        )
        

        
        return adminData
        // await res.json();               
      //  return data
    }
    catch(e){
      console.log(e)
      return rejectWithValue(e.message)
      
    }

})
export const userRegister = createAsyncThunk ('auth/userregister', 
    async(userData ,thunkAPI) =>{
    const {rejectWithValue, getState} = thunkAPI
    try{
      const token= getState().auth.token
      const  res= await fetch("https://test-beau-wow.herokuapp.com/api/v1/users/create/",
      
        {
            method: "POST",
            body: JSON.stringify(userData),
            
            headers: {
                'Content-Type': 'application/json', 
                 'Authorization': `Bearer ${token}`,
           
            }
        }
        )
        

        
        return userData
        // await res.json();               
      //  return data
    }
    catch(e){
      console.log(e)
      return rejectWithValue(e.message)
      
    }

})

export const login = createAsyncThunk ('auth/login', 
    async(loginData ,thunkAPI) =>{
    const {rejectWithValue} = thunkAPI
    try{
        console.log(loginData)
      const  res= await fetch("https://test-beau-wow.herokuapp.com/api/v1/login/",
        {
            method: "POST",
            body: JSON.stringify(loginData),
            
            headers: {
                'Content-Type': 'application/json', 
               
            }
        }
        )
      console.log(res)
       return  await res.json()
    }
    catch(e){
      return rejectWithValue
    }

})


const authSlice = createSlice({
    name: 'auth',
    initialState: { loggedIn: false, isLoading:false, error:null, token:''},
    reducer:{}
    ,
    extraReducers:{
        [adminRegister.pending]:(state,action)=>{
            state.loggedIn=false
            state.isLoading = true
            state.error = null
    
        },
        [adminRegister.fulfilled]:(state,action)=>{
            state.loggedIn=false
            state.isLoading = false
            state.error= null
         
    
        },
        [adminRegister.rejected]:(state,action)=>{
            state.isLoading = false
            state.loggedIn=false
            state.error = action.payload
            
    
        },
          [userRegister.pending]:(state,action)=>{
              state.loggedIn=false
              state.isLoading = true
              state.error = null
      
          },
          [userRegister.fulfilled]:(state,action)=>{
              state.loggedIn=false
              state.isLoading = false
              state.error= null
           
      
          },
          [userRegister.rejected]:(state,action)=>{
              state.isLoading = false
              state.loggedIn=false
              state.error = action.payload
              
      
          },
        [login.pending]:(state,action)=>{
          state.loggedIn=false
          state.isLoading = true
          state.error = null
  
      },
      [login.fulfilled]:(state,action)=>{
          state.loggedIn=true
          state.isLoading = false
          state.error= null
          state.token=action.payload.access
         
         
       
  
      },
      [login.rejected]:(state,action)=>{
          state.isLoading = false
          state.loggedIn=false
          state.error = action.payload
          console.log(action.payload)
  
      },

    }
  });

  export default authSlice.reducer