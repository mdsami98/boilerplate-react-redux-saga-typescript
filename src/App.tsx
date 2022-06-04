import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import './App.css';
import { decrementCount, incrementCount, resetCount } from './statemanagement/counter/counterAction';
import { IAppState } from './statemanagement/type';
import Routes from './routes'
function App() {
  return (<Routes />

);
}

export default App;
