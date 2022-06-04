import { Dispatch } from 'redux';

import * as types from './counterTypes';



export const fetchCounterData = (counter: number): types.IFetchCounter => ({
  type: types.FETCH_COUNTER,
  payload: counter,
});

export const loadingData = (loading: boolean): types.ILoadingData => ({
  type: types.LOADING_DATA,
  payload: loading,
});

// INCREMENT COUNTER BY 1
export const incrementCount = (): types.IIncrement => ({
  type: types.INCREMENT,
});

// DECREMENT COUNTER BY 1
export const decrementCount = (): types.IDecrement => ({
  type: types.DECREMENT,
});

// RESET COUNTER
export const resetCount = (): types.IReset => ({ type: types.RESET });
