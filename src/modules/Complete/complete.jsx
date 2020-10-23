import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ImageContainer from '../../library/common/Image-Container/ImageContainer';
import Stepper from '../../library/common/Stepper/Stepper';
import './complete.scss';
import '../../library/common/common.scss';

function Complete(props) {
  const [info, setInfo] = useState([]);

  const fetchInfo = async (setInfo) => {
    const info = await fetch('https://restcountries.eu/rest/v2/all')
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
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      window.location.href = 'https://mobile.twitter.com/RT_Amir';
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
              <label htmlFor="password">Phone number</label>
              <div id="row-inner-phone">
                <select>
                  {info.map((item) => (
                    <option value={item.callingCodes[0]}>
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
              <label htmlFor="country">Country of residence</label>
              <select>
                <option defaultValue value="null">
                  Please select
                </option>
                {info.map((item) => (
                  <option value={item.name}>{item.name}</option>
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
