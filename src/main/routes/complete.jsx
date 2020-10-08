import React from 'react';
import Complete from '../../modules/Complete/complete';
import { useLocation } from 'react-router-dom';

function CompleteRoute(props) {
  let location = useLocation();
  return <Complete url={location.pathname} />;
}

export default CompleteRoute;
