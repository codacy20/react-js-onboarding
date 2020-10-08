import React from 'react';
import { useLocation } from 'react-router-dom';
import Register from '../../modules/Register/register';

function RegisterRoute(props) {
  let location = useLocation();
  return <Register url={location.pathname} />;
}

export default RegisterRoute;
