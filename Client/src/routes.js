import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'layouts/DashboardLayout';
import MainLayout from 'layouts/MainLayout';
import AccountView from 'views/account/AccountView';
import CustomerListView from 'views/customer/CustomerListView';
import DashboardView from 'views/reports/DashboardView';
import LoginView from 'views/auth/LoginView';
import NotFoundView from 'views/errors/NotFoundView';
import ProductListView from 'views/product/ProductListView';
import RegisterView from 'views/auth/RegisterView';
import SettingsView from 'views/settings/SettingsView';
import VolunteerRequestForm from 'views/ngo/VolunteerRequestForm';
import Home from 'views/landing/Home';

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
      { path: 'home', element:<Home/> },
      { path: 'login', element: <LoginView /> },
      { path: 'register', element: <RegisterView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
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
