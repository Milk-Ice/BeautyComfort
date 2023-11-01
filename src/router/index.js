import { Navigate } from 'react-router-dom'
import React from 'react'
import Demo from '@/views/demo'
const Home = React.lazy(() => import('@/views/home'))
const Entire = React.lazy(() => import('@/views/entire'))
const Details = React.lazy(() => import('@/views/details'))

const routes = [
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/entire',
    element: <Entire />
  },
  {
    path: '/detail',
    element: <Details />
  },
  {
    path: '/demo',
    element: <Demo />
  }
]
export default routes
