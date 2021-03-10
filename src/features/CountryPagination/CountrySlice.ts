import { createSlice } from '@reduxjs/toolkit';

export const countrySlice = createSlice({
  name: 'pagination',
  initialState: {
    currentPage: 1,
  },
  reducers: {
    change: (state: any, action: any) => {
      console.log(state, action);
      state.currentPage = action.payload;
    },
  },
});

export const { change } = countrySlice.actions;
export const selectCurrentPageSize = (state: any) => state.pagination.currentPage;

export default countrySlice.reducer;
