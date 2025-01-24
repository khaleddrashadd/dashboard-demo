import filterReducer from '@/features/portfolioPerformance/store/filterSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
  },
});
