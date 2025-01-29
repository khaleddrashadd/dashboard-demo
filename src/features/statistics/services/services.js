import axios from '@/lib/axios';

export const getStatsService = async (legalOwnerId) => {
  return await axios.get(
    `/Statistics/get-statics-data?legalOwnerID${legalOwnerId}`
  );
};

export const getLegalOwnersService = async () => {
  return await axios.get(`/Statistics/legal-owners`);
};
