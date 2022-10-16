import {
  post,
  get,
  put,
  patch,
  postMultipart,
  downloadFile,
  setToken,
} from '../genericApi';
import apiConstants from '../apiConstants';
/* ------------- Global Functions  ------------- */
import {toastMessage} from '../alert/api';

const getErrorText = error => error || 'Error completing request';

const checkError = res => {
  console.log("resError", res);
  if (res.data.success === false ) {
    throw new Error(getErrorText(res.data.message));
  }
  if (res == undefined || res.status === 500) {
    throw new Error(getErrorText('Something went wrong?'));
  }
  if (res.status === 0) {
    throw new Error(getErrorText(res.msg));
  }
  if (res.data.msg && res.data.msg.error) {
    throw new Error(getErrorText(res.data.msg.error));
  }
  if (res.data.status === 0) {
    throw new Error(getErrorText(res.data.msg ? res.data.msg : res.msg));
  }
};
/* ------------- Non-Auth(Apis) Functions  ------------- */

export const login = async payload => {
  const res = await post(apiConstants.LOGIN, payload, false);
  checkError(res);
  return res.data;
};
export const registration = async payload => {
  const res = await post(apiConstants.REGISTRATION, payload, false);
  checkError(res);
  return res.data;
};
export const verifyEmail = async payload => {
  const res = await post(apiConstants.VERIFYEMAIL, payload, false);
  checkError(res);
  return res.data;
};
export const resendVerifyEmail = async payload => {
  const res = await post(apiConstants.RESENDVERIFYEMAIL, payload, false);
  checkError(res);
  return res.data;
};
export const aboutUs = async payload => {
  const res = await get(apiConstants.ABOUTUS, payload, false);
  checkError(res);
  return res.data;
};
export const submitReport = async payload => {
  const res = await postMultipart(apiConstants.SUBMIT_REPORT, payload, false);
  checkError(res);
  return res.data;
};
export const myEntry = async payload => {
  const res = await post(apiConstants.MY_ENTRY, payload, false);
  checkError(res);
  return res.data;
};
export const updateStatus = async payload => {
  const res = await post(apiConstants.UPDATE_STATUS, payload, false);
  checkError(res);
  return res.data;
};
export const contactUs = async payload => {
  const res = await get(apiConstants.CONTACT_US, payload, false);
  checkError(res);
  return res.data;
};
export const updateProfile = async payload => {
  const res = await post(apiConstants.UPDATE_PROFILE, payload, false);
  checkError(res);
  return res.data;
};
export const changePassword = async payload => {
  const res = await post(apiConstants.CHANGE_PASSWORD, payload, false);
  checkError(res);
  return res.data;
};
export const forgotPassword = async payload => {
  const res = await post(apiConstants.FORGOT_PASSWORD, payload, false);
  checkError(res);
  return res.data;
};
