import React, { useContext } from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import App from '../App';
import SignUp from '../Store/SignUp/SignUp';
import ErrorPage from './error-page.jsx';
import Login from '../Store/LoginIn/Login.jsx';
import { UserContext } from '../contexts/Context.jsx';
import Profile from '../Store/Profile/Profile.jsx';
import ChatsMainScreen from '../Store/Chats/ChatsMainScreen.jsx';

export default function Routes() {
  const { user } = useContext(UserContext);

  const router = createBrowserRouter([
    {
      path: '/dashboard',
      element: user ? <App /> : <Navigate to="/login" />, // Redirect if not logged in
      errorElement: <ErrorPage />,
    },
    {
      path: '/dashboard/Profile',
      element: <Profile />,
    },
    {
      path: '/dashboard/Chats',
      element: <ChatsMainScreen />,
    },
    {
      path: '/signUp',
      element: !user ? <SignUp /> : <Navigate to="/dashboard" />, // Redirect if already logged in
    },
    {
      path: '/login',
      element: !user ? <Login /> : <Navigate to="/dashboard" />, // Redirect if already logged in
    },
  ]);

  return <RouterProvider router={router} />;
}