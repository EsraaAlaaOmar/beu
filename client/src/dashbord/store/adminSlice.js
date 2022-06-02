import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { adminRegister } from "./authslice";
import axios from 'axios';

export const getAdmins = createAsyncThunk ('admins/get',  async(_ ,thunkAPI) =>{
    const {rejectWithValue , getState} = thunkAPI
  
  try{
    const token= getState().auth.token
    let res = await axios.get("https://thebeauwow.me/api/v1/admin/admins_list/",{
      headers: {
    'Content-Type': 'application/json', 
     'Authorization': `Bearer ${token}`,}
    
    })
      return res.data.results
  }
  catch(e){
    return rejectWithValue(e.response.data)

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
  let response = await axios.put("https://thebeauwow.me/api/v1/admin/update_admin/", body, config)
  
    if(response.status == 200) {
      return  ({...editedadminData, ...response.data}) 
    }
 
  
   
  }
  catch(e){
    return rejectWithValue(e.response.data)
    
  }
 

})

export const deleteAdmin=   createAsyncThunk ('admin/delete',  async(id ,thunkAPI) =>{
  const {rejectWithValue , getState} = thunkAPI
  const token= getState().auth.token
  try {
    const body= JSON.stringify(id)
    const response = await axios.delete("https://thebeauwow.me/api/v1/admin/categories/delete/", {
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
    initialState : {adminsList:[], isLoading:false,added:false, updated:false ,addLoading:false, error:null},
    reducers:{
      clearstate:(state)=>{
        state.added= false
        state.updated= false
        state.error= false

      }

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
          state.added = false

      },
        [adminRegister.fulfilled]:(state,action)=>{
          
            state.adminsList= [...state.adminsList, action.payload]
            state.added = true

        },
        [adminRegister.rejected]:(state,action)=>{
          
          state.error = action.payload
          state.added = false

      },
        //edite admin
        [ editeAdmin.pending ] :(state,action)=>{

          state.isLoading = true
          state.error = null
          state.updated = false
       
        
     },
     [ editeAdmin.fulfilled ] :(state,action)=>{
      state.isLoading = false;
      state.error= null;
      const index = state.adminsList.findIndex(admin => admin.id == action.payload.admin_id);                                                            
      const newArray = [...state.adminsList]; 
      if(index)
      {  newArray[index] = action.payload;}
     state.adminsList=newArray ;
     state.updated = true
      
      },

      [ editeAdmin.rejected ] :(state,action)=>{
           state.isLoading = false
           state.error = action.payload
         console.log(action)
         state.updated = false
         
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

export const {clearstate} = adminSlice.actions
export default adminSlice.reducer