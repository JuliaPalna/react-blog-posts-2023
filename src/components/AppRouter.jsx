import React, { useContext } from 'react'
import { Route, Routes } from "react-router-dom";
import {privateRoutes, publicRoutes} from '../router/routs'
import { AuthContext } from '../context';
import Loader from './UI/loader/Loader'

export default function AppRouter() {
  const {isAuth, isLoading} = useContext(AuthContext)
  console.log(isAuth)

  if(isLoading) {
    return <Loader />
  }

  return (
    isAuth
    ?
      <Routes>
        {privateRoutes.map(rout =>
          <Route
            path={rout.path}
            element={rout.component}
            key={rout.path}
            exact={rout.exact}
          />
        )}
      </Routes>
    :
      <Routes>
        {publicRoutes.map(rout =>
          <Route
            path={rout.path}
            element={rout.component}
            key={rout.path}
            exact={rout.exact}
          />
        )}
      </Routes>
  )
}
