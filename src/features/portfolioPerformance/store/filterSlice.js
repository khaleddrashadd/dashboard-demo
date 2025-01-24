import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedYear: ' ',
  selectedMonth: ' ',
};

export const counterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    selectYear: (state, action) => {
      state.selectedYear = action.payload;
    },
    selectMonth: (state, action) => {
      state.selectedMonth = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
const filterReducer = counterSlice.reducer;
export default filterReducer;
export const { selectMonth, selectYear } = counterSlice.actions;
export const getSelectedYear = (state) => state.filter.selectedYear;
export const getSelectedMonth = (state) => state.filter.selectedMonth;
