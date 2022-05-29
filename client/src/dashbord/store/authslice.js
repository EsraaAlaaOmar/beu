
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
export const adminRegister = createAsyncThunk ('auth/adminregister', 
    async(adminData ,thunkAPI) =>{
    const {rejectWithValue, getState} = thunkAPI
    try{
      const token= getState().auth.token
      const body= JSON.stringify(adminData)
      const response = await axios.post("https://test-beau-wow.herokuapp.com/api/v1/admin/users/admins/create/", body, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, 
          
        }})
        return ({...adminData, ...response.data}) 
       
    }
    catch (e) {
      return rejectWithValue(e.message);
  }
    //   const  res= await fetch("https://test-beau-wow.herokuapp.com/api/v1/admin/users/admins/create/",
      
    //     {
    //         method: "POST",
    //         body: JSON.stringify(adminData),
            
    //         headers: {
    //             'Content-Type': 'application/json', 
    //              'Authorization': `Bearer ${token}`,
           
    //         }
    //     }
    //     )
        

        
    //     return adminData
    //     // await res.json();               
    //   //  return data
    // }
    // catch(e){
    //   console.log(e)
    //   return rejectWithValue(e.message)
      
    // }

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
      
      return rejectWithValue(e.message)
      
    }

})

export const login = createAsyncThunk ('auth/login', 
    async(loginData ,thunkAPI) =>{
    const {rejectWithValue} = thunkAPI
    try{
      const body= JSON.stringify(loginData)
      const response = await axios.post("https://thebeauwow.me/api/v1/login/", body, {
        headers: {
          'Content-Type': 'application/json', 
          
        }})
      
        return  await response.data
      }
      
      catch (e) {
        return rejectWithValue(e.message);
    }
})



const authSlice = createSlice({
    name: 'auth',
    initialState: { loggedIn: false, isLoading:false, error:null, adminDetailsdata:{}, token:sessionStorage.getItem('token'),},
    reducers:{
      logOut:(state)=>{
        state.token='';
       
    
       
      },
    }
    ,
    extraReducers:{
        [adminRegister.pending]:(state,action)=>{
           
            state.isLoading = true
            state.error = null
    
        },
        [adminRegister.fulfilled]:(state,action)=>{
         
            state.isLoading = false
            state.error= null
         
    
        },
        [adminRegister.rejected]:(state,action)=>{
            state.isLoading = false
        
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
          sessionStorage.setItem('token', action.payload.access)
         
         
       
  
      },
      [login.rejected]:(state,action)=>{
          state.isLoading = false
          state.loggedIn=false
          state.error = action.payload
          console.log(action.payload)
  
      },

  

    }
  });
  export const { logOut } = authSlice.actions;


  export default authSlice.reducer