import { axiosPrivate } from '@/lib/axios';

export const getData = async (data) => {
  try {
    const response = await axiosPrivate.get(
      `http://localhost:4000/api/data?year=${data.selectedYear
        .toString()
        .trim()}&month=${data.selectedMonth.toString().trim()}&portfolio=${
        data.selectedPortfolio
      }`
    );
    return response.data.data;
  } catch (error) {
    Promise.reject(error);
  }
};
