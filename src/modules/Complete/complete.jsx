import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ImageContainer from '../../library/common/Image-Container/ImageContainer';
import Stepper from '../../library/common/Stepper/Stepper';
import './complete.scss';
import '../../library/common/common.scss';
import { request } from '../../library/api/signup';

function Complete(props) {
  const [info, setInfo] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const fetchInfo = async (setInfo) => {
    return await fetch('https://restcountries.eu/rest/v2/all')
      .then((results) => results.json())
      .then((data) => {
        setInfo(data);
      });
  };

  useEffect(() => {
    fetchInfo(setInfo);
  }, []);

  const formik = useFormik({
    initialValues: {
      phone: '',
      country: '',
    },
    validationSchema: Yup.object({
      phone: Yup.string().matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        'Phone number is not valid'
      ),
      country: Yup.string().required('Country is required!'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      request(setSubmitted);
      // window.location.href = 'https://mobile.twitter.com/RT_Amir';
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
          step={{
            visible: true,
            title: 'Residency Info.',
            number: 2,
            max: 2,
          }}
        />
        <div className="complete-inner-container">
          <h2>Complete Your Profile!</h2>
          <p>
            For the purpose of industry regulation, your details are required.
          </p>
          <form onSubmit={formik.handleSubmit}>
            <div className="row">
              <label htmlFor="password">Phone number (optional)</label>
              <div id="row-inner-phone">
                <select>
                  {info.map((item) => (
                    <option value={item.callingCodes[0]} key={item.alpha2Code}>
                      +{item.callingCodes[0]}
                    </option>
                  ))}
                </select>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  data-lpignore="true"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.fullname}
                />
              </div>
              {formik.touched.phone && formik.errors.phone ? (
                <div className="warnings">{formik.errors.phone}</div>
              ) : null}
            </div>
            <div className="row">
              <label htmlFor="country">Country of residence*</label>
              <select
                name="country"
                value={formik.values.country}
                onChange={formik.handleChange}
              >
                <option defaultValue value="null">
                  Please select
                </option>
                {info.map((item) => (
                  <option value={item.name} key={item.alpha2Code}>
                    {item.name}
                  </option>
                ))}
              </select>
              {formik.touched.country && formik.errors.country ? (
                <div className="warnings">{formik.errors.country}</div>
              ) : null}
            </div>
            <div className="row">
              {!formik.errors.country && !formik.errors.phone ? (
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
