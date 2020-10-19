import React from 'react';
import ImageContainer from '../../library/common/Image-Container/ImageContainer';
import Stepper from '../../library/common/Stepper/Stepper';
import './join.scss';
import '../../library/common/common.scss';

function Join(props) {
  function navigate() {
    window.location.href = '/register';
  }

  return (
    <div className="container join-container">
      <div className="left">
        <ImageContainer />
      </div>
      <div className="right">
        <Stepper back={{ visible: false }} step={{ visible: false }} />
        <div className="join-inner-container">
          <h2>Join Us!</h2>
          <p>
            To begin this journey, tell us what type of account you’d be
            opening.
          </p>
          <button onClick={() => navigate()}>
            <div className="pentagon">
              <span className="material-icons">person_outline</span>{' '}
            </div>
            <div className="txt">
              <h3>Individual</h3>
              <p>Personal account to manage all you activities.</p>
            </div>
            <span className="material-icons">arrow_forward</span>
          </button>
          <button onClick={() => navigate()}>
            <div className="pentagon">
              <span className="material-icons">work_outline</span>
            </div>
            <div className="txt">
              <h3>Business</h3>
              <p>Own or belong to a company, this is for you.</p>
            </div>
            <span className="material-icons">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Join;
