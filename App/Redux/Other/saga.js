import { call, put, takeLatest, select } from "redux-saga/effects";
import { Share } from "react-native";
import Actions, { OtherTypes, other } from "./reducer";
import AppActions, { app } from "../Root/reducer";
import { navigate, popToTop, goBack } from "../../Utils/rNavigation";
import CynobacApis from '../../Services/CynobacApis';
import UserAction, { currentUser } from "../User/reducer";


function* submitReport(res) {
  try {
    yield put(AppActions.loading(true));
    const data = yield call(CynobacApis.submitReport, res.payload);
    if (data) {
      yield put(AppActions.loading(false));
      yield call(navigate, 'MyEntry');
    }
  } catch (e) {
    yield put(AppActions.error(e));
  }
}
function* myEntry(res) {
  try {
    yield put(AppActions.loading(true));
    const data = yield call(CynobacApis.myEntry, res.payload);
    if (data) {
      yield put(AppActions.loading(false));
      yield put(Actions.myEntryData(data.data));
      // console.log("data", data);
    }
  } catch (e) {
    yield put(AppActions.error(e));
  }
}
function* aboutUs(res) {
  try {
    yield put(AppActions.loading(true));
    const data = yield call(CynobacApis.aboutUs, res.payload);
    console.log("data", data);
    if (data) {
      yield put(AppActions.loading(false));
      yield put(Actions.aboutUsData(data.data));
      // console.log("data", data);
    }
  } catch (e) {
    yield put(AppActions.error(e));
  }
}

function* updateStatus(res) {
  try {
    yield put(AppActions.loading(true));
    const data = yield call(CynobacApis.updateStatus, res.payload);
    console.log("data", data);
    if (data) {
      yield put(AppActions.loading(false));
      yield myEntry({language: 'en'});
      yield call(navigate, 'MyEntry');
    }
  } catch (e) {
    yield put(AppActions.error(e));
  }
}

function* contactUs(res) {
  try {
    yield put(AppActions.loading(true));
    const data = yield call(CynobacApis.contactUs, res.payload);
    if (data) {
      yield put(AppActions.loading(false));
      console.log("dataC", data.data);
      yield put(Actions.contactUsData(data.data));
    }
  } catch (e) {
    yield put(AppActions.error(e));
  }
}


export default [
  takeLatest(OtherTypes.SUBMIT_REPORT, submitReport),
  takeLatest(OtherTypes.MY_ENTRY, myEntry),
  takeLatest(OtherTypes.ABOUT_US, aboutUs),
  takeLatest(OtherTypes.UPDATE_STATUS, updateStatus),
  takeLatest(OtherTypes.CONTACT_US, contactUs),
];
