import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
      let accessToken = sessionStorage.getItem('access token');
      return accessToken? <Outlet/> : <Navigate to={'/form/signin'}/>
}