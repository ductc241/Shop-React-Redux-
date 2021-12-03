import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function RequireAdmin({ children }) {
  const {isLogin, user} = useSelector((state) => state.user);
  
  console.log(user)
  
  if (isLogin && user.userInfor.role === 'admin') {
    return children;
  }

  return <Navigate to="/admin/login" />;
}