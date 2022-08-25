import { createSlice, createAsyncThunk ,current } from "@reduxjs/toolkit";

const langSlice= createSlice({
    name:'language',
    initialState : { enLanguage:true},
    reducers:{
        changeLanguage:(state)=> {
            const currentState = current(state)
            state.enLanguage = !currentState.enLanguage;
        }
      
   
    },
    extraReducers:{
     
    //   [ changeLanguage.pending ] :(state,action)=>{

         
          
     
    //  },
    //  [ changeLanguage ] :(state,action)=>{
     
    //   state.language = action.payload
     
  
      
    //   },
    //   [ changeLanguage.rejected ] :(state,action)=>{
         
          
       
         
    //   }, 

    }
 

})
export const { changeLanguage } = langSlice.actions;
export default langSlice.reducer