import React from 'react';
import Complete from '../../modules/Complete/complete';
import { useLocation } from 'react-router-dom';

export function CompleteRoute(props) {
  let location = useLocation();
  return <Complete url={location.pathname} />;
}
