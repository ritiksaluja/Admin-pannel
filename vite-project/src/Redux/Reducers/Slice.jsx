import { createSlice } from "@reduxjs/toolkit";

export const DataSlice = createSlice({
    name : "Userdata" , 

    initialState : {
        index : 0 ,
        employedata : {}
        
    },
    reducers :{

        editdata:(state , action)=>{
           state.employedata = action.payload
        //    console.log(state.employedata)
        } , 

        Handlesidebarindex:(state , action)=>{
            state.index = action.payload
            // console.log(state.index)
        }

    }
})

export const {editdata , Handlesidebarindex} = DataSlice.actions
export default DataSlice.reducer