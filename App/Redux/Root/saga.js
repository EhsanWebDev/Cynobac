import {call, put, takeLatest, select} from 'redux-saga/effects';
import Actions, {AppTypes} from './reducer';
import AlertApi from '../../Services/alert';
import {navigate} from '../../Utils/rNavigation';
import UserAction, {currentUser} from '../User/reducer';
import {setToken, encryptDecryptToken} from '../../Services/genericApi';
import {Toast} from 'native-base';

function* error({payload}) {
  yield put(Actions.loading(false));
  if (typeof payload === 'string') {
    yield put(Actions.showAlert(payload));
  } else {
    yield put(Actions.showAlert(payload.message));
  }
}

function* startup() {
  // const user = yield select(currentUser);
  const {auth, auth_token, role} = yield select(currentUser);

  if (auth && auth_token) {
    setToken(auth_token);
    console.log('role', role);

    if (auth_token) {
      yield call(navigate, 'Home');
    }
  } else {
    yield call(navigate, 'LoginRegistration');
  }
  // setToken(user.auth_token);
  // yield call(navigate, 'Home');

  // yield call(navigate, "Home");

  // yield call(navigate, "LoginRegistration");
  // yield call(navigate, "QuestionAndAnswer");''

  // const { auth, auth_token, profile, tc_accepted, dateValidate } = yield select(
  //   currentUser
  // );
  // if (auth && tc_accepted == 1 && dateValidate) {
  //   if (auth_token) {
  //     yield call(setToken, auth_token);
  //     yield call(encryptDecryptToken, profile.patient.secret_key);
  //     yield call(navigate, "MainTab");
  //     // yield checkPermission;
  //     // let fcmToken = yield getToken();
  //     // console.log("fcmToken",fcmToken);
  //   }
  // } else {
  //   yield call(navigate, "Login");
  // }
  //
}

function* alert({payload}) {
  yield call(AlertApi.alert, payload);
}
function* showToast(payload) {
  return Toast.show({
    text: payload.payload.message,
    textStyle: {paddingHorizontal: 10},
    style: {borderRadius: 30},
    // position:'top',
    duration: 3000,
  });
}

export default [
  takeLatest(AppTypes.STARTUP, startup),
  takeLatest(AppTypes.ERROR, error),
  takeLatest(AppTypes.SHOW_ALERT, alert),
  takeLatest(AppTypes.SHOW_TOAST, showToast),
  // takeLatest(AppTypes.BRANCH_DEEP_LINKING, branchDeepLinking),
];
