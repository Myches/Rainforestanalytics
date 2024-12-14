
import axios from 'axios';


export const fetchReportData = async (token: string) => {
  const response = await fetch('/api/report', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch report data');
  }

  const data = await response.json();
  return data;
};


const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL 

export const logoutUser = async (token: string) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/logout`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (err) {
    console.error('Error during logout:', err);
    throw new Error('Logout failed.');
  }
};