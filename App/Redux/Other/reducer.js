import {createActions, createReducer} from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  setSubmitReportData: ['payload'],
  submitReport: ['payload'],
  myEntry: ['payload'],
  myEntryData: ['payload'],
  aboutUs: ['payload'],
  aboutUsData: ['payload'],
  myEntrySelectedData: ['payload'],
  updateStatus: ['payload'],
  contactUs: ['payload'],
  contactUsData: ['payload'],
});

export const OtherTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

const INITIAL_STATE = Immutable({
  setSubmitReportData: {},
  myEntryData: [],
  aboutUsData: null,
  myEntrySelectedData: {},
  contactUsData: null,
  // appShareData:null,
});
// /* ------------- Reducers ------------- */

const setSubmitReportData = (state, {payload}) =>
  state.set('submitReportData', payload);
const myEntryData = (state, {payload}) => state.set('myEntryData', payload);
const aboutUsData = (state, {payload}) => state.set('aboutUsData', payload);
const myEntrySelectedData = (state, {payload}) =>
  state.set('myEntrySelectedData', payload);
const contactUsData = (state, {payload}) => state.set('contactUsData', payload);

// const setAppShareData = (state, { payload }) => state.set("appShareData", payload);

// /* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_SUBMIT_REPORT_DATA]: setSubmitReportData,
  [Types.MY_ENTRY_DATA]: myEntryData,
  [Types.ABOUT_US_DATA]: aboutUsData,
  [Types.MY_ENTRY_SELECTED_DATA]: myEntrySelectedData,
  [Types.CONTACT_US_DATA]: contactUsData,

  // [Types.SET_APP_SHARE_DATA]: setAppShareData,
});

export const other = state => state.other;
