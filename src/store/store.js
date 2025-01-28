import bucketFilterReducer from '@/features/contracts/store/contractSlice';
import loginReducer from '@/features/login/store/loginSlice';
import filterReducer from '@/features/portfolioPerformance/store/filterSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    bucketFilter: bucketFilterReducer,
    loginState: loginReducer,
  },
});
