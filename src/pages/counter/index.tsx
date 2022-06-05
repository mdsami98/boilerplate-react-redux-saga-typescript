import { Button } from 'flowbite-react';
import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { decrementCount, incrementCount, resetCount } from '../../statemanagement/counter/counterAction';
import { IAppState } from '../../statemanagement/type';



function Counter() {
  const dispatch = useDispatch();
  const { counter, loading } = useSelector((state: IAppState) => state.counterType);

  return (
    <div className="inline-block	">
        <p> Counter: {counter} </p>
        <div className="flex gap-3 mt-5">
        <Button  onClick={() => dispatch(incrementCount())}>
                Increment +1
        </Button>
        <Button color="light"  onClick={() => dispatch(decrementCount())}>
        decrementCount -1
        </Button>
        <Button color="purple"  onClick={() => dispatch(resetCount())}>
        reset
        </Button>
        </div>
        
    </div>
  );
}

export default Counter;
