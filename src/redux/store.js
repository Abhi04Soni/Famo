import { createSlice, configureStore } from '@reduxjs/toolkit'
import searchSlice from './Slices/search'

const store = configureStore({
    reducer: {
        search: searchSlice
    },
})

export default store