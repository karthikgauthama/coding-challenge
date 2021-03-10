import { createSlice } from '@reduxjs/toolkit';

export const SearchCountrySlice = createSlice({
  name: 'SearchParam',
  initialState: {
    searchKey: 5,
  },
  reducers: {
    search: (state: any, action: any) => {
      console.log(state, action);
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.searchKey = action.payload;
    },
  },
});

export const { search } = SearchCountrySlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectSearchParam = (state: any) => state.SearchParam.searchKey;

export default SearchCountrySlice.reducer;
