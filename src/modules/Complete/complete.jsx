import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Breakpoint } from 'react-socks';

import ImageContainer from '../../library/common/Image-Container/ImageContainer';
import Stepper from '../../library/common/Stepper/Stepper';
import './complete.scss';
import '../../library/common/common.scss';
import { request } from '../../library/api/signup';
import { setAccountInfo, AccountInfo } from '../../main/store/actions';

function Complete(props) {
  const dispatch = useDispatch();
  const [info, setInfo] = useState([]);
  const [showLoader, setShowLoader] = useState(null);
  const selector = useSelector((state) => state.accountInfo);
  let btnClass = 'disabled';
  let btnTxtSent = 'Sending';

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
      // alert(JSON.stringify(values, null, 2));
      if (showLoader !== false) {
        setShowLoader(true);
        dispatch(setAccountInfo(AccountInfo.PHONENR, values.phone));
        dispatch(setAccountInfo(AccountInfo.COUNTRY, values.country));
        request(selector, values, setShowLoader);
        // window.location.href = 'https://mobile.twitter.com/RT_Amir';
      }
    },
  });

  if (!formik.errors.country && !formik.errors.phone) btnClass = null;
  if (showLoader === false) btnTxtSent = 'Sent';
  return (
    <div className="container complete-container">
      <Breakpoint className="left" medium up>
        <ImageContainer />
      </Breakpoint>
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
              {showLoader === null ? (
                <button className={btnClass} type="submit">
                  Save & Continue
                </button>
              ) : (
                <button className="sending disabled" type="submit">
                  {btnTxtSent}
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
