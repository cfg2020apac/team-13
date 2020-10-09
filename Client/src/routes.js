import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import NgoLayout from 'src/layouts/NgoLayout';
import VolunteerLayout from 'src/layouts/VolunteerLayout';
import AccountView from 'src/views/account/AccountView';
import VolunteerListView from 'src/views/volunteerAdmin/VolunteerListView';
import NgoListView from "./views/ngoAdmin/NgoListView";
import DashboardView from 'src/views/reports/DashboardView';
import NotFoundView from 'src/views/errors/NotFoundView';
import ProductListView from 'src/views/event/EventListView';
import LoginView from 'src/views/auth/AdminLoginView';
import RegisterView from 'src/views/auth/RegisterView';
import NgoLoginView from 'src/views/ngo/NgoLoginView';
import NgoRegisterView from 'src/views/ngo/NgoRegisterView';
import VolunteerLoginView from 'src/views/volunteer/VolunteerLoginView';
import VolunteerRegisterView from 'src/views/volunteer/VolunteerRegisterView';
import SettingsView from 'src/views/settings/SettingsView';
import VolunteerRequestForm from 'src/views/ngo/VolunteerRequestForm';
import NgoHome from 'src/views/ngo';
import VolunteerHome from 'src/views/volunteer';
import Home from 'src/views/landing/Home';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'volunteers', element: <VolunteerListView /> },
      { path: 'dashboard', element: <DashboardView /> },
      { path: 'events', element: <ProductListView /> },
      { path: 'ngos', element: <NgoListView /> },
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
    element: <NgoLayout />,
    children: [
      { path: 'login', element: <NgoLoginView /> },
      { path: 'register', element: <NgoRegisterView /> },
      { path: '/', element: <NgoHome/> },
      { path: 'request', element: <VolunteerRequestForm /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: 'volunteer',
    element: <VolunteerLayout />,
    children: [
      { path: 'login', element: <VolunteerLoginView /> },
      { path: 'register', element: <VolunteerRegisterView /> },
      { path: '/', element: <VolunteerHome/> },
      { path: 'events', element: <VolunteerRequestForm /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
