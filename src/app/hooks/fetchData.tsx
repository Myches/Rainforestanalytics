'use client'

import { useEffect, useState } from 'react';
import { fetchReportData } from '../components/ApiService';
import { Report } from '../types/reportTypes';

export const useReport = () => {
  const [report, setReport] = useState<Report | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setError('No token found');
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const data = await fetchReportData(token);
        setReport(data);
      } catch (err: unknown) {
        
        if (err instanceof Error) {
          setError(err.message); 
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { report, error, loading };
};
