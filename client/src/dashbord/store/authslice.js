
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";
import axios from 'axios';
const cookies = new Cookies();
export const adminRegister = createAsyncThunk ('auth/adminregister', 
    async(adminData ,thunkAPI) =>{
    const {rejectWithValue, getState} = thunkAPI
    try{
      const token= getState().auth.token
      const body= JSON.stringify(adminData)
      const response = await axios.post("https://thebeauwow.me/api/v1/admin/create_admin/", body, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, 
          
        }})
        return ({...adminData, ...response.data}) 
       
    }
    catch (e) {
      return rejectWithValue(e.response.data);
  }
    //   const  res= await fetch("https://thebeauwow.me/api/v1/admin/users/admins/create/",
      
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
    //   return rejectWithValue(e.response.data)
      
    // }

})
export const userRegister = createAsyncThunk ('auth/userregister', 
    async(userData ,thunkAPI) =>{
    const {rejectWithValue, getState} = thunkAPI
    try{
      const token= getState().auth.token
      const body= JSON.stringify(userData)
      const response = await axios.post("https://thebeauwow.me/api/v1/admin/create_customer/", body, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, 
          
        }})
        return ({...userData, ...response.data}) 
       
    }
    catch (e) {
      return rejectWithValue(e.response.data);
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
      
        return  await {...response.data , ['remember']:loginData.remember}
      }
      
      catch (e) {
        return rejectWithValue(e.response.data);
    }
})

export const userSignUp = createAsyncThunk ('user/register', 
    async(data ,thunkAPI) =>{
    const {rejectWithValue} = thunkAPI
    try{
      const body= JSON.stringify(data)
      const response = await axios.post("https://thebeauwow.me/api/v1/customer/register/", body, {
        headers: {
          'Content-Type': 'application/json',
          
        }})
        return response.data 
       
    }
    catch (e) {
      return rejectWithValue(e.response.data);
  }
   

})
export const editeUser = createAsyncThunk ('auth/update',  async(userData,thunkAPI) =>{
  const {rejectWithValue , getState} = thunkAPI
  const token= getState().auth.token
  const config = {     
    headers: { 'content-type': 'application/json',
               'Authorization': `Bearer ${token}`,
  }}
try{
  

  
  
  if(userData.email == ''){
      delete userData['email']
    }
    if(userData.new_password == ''){
      delete userData['new_password']
    }
    if(userData.old_password == ''){
      delete userData['old_password']
    }
let formData = new FormData(); 
formData.append('avatar', userData.avatar);
let body= JSON.stringify(userData)
let response = 
userData.avatar? 
await axios.put("https://thebeauwow.me/api/v1/user/update/", formData, config)
:await axios.put("https://thebeauwow.me/api/v1/user/update/", body, config)

  if(response.status == 200) {
    return  ({...userData, ...response.data}) 
  }


 
}
catch (e) {
     
 return rejectWithValue(e.response.data)
}


})

const authSlice = createSlice({
    name: 'auth',
    initialState: { loggedIn: cookies.get("login")?cookies.get("login"):false, userInfo:cookies.get("userinfo")?cookies.get("userinfo"):null, isLoading:false, error:null, adminDetailsdata:{}, token:cookies.get("token")? cookies.get("token"):"",updated:false},
    reducers:{
      logOut:(state)=>{
        cookies.remove("login")
        cookies.remove("token")
        cookies.remove("userDetails")
         cookies.remove("userinfo")
        cookies.set("login",false)
        cookies.set("token",null)
        cookies.set("userDetails", null)
         cookies.set("userinfo", null)
        localStorage.clear();
        state.token=null;
        state.loggedIn=false;
     state.userInfo=null;
     state.userDetails=false;
       
       
    
       
      },
      clearstate:(state)=>{
        state.error= false;
        state.updated=false;
       

      }
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
           state.userInfo=action.payload
           let remember=action.payload.remember
          let date= new Date()
          let expire =remember? new Date(new Date().setDate(date.getDate()+6)) : new Date(new Date().setDate(date.getDate()+1)) 
         console.log(action.payload)
         cookies.remove("login")
         cookies.remove("token")
          cookies.set("token", action.payload.access, {expires : expire})
          cookies.set("login", true,{expires :expire})
          cookies.set("userinfo",action.payload,{expires : expire})
         
         
       
  
      },
      [login.rejected]:(state,action)=>{
          state.isLoading = false
          state.loggedIn=false
          state.error = action.payload
          console.log(action.payload)
  
      },

      [userSignUp.pending]:(state,action)=>{
        state.loggedIn=false
        state.isLoading = true
        state.error = null

    },
    [userSignUp.fulfilled]:(state,action)=>{
        state.loggedIn=true
        state.isLoading = false
        state.error= null
        state.token=action.payload.access
         state.userInfo=action.payload
         let remember=action.payload.remember
        let date= new Date()
        let expire =remember? new Date(new Date().setDate(date.getDate()+6)) : new Date(new Date().setDate(date.getDate()+1)) 
       console.log(action.payload)
       cookies.remove("login")
       cookies.remove("token")
        cookies.set("token", action.payload.access, {expires : expire})
        cookies.set("login", true,{expires :expire})
        cookies.set("userinfo",action.payload,{expires : expire})
       
       
     

    },
    [userSignUp.rejected]:(state,action)=>{
        state.isLoading = false
        state.loggedIn=false
        state.error = action.payload
        console.log(action.payload)

    },
    [editeUser.pending]:(state,action)=>{
      state.isLoading = true
      state.error = null
      state.updated=false

  },
  [editeUser.fulfilled]:(state,action)=>{
      state.isLoading = false
      state.error= null
       state.userInfo=action.payload
      let date= new Date()
      let expire =new Date(new Date().setDate(date.getDate()+6))  
     cookies.remove("userinfo")
     cookies.set("userinfo",action.payload,{expires : expire})
     
     state.updated=true
     
     
   

  },
  [editeUser.rejected]:(state,action)=>{
      state.isLoading = false
      state.error = action.payload
      
      state.updated=false
  },

  

    }
  });
  export const { logOut } = authSlice.actions;
  export const { clearstate } = authSlice.actions;



  export default authSlice.reducer