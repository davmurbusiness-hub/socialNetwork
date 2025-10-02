import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {publicRoutes, privateRoutes} from "../router/routes.js";
import {AuthContext} from "../context/index.js";
import Loader from "./UI/Loader/Loader.jsx";

const AppRouter = () => {
  const {isAuthenticated, setIsAuthenticated, isLoading} = useContext(AuthContext);

  if(isLoading){
    return <Loader/>
  }

  return (
    isAuthenticated
      ? <Routes>
        {privateRoutes.map(route =>
          <Route
            key={route.path}
            path={route.path}
            element={<route.component/>}
          />
        )}
        <Route path="/*" element={<Navigate to="/posts" replace/>}/>
      </Routes>
      :
      <Routes>{
        publicRoutes.map(route =>
          <Route
            key={route.path}
            path={route.path}
            element={<route.component/>}
          />
        )
      }
      <Route path="/*" element={<Navigate to="/login" replace/>}/>
      </Routes>


)
  ;
};

export default AppRouter;