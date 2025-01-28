import axios from '@/lib/axios';
export const changePasswordService = async (data) => {
  return await axios.post('/Identity/reset-password', {
    userName: data.username,
    password: data.password,
    confirmPassword: data.confirmPassword,
  });
};
