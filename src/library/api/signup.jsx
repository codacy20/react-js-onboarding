export const request = (selector, values, setShowLoader) => {
  postData('https://5f59f40eb121580016cadfef.mockapi.io/api/signup', {
    phonenr: values.phone ? values.phone : null,
    country: values.country ? values.country : null,
    consent: selector.CONSENT ? selector.CONSENT : null,
    email: selector.EMAIL ? selector.EMAIL : null,
    name: selector.NAME ? selector.NAME : null,
    password: selector.PASSWORD ? selector.PASSWORD : null,
    type: selector.TYPE ? selector.TYPE : null,
  }).then((data) => {
    setShowLoader(false);
    // console.log(data); // JSON data parsed by `data.json()` call
  });
};

async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
