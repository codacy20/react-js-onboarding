import React from 'react';
import './Stepper.scss';

function Stepper(props) {
  return (
    <div className="stepper-container">
      <div className="back-container">
        <span class="material-icons">keyboard_arrow_left</span>
        <span>Back</span>
      </div>
      <div className="sign-container">
        <span>Already have an account?</span>
        {/* eslint-disable-next-line */}
        <a href="#" target="_blank" rel="noopener noreferrer">
          Sign In
        </a>
      </div>
      <div className="step-container">
        <span>step 0/0</span>
        <span>page title</span>
      </div>
    </div>
  );
}

export default Stepper;
