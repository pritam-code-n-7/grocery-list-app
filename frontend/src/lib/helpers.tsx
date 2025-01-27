import { Navigate, Outlet } from "react-router-dom"

const isAuthenticated = ()=> !!localStorage.getItem('token')

export const PrivateRoute = ()=>{
  return isAuthenticated() ? <Outlet /> : <Navigate to='/login'/>
}

export const PublicRoute = ()=>{
  return !isAuthenticated() ? <Outlet /> : <Navigate to='/' />
}