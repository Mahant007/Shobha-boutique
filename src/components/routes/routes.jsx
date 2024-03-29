import React from 'react'
import { Routes } from 'react-router-dom'
import App from '../../App';

export const Mainroutes = () => {
  return (
    
      <Routes>
        <Routes path="/" element={<App />} />
      </Routes>
    
  );
}
