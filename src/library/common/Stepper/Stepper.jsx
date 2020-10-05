import React from 'react';
import './Stepper.scss';

function Stepper(props) {
  return (
    <div>
      <div>
        <span class="material-icons">keyboard_arrow_left</span>
        <span>Back</span>
      </div>
      <div>
          <span>Already have an account?</span>
          <span>Sign In</span>
      </div>
    </div>
  );
}

export default Stepper;
