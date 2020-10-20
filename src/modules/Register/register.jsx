import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
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
          <Formik
            initialValues={{ email: '', password: '' }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = 'Required';
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Invalid email address';
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <Field
                  name="fullname"
                  autoComplete="off"
                  data-lpignore="true"
                />
                <Field
                  type="email"
                  name="email"
                  autoComplete="off"
                  data-lpignore="true"
                />
                <ErrorMessage name="email" component="div" />
                <Field type="password" name="password" data-lpignore="true" />
                <ErrorMessage name="password" component="div" />
                <label>
                  <Field type="checkbox" name="toggle" />
                </label>
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Register;
