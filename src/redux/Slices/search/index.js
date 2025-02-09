import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
    name: 'search',
    initialState: { },
    reducers: {
        searchUser: (state) => state
    },
});

export const { searchUser } = createSlice.actions
export default searchSlice.reducer