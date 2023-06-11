import { useContext } from 'react';
import { Navigate, Route, useNavigate } from 'react-router-dom';
import { Component } from 'react';
import { AuthenticationContext } from './context/AuthenticationContext';

export { Route } from 'react-router';
 

export function PrivateRoute({
  component,
  roles,
  ...rest
}) {
  const { authenticatedUser } = useContext(AuthenticationContext);
  const navigate = useNavigate();
  if(!authenticatedUser) { 
    navigate('/login');
    return <></>
  }

  if(roles && !roles.includes(authenticatedUser.role)) {
    navigate('/');
    return <></>
  }
  
  return (
    <Route
      {...rest}
      Component={(props) => {
        return <Component {...props} />;
      }}
    />
  );
}

export function AuthRoute({ component: Component, ...rest }) {
  const { authenticatedUser } = useContext(AuthenticationContext);

  return (
    <Route
      {...rest}
      component={(props) => {
        return authenticatedUser ? (
          <Navigate to="/" />
        ) : (
          <component />
        );
      }}
    />
  );
}