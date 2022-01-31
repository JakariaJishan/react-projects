import { Navigate } from "react-router-dom";

export const PrivateRoute = ({children}) => {
      let accessToken = sessionStorage.getItem('access token');
      return accessToken? children : <Navigate to={'/form/signin'}/>
}