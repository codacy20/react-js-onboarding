import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ImageContainer from '../../library/common/Image-Container/ImageContainer';
import Stepper from '../../library/common/Stepper/Stepper';
import './complete.scss';
import '../../library/common/common.scss';

function Complete(props) {
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
      alert(JSON.stringify(values, null, 2));
      window.location.href = '/complete';
    },
  });
  return (
    <div className="container complete-container">
      <div className="left">
        <ImageContainer />
      </div>
      <div className="right">
        <Stepper
          sign={false}
          back={{ visible: true, url: props.url }}
          step={{ visible: true, title: 'Residency Info.', number: 2, max: 2 }}
        />
        <div className="complete-inner-container">
          <h2>Complete Your Profile!</h2>
          <p>
            For the purpose of industry regulation, your details are required.
          </p>
          <form onSubmit={formik.handleSubmit}>
            <div className="row">
              <label htmlFor="password">Phone number</label>
              <div id="row-inner-phone">
                <select>
                  <option value="grapefruit">Grapefruit</option>
                  <option value="lime">Lime</option>
                  <option selected value="coconut">
                    Coconut
                  </option>
                  <option value="mango">Mango</option>
                </select>
                <input
                  id="fullname"
                  name="fullname"
                  type="text"
                  data-lpignore="true"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.fullname}
                />
              </div>
              {formik.touched.fullname && formik.errors.fullname ? (
                <div className="warnings">{formik.errors.fullname}</div>
              ) : null}
            </div>
            <div className="row">
              <label htmlFor="password">Country of residence</label>
              <select>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option selected value="coconut">
                  Coconut
                </option>
                <option value="mango">Mango</option>
              </select>
              {formik.touched.password && formik.errors.password ? (
                <div className="warnings">{formik.errors.password}</div>
              ) : null}
            </div>
            <div className="row">
              {!formik.errors.agreement &&
              !formik.errors.password &&
              !formik.errors.email &&
              !formik.errors.fullname ? (
                <button type="submit">Save & Continue</button>
              ) : (
                <button className="disabled" type="submit">
                  Save & Continue
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Complete;
