import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ImageContainer from '../../library/common/Image-Container/ImageContainer';
import Stepper from '../../library/common/Stepper/Stepper';
import './register.scss';
import '../../library/common/common.scss';

function Register(props) {
  const formik = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      password: '',
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
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
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
          <h2>Register Individual Account!</h2>
          <p>
            For the purpose of industry regulation, your details are required.
          </p>
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="fullname">fullname</label>
            <input
              id="fullname"
              name="fullname"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fullname}
            />
            {formik.touched.fullname && formik.errors.fullname ? (
              <div>{formik.errors.fullname}</div>
            ) : null}
            <label htmlFor="password">password</label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
