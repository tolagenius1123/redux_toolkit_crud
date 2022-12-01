import { configureStore } from "@reduxjs/toolkit";
import postReducer from './features/postSlice'

export default configureStore({
    name: "post",
    reducer: {
        app: postReducer
    },
})