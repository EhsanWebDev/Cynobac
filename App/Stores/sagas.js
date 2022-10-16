import {all} from 'redux-saga/effects';
import app from '../Redux/Root/saga';
import user from '../Redux/User/saga';
import other from '../Redux/Other/saga';

export default function* sagas() {
  yield all([...app, ...user, ...other]);
}
