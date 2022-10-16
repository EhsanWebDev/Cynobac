import {createActions, createReducer} from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  error: ['payload'],
  loading: ['payload'],
  startup: null,
  showAlert: ['payload'],
  showToast: ['payload'],
  branchDeepLinking: ['payload'],
});

export const AppTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

const INITIAL_STATE = Immutable({
  error: '',
  loading: false,
});

/* ------------- Reducers ------------- */

const loading = (state, {payload}) => state.set('loading', payload);
const error = (state, {payload}) => state.set('error', payload);

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOADING]: loading,
  [Types.ERROR]: error,
});
