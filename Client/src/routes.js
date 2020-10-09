import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import AccountView from 'src/views/account/AccountView';
import CustomerListView from 'src/views/customer/CustomerListView';
import DashboardView from 'src/views/reports/DashboardView';
import LoginView from 'src/views/auth/LoginView';
import NotFoundView from 'src/views/errors/NotFoundView';
import ProductListView from 'src/views/product/ProductListView';
import RegisterView from 'src/views/auth/RegisterView';
import SettingsView from 'src/views/settings/SettingsView';
import VolunteerRequestForm from 'src/views/ngo/VolunteerRequestForm';
import Home from 'src/views/landing/Home';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <AccountView /> },
      { path: 'volunteers', element: <CustomerListView /> },
      { path: 'dashboard', element: <DashboardView /> },
      { path: 'events', element: <ProductListView /> },
      { path: 'settings', element: <SettingsView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginView /> },
      { path: 'register', element: <RegisterView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Home/> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: 'ngo',
    element: <MainLayout />,
    children: [
      { path: 'request', element: <VolunteerRequestForm /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
