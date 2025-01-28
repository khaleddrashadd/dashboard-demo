import axios from '@/lib/axios';
export const consentTermsService = async (username) => {
  return await axios.get(`/Identity/Accept-ConsentTerms?userName=${username}`);
};
