import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Join from '../../modules/Join/join';

export function JoinRoute(props) {
  let location = useLocation();
  return <Join url={location.pathname} />;
}
