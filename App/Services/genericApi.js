import axios from 'axios';
import apiConstants from './apiConstants';

const base_url = apiConstants.BASE_URL;
const api = axios.create({
  baseURL: base_url,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export const setToken = token => {
  // api.defaults.headers.common['Token'] = `${token}`;
  api.defaults.headers = {Authorization: `Bearer ${token}`};
};

export const post = (endPoint, data) => {
  var postData = data;

  return new Promise((resolve, reject) => {
    api
      .post(endPoint, postData, {timeout: 300000})
      .then(res => {
        console.log('API POST Response ------------------>   ', res);
        return resolve(res);
      })
      .catch(error => {
        console.log('error', {...error}, 'Server error');
        console.log('errorRES', error);
        return resolve(error.response);
      });
  });
};

export const get = (endPoint, data) => {
  console.log('postData', data);

  return new Promise((resolve, reject) => {
    api
      .get(endPoint, {params: data})
      .then(res => {
        console.log(
          'API GET Response ------------------>   ' + JSON.stringify(res.data),
        );
        return resolve(res);
      })
      .catch(error => {
        console.log({...error}, 'Server error');
        return resolve(error.response);
      });
  });
};

export const put = (endPoint, data) => {
  return new Promise((resolve, reject) => {
    api
      .put(endPoint, data)
      .then(res => {
        console.log(
          'API PUT Response ------------------>   ' + JSON.stringify(res.data),
        );
        return resolve(res);
      })
      .catch(error => {
        console.log({...error}, 'Server error');
        return resolve(error.response);
      });
  });
};

export const patch = (endPoint, data) => {
  console.log('endpoint', endPoint);
  console.log('data', data);
  return new Promise((resolve, reject) => {
    api
      .patch(endPoint, data)
      .then(res => {
        console.log(
          'API PATCH Response ------------------>   ' +
            JSON.stringify(res.data),
        );
        return resolve(res);
      })
      .catch(error => {
        console.log('error', {...error}, 'Server error');
        console.log('errorRES', error);
        return resolve(error.response);
      });
  });
};

export const postMultipart = (endPoint, data) => {
  return new Promise((resolve, reject) => {
    fetch(`${base_url}${endPoint}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
        Authorization: api.defaults.headers.Authorization,
      },
      body: data,
    })
      .then(response => response.json())
      .then(res => {
        console.log(res, 'Server error');
        console.log({token: api.defaults.headers.Authorization});
        console.log(
          'API POST Multipart Response ------------------>   ' +
            JSON.stringify(res),
        );
        return resolve(res);
      })
      .catch(error => {
        console.log(error, 'Server error');
        return resolve(error.response);
      });
  });
  // axios({
  //   url: `${base_url}${endPoint}`,
  //   method: 'POST',
  //   data: data,
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'multipart/form-data',
  //     // Authorization: api.defaults.headers.common['Authorization'],
  //     Authorization: api.defaults.headers.Authorization,
  //   },
  // })
  //   .then(res => {
  //     console.log(
  //       'API POST Multipart Response ------------------>   ' +
  //         JSON.stringify(res.data),
  //     );
  //     return resolve(res);
  //   })
  //   .catch(error => {
  //     console.log({...error}, 'Server error');
  //     return resolve(error.response);
  //   });
};

export const downloadFile = url => {
  return new Promise((resolve, reject) => {
    axios({
      url: url,
      method: 'GET',
      responseType: 'base64', //important
    }).then(({data}) => {
      const downloadUrl = window.URL.createObjectURL(new Blob([data]));
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.setAttribute('download', 'file.zip'); //any other extension
      document.body.appendChild(link);
      link.click();
      link.remove();
    });
  });
};
