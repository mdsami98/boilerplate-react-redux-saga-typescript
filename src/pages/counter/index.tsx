import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { decrementCount, incrementCount, resetCount } from '../../statemanagement/counter/counterAction';
import { IAppState } from '../../statemanagement/type';



function Counter() {
  const dispatch = useDispatch();
  const { counter, loading } = useSelector((state: IAppState) => state.counterType);

  return (
    <div className="App">
        <p> Counter: {counter} </p>
        <button color="primary"  onClick={() => dispatch(incrementCount())}>
                Increment +1
        </button>
        <button color="primary"  onClick={() => dispatch(decrementCount())}>
        decrementCount -1
        </button>
        <button color="primary"  onClick={() => dispatch(resetCount())}>
        reset
        </button>
    </div>
  );
}

export default Counter;
