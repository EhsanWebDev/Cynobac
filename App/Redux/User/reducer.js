import {createActions, createReducer} from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  login: ['payload'],
  setUser: ['payload'],
  registration: ['payload'],
  updateProfile: ['payload'],
  verifyEmail: ['payload'],
  resendVerifyEmail: ['payload'],
  setLanguage: ['payload'],
  resetUser: ['payload'],
  changePassword: ['payload'],
  forgotPassword: ['payload'],
});

export const UserTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

const INITIAL_STATE = Immutable({
  auth: false,
  auth_token: null,
  dateValidate: false,
  language: 'en',
});

// /* ------------- Reducers ------------- */

const set = (state, {payload}) => state.merge(payload);
const resetUser = () => INITIAL_STATE;
const setLanguage = (state, {payload}) => state.set('language', payload);

// /* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_USER]: set,
  [Types.RESET_USER]: resetUser,
  [Types.SET_LANGUAGE]: setLanguage,
});

export const currentUser = state => state.user;
