import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeVisited } from '../../../main/store/actions';
import './Stepper.scss';

function Stepper(props) {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.history);

  function navigate() {
    dispatch(removeVisited(selector[selector.length - 1]));
    window.location.href = selector[selector.length - 2];
  }

  let back = 'back-container';
  let sign = 'sign-container';
  let step = 'step-container';
  if (props.back.visible === false) back += ' hide';
  if (props.step.visible === false) step += ' display-none';
  if (props.sign === false) sign += ' display-none';
  return (
    <div className="stepper-container">
      <div className={back} onClick={() => navigate()}>
        <span className="material-icons">keyboard_arrow_left</span>
        <span>Back</span>
      </div>
      <div className={sign}>
        <span>Already have an account?</span>
        <span>&nbsp;</span>
        {/* eslint-disable-next-line */}
        <a href="#" target="_blank" rel="noopener noreferrer">
          Sign In
        </a>
      </div>
      <div className={step}>
        <span>
          step {props.step.number}/{props.step.max}
        </span>
        <span>{props.step.title}</span>
      </div>
    </div>
  );
}

export default Stepper;
