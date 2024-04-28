import React from 'react';
import ReactDOM from 'react-dom/client';

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Home } from './pages/Home/Home';
import { UsersPage } from './pages/UsersPage/UsersPage';
import { UserPage } from './pages/UserPage/UserPage';
import { PhotosPage } from './pages/PhotosPage/PhotosPage';
import { PhotoPage } from './pages/PhotoPage/PhotoPage';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootswatch/dist/sketchy/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { CommentsPage } from './pages/CommentsPage/CommentsPage';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>

      <Route index element={<Home />}></Route>

      <Route path='/users' element={<UsersPage />}></Route>
      <Route path='/users/:userId' element={<UserPage />}></Route>

      <Route path='/photos' element={<PhotosPage />}></Route>
      <Route path='/photos/:photoId' element={<PhotoPage />} loader={photoLoader} errorElement={<NotFoundPage/>}></Route>

      <Route path='/comments' element={<CommentsPage />}></Route>

      <Route path='*' element={<NotFoundPage />}></Route>
    </Route>
  )
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

function photoLoader({ params }) {
  const { photoId } = params;

  return fetch(`https://jsonplaceholder.typicode.com/photos?id=${photoId}`)
    .then(response => response.json())
    .then(data => {
      return data[0];
    });
}