import React from 'react';
import ImageContainer from '../../library/common/Image-Container/ImageContainer';
import Stepper from '../../library/common/Stepper/Stepper';
import './complete.scss';
import '../../library/common/common.scss';

function Complete(props) {
  return (
    <div className="container complete-container">
      <div className="left">
        <ImageContainer />
      </div>
      <div className="right">
        <Stepper />
        <span>Complete</span>
      </div>
    </div>
  );
}

export default Complete;
