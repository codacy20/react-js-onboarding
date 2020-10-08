import React from 'react';
import { useLocation } from 'react-router-dom';
import Join from '../../modules/Join/join';

function JoinRoute(props) {
  let location = useLocation();
  return <Join url={location.pathname} />;
}

export default JoinRoute;
