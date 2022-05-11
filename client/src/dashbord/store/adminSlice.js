import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { adminRegister } from "./authslice";
import axios from 'axios';

export const getAdmins = createAsyncThunk ('admins/get',  async(_ ,thunkAPI) =>{
    const {rejectWithValue , getState} = thunkAPI
  
  try{
    const token= getState().auth.token
    let res = await axios.get("https://test-beau-wow.herokuapp.com/api/v1/admin/users/admins/",{
      headers: {
    'Content-Type': 'application/json', 
     'Authorization': `Bearer ${token}`,}
    
    })
      return res.data
  }
  catch(e){
    return rejectWithValue(e.message)
  }
  
  })
  export const editeAdmin = createAsyncThunk ('admins/updat',  async(editedadminData,thunkAPI) =>{
    const {rejectWithValue , getState} = thunkAPI
    const token= getState().auth.token
    const config = {     
      headers: { 'content-type': 'application/json',
                 'Authorization': `Bearer ${token}`,
    }}
  try{
  
  let body= JSON.stringify(editedadminData)
  let response = await axios.put("https://test-beau-wow.herokuapp.com/api/v1/admin/users/admins/update/", body, config)
  
    if(response.status == 200) {
      return  ({...editedadminData, ...response.data}) 
    }
 
  
   
  }
  catch(e){
    return rejectWithValue(e.message)
    
  }
 

})

export const deleteAdmin=   createAsyncThunk ('admin/delete',  async(id ,thunkAPI) =>{
  const {rejectWithValue , getState} = thunkAPI
  const token= getState().auth.token
  try {
    const body= JSON.stringify(id)
    const response = await axios.delete("https://test-beau-wow.herokuapp.com/api/v1/admin/categories/delete/", {
      headers: {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}`,
      },data: body})
      if(response.status==200)
     return id 
    }
    catch (e) {
      return rejectWithValue(e);
  }
  })
  
  const adminSlice= createSlice({
    name:'discounts',
    initialState : {adminsList:[], isLoading:false,addLoading:false, error:null},
    reducers:{

    },
    extraReducers:{
         // ............. start getAdmins ......................
        [ getAdmins.pending ] :(state,action)=>{

            state.isLoading = true
            state.error = null
            
          
       },
       [ getAdmins.fulfilled ] :(state,action)=>{
        state.isLoading = false
        state.error= null
        state.adminsList = action.payload
    
        
        },
        [ getAdmins.rejected ] :(state,action)=>{
             state.isLoading = false
             state.error = action.payload
           console.log(action)
           
        }, 
        // ............. end getAdmins ......................
        //add admin
        [adminRegister.pending]:(state,action)=>{
          
          state.error=null;

      },
        [adminRegister.fulfilled]:(state,action)=>{
          
            state.adminsList= [...state.adminsList, action.payload]

        },
        [adminRegister.rejected]:(state,action)=>{
          
          state.error = action.payload

      },
        //edite admin
        [ editeAdmin.pending ] :(state,action)=>{

          state.isLoading = true
          state.error = null
       
        
     },
     [ editeAdmin.fulfilled ] :(state,action)=>{
      state.isLoading = true;
      state.error= null;
      const index = state.adminsList.findIndex(admin => admin.id == action.payload.admin_id);                                                            
      const newArray = [...state.adminsList]; 
      if(index)
      {  newArray[index] = action.payload;}
     state.adminsList=newArray ;
  
      
      },

      [ editeAdmin.rejected ] :(state,action)=>{
           state.isLoading = false
           state.error = action.payload
         console.log(action)
         
      }, 

        //....... delete collection .........
        [ deleteAdmin.pending ] :(state,action)=>{

          state.isLoading = true
          state.error = null
          
        
     },
     [ deleteAdmin.fulfilled ] :(state,action)=>{
      state.isLoading = false
      state.error= null
      state.collectionsList  = state.collectionsList.filter((collection)=>collection.id != action.payload.category_id)
      
    
  
      
      },
      [ deleteAdmin.rejected ] :(state,action)=>{
           state.isLoading = false
           state.error = action.payload
           console.log(`esraa ${action.payload}`)
        
         
      }, 
    }


})
export default adminSlice.reducer