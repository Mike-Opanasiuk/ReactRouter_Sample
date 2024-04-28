import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootswatch/dist/sketchy/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Home } from './pages/Home/Home';
import { UsersPage } from './pages/UsersPage/UsersPage';
import { UserPage } from './pages/UserPage/UserPage';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />}></Route>
      <Route path='/users' element={<UsersPage />}></Route>
      <Route path='/users/:userId' element={<UserPage />}></Route>
    </Route>
  )
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);