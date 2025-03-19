import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  url :{},
  geners: {},
  totalPages:"",
}

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
   getApiConfigurations:(state, action) => {
     state.url = action.payload.results;
     state.totalPages = action.payload.total_pages;
   },
   getGeners:(state, action) => {
    state.geners = action.payload;
   }, 
  },
})

// Action creators are generated for each case reducer function
export const { getApiConfigurations, getGeners } = homeSlice.actions

export default homeSlice.reducer