import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Navigate } from 'react-router-dom';

export default function RequireAdmin({ children }) {
  // const userSignin = useSelector((state) => state.userSignin);

  if (false) {
    return <Navigate to="/admin/login" />;
  }

  return children;
}