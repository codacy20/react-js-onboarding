import React from 'react';
import ImageContainer from '../../library/common/Image-Container/ImageContainer';
import Stepper from '../../library/common/Stepper/Stepper';
import './register.scss';
import '../../library/common/common.scss';

function Register(props) {
  function navigate() {
    window.location.href = '/complete';
  }

  return (
    <div className="container register-container">
      <div className="left">
        <ImageContainer />
      </div>
      <div className="right">
        <Stepper
          sign={false}
          back={{ visible: true, url: props.url }}
          step={{ visible: true, title: 'Personal Info.', number: 1, max: 2 }}
        />
        <div className="register-inner-container">
          <h2>Register Individual Account!</h2>
          <p>
            For the purpose of industry regulation, your details are required.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
