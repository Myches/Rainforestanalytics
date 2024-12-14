'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import {logoutUser} from "./ApiService"

const LogoutButton: React.FC = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token'); 
      if (!token) throw new Error('No token found');
      
      await logoutUser(token);
      
      localStorage.removeItem('token');

      router.push('/login');
    } catch (err) {
      console.error(err);
      alert('Logout failed.');
    }
  };

  return <button onClick={handleLogout} className="bg-red-400 p-2 text-white">Logout</button>;
};

export default LogoutButton;
