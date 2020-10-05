import React from 'react';
import ImageContainer from '../../library/common/Image-Container/ImageContainer';
import Stepper from '../../library/common/Stepper/Stepper';
import './register.scss';
import '../../library/common/common.scss';

function Register(props) {
  return (
    <div className="container register-container">
      <div className="left">
        <ImageContainer />
      </div>
      <div className="right">
        <Stepper />
        <span>register</span>
      </div>
    </div>
  );
}

export default Register;
