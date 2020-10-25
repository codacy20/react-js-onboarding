import React from 'react';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ImageContainer from '../../library/common/Image-Container/ImageContainer';
import Stepper from '../../library/common/Stepper/Stepper';
import './register.scss';
import '../../library/common/common.scss';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { lastVisited } from '../../main/store/actions';

function Register(props) {
  const selector = useSelector((state) => state.accountType);
  const history = useHistory();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      password: '',
      agreement: false,
    },
    validationSchema: Yup.object({
      fullname: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      password: Yup.string()
        .required('No password provided.')
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(
          /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/,
          'Password should contain capital letter, small letter and number'
        ),
      email: Yup.string().email('Invalid email address').required('Required'),
      agreement: Yup.boolean().oneOf(
        [true],
        'Must Accept Terms and Conditions'
      ),
    }),
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      dispatch(lastVisited('/complete'));
      history.push('/complete');
    },
  });

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
          <h2>Register {selector} Account!</h2>
          <p>
            For the purpose of industry regulation, your details are required.
          </p>
          <form onSubmit={formik.handleSubmit}>
            <div className="row">
              <label htmlFor="fullname">Your fullname*</label>
              <input
                id="fullname"
                name="fullname"
                type="text"
                data-lpignore="true"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fullname}
              />
              {formik.touched.fullname && formik.errors.fullname ? (
                <div className="warnings">{formik.errors.fullname}</div>
              ) : null}
            </div>
            <div className="row">
              <label htmlFor="email">Email address*</label>
              <input
                id="email"
                name="email"
                type="email"
                data-lpignore="true"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="warnings">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="row">
              <label htmlFor="password">Create password*</label>
              <input
                id="password"
                name="password"
                type="password"
                data-lpignore="true"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="warnings">{formik.errors.password}</div>
              ) : null}
            </div>
            <div className="row small">
              <div id="inner-row-checkbox">
                <div id="lbl-inp">
                  <input
                    type="checkbox"
                    name="agreement"
                    id="agreement"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  <label htmlFor="email">I agree to terms & conditions</label>
                </div>
                {formik.touched.agreement && formik.errors.agreement ? (
                  <div className="warnings">{formik.errors.agreement}</div>
                ) : null}
              </div>
            </div>
            <div className="row">
              {!formik.errors.agreement &&
              !formik.errors.password &&
              !formik.errors.email &&
              !formik.errors.fullname ? (
                <button type="submit">Register Account</button>
              ) : (
                <button className="disabled" type="submit">
                  Register Account
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
