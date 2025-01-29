import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalOpen: false,
  username: '',
  isFirstLogin: false,
  hasConsent: false,
  phoneNumber: '',
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.selectedYear = false;
    },
    toggleModal: (state) => {
      state.selectedMonth = !state.selectedMonth;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setIsFirstLogin: (state, action) => {
      state.isFirstLogin = action.payload;
    },
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
    setHasConsent: (state, action) => {
      state.hasConsent = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
const loginReducer = loginSlice.reducer;
export default loginReducer;
export const {
  closeModal,
  openModal,
  toggleModal,
  setIsFirstLogin,
  setUsername,
  setPhoneNumber,
  setHasConsent,
} = loginSlice.actions;
export const getModalState = (state) => state.loginState.isModalOpen;
export const getUsername = (state) => state.loginState.username;
export const getIsFirstLogin = (state) => state.loginState.isFirstLogin;
export const getPhoneNumber = (state) => state.loginState.phoneNumber;
export const getHasConsent = (state) => state.loginState.hasConsent;
