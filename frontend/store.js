import {configureStore} from "@reduxjs/toolkit"
import noteApi from "./src/api/noteApi"
import { setupListeners } from "@reduxjs/toolkit/query"
const store=configureStore({
    reducer:{
        [noteApi.reducerPath]:noteApi.reducer
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(noteApi.middleware)
})
setupListeners(store.dispatch)
export default store