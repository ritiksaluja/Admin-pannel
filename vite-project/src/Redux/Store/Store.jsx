import {configureStore} from "@reduxjs/toolkit"
import  DataSlice  from "../Reducers/Slice"

export default  configureStore({
    reducer:{
        data: DataSlice
    }
})