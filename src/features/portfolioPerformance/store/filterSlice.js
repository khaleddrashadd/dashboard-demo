import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedYear: ' ',
  selectedMonth: ' ',
};

export const homeDateFilterSlice = createSlice({
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
const filterReducer = homeDateFilterSlice.reducer;
export default filterReducer;
export const { selectMonth, selectYear } = homeDateFilterSlice.actions;
export const getSelectedYear = (state) => state.filter.selectedYear;
export const getSelectedMonth = (state) => state.filter.selectedMonth;
