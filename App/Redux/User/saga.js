import {call, put, takeLatest, select} from 'redux-saga/effects';
import {Platform} from 'react-native';
import Actions, {UserTypes, currentUser} from './reducer';
import AppActions, {app} from '../Root/reducer';
import {setToken} from '../../Services/genericApi';
import {navigate, popToTop, goBack} from '../../Utils/rNavigation';
import CynobacApis from '../../Services/CynobacApis';
import AlertApi from '../../Services/alert';

function* login(res) {
  try {
    yield put(AppActions.loading(true));
    const data = yield call(CynobacApis.login, res.payload);
    console.log('datas', data);
    if (data.success) {
      yield put(AppActions.loading(false));
      setToken(data.access_token);
      yield put(
        Actions.setUser({
          auth: true,
          auth_token: data.access_token,
          ...data.data,
        }),
      );
      if (data.data.role === 'Public Testers') {
        yield call(navigate, 'Home');
      } else {
        yield call(navigate, 'MyEntry');
      }
    }
  } catch (e) {
    console.log('errorinCatch', e);
    yield put(AppActions.error(e));
  }
}
function* registration(res) {
  try {
    yield put(AppActions.loading(true));
    const data = yield call(CynobacApis.registration, res.payload);
    console.log('datas', data);
    if (data.success) {
      yield put(AppActions.loading(false));
      yield put(
        Actions.setUser({
          ...data.data,
          password: res.payload.password,
        }),
      );
      yield call(navigate, 'EmailVerification');
    }
  } catch (e) {
    console.log('errorinCatch', e);
    yield put(AppActions.error(e));
  }
}
function* verifyEmail(res) {
  try {
    const currentUserData = yield select(currentUser);
    res.payload = {
      ...res.payload,
      email: currentUserData.email,
      password: currentUserData.password,
    };
    yield put(AppActions.loading(true));
    const data = yield call(CynobacApis.verifyEmail, res.payload);
    console.log('datas', data);
    if (data.success) {
      yield put(AppActions.loading(false));
      setToken(data.access_token);
      yield put(
        Actions.setUser({
          auth: true,
          auth_token: data.access_token,
          ...data.data,
        }),
      );
      if (data.data.role === 'Public Testers') {
        yield call(navigate, 'Home');
      } else {
        yield call(navigate, 'MyEntry');
      }
    }
  } catch (e) {
    console.log('errorinCatch', e);
    yield put(AppActions.error(e));
  }
}
function* resendVerifyEmail(res) {
  try {
    const currentUserData = yield select(currentUser);
    res.payload = {
      ...res.payload,
      email: currentUserData.email,
    };
    yield put(AppActions.loading(true));
    const data = yield call(CynobacApis.resendVerifyEmail, res.payload);
    console.log('datas', data);
    if (data.success) {
      yield put(AppActions.loading(false));
      yield call(AlertApi.alert, data.message);
      yield put(
        Actions.setUser({
          ...data.data,
        }),
      );
    }
  } catch (e) {
    console.log('errorinCatch', e);
    yield put(AppActions.error(e));
  }
}
function* updateProfile(res) {
  try {
    yield put(AppActions.loading(true));
    const data = yield call(CynobacApis.updateProfile, res.payload);
    console.log('datas', data);
    if (data.success) {
      yield put(AppActions.loading(false));
      yield put(
        Actions.setUser({
          ...data.data,
        }),
      );
    }
  } catch (e) {
    console.log('errorinCatch', e);
    yield put(AppActions.error(e));
  }
}
function* changePassword(res) {
  try {
    yield put(AppActions.loading(true));
    const data = yield call(CynobacApis.changePassword, res.payload);
    if (data) {
      yield put(AppActions.loading(false));
      yield put(Actions.resetUser());
      yield call(navigate, 'LoginRegistration');
    }
  } catch (e) {
    yield put(AppActions.error(e));
  }
}
function* forgotPassword(res) {
  try {
    yield put(AppActions.loading(true));
    const data = yield call(CynobacApis.forgotPassword, res.payload);
    if (data) {
      yield put(AppActions.loading(false));
      yield call(navigate, 'Login');
    }
  } catch (e) {
    yield put(AppActions.error(e));
  }
}


export default [
  takeLatest(UserTypes.LOGIN, login),
  takeLatest(UserTypes.REGISTRATION, registration),
  takeLatest(UserTypes.VERIFY_EMAIL, verifyEmail),
  takeLatest(UserTypes.RESEND_VERIFY_EMAIL, resendVerifyEmail),
  takeLatest(UserTypes.UPDATE_PROFILE, updateProfile),
  takeLatest(UserTypes.CHANGE_PASSWORD, changePassword),
  takeLatest(UserTypes.FORGOT_PASSWORD, forgotPassword),
];
