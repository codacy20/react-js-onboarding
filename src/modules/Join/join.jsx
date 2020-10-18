import React from 'react';
import ImageContainer from '../../library/common/Image-Container/ImageContainer';
import Stepper from '../../library/common/Stepper/Stepper';
import './join.scss';
import '../../library/common/common.scss';

function Join(props) {
  
  return (
    <div className="container join-container">
      <div className="left">
        <ImageContainer />
      </div>
      <div className="right">
        <Stepper back={{ visible: false }} step={{ visible: false }} />
        <span>join</span>
      </div>
    </div>
  );
}

export default Join;
