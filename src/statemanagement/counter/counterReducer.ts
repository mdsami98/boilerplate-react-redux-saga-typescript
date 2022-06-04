import { Reducer } from 'redux';
import {
  FETCH_COUNTER,
  LOADING_DATA,
  INCREMENT,
  DECREMENT,
  RESET,
  DispatchPayload,
  ICounterType,
} from './counterTypes';

const initialState: ICounterType = {
  counter: 0,
  loading: false,
};

const mainPageReducer: Reducer<ICounterType, DispatchPayload> = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTER: {
      return {
        ...state,
        counter: action.payload,
      };
    }
    case LOADING_DATA: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case RESET:
      return initialState;
    default:
      return state;
  }
};

export default mainPageReducer;
