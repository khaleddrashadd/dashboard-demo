import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedBuckets: [
    { id: 1, name: 'Current' },
    { id: 2, name: 'Grace period' },
    { id: 3, name: 'Bucket 1' },
    { id: 4, name: 'Bucket 2' },
    { id: 5, name: 'Bucket 3' },
    { id: 6, name: 'Bucket 4' },
    { id: 7, name: 'Bucket 5' },
    { id: 8, name: 'Bucket 6' },
    { id: 9, name: 'Write off' },
    { id: 10, name: 'Closed' },
  ],
  selectedPortfolio: ' ',
  selectedYear: ' ',
  selectedMonth: ' ',
};

export const buckerFilterSlice = createSlice({
  name: 'bucketFilter',
  initialState,
  reducers: {
    selectBuckets: (state, action) => {
      state.selectedBuckets = action.payload;
    },
    selectYear: (state, action) => {
      state.selectedYear = action.payload;
    },
    selectMonth: (state, action) => {
      state.selectedMonth = action.payload;
    },
    selectPortfolio: (state, action) => {
      state.selectedPortfolio = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
const bucketFilterReducer = buckerFilterSlice.reducer;
export default bucketFilterReducer;
export const { selectBuckets, selectMonth, selectYear, selectPortfolio } =
  buckerFilterSlice.actions;
export const getSelectedBuckets = (state) => state.bucketFilter.selectedBuckets;
export const getSelectedYear = (state) => state.bucketFilter.selectedYear;
export const getSelectedMonth = (state) => state.bucketFilter.selectedMonth;
export const getSelectedPortfolio = (state) =>
  state.bucketFilter.selectedPortfolio;
