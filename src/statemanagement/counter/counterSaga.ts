import {all, call, put, takeLatest} from 'redux-saga/effects';
import * as type from "./counterTypes"


function* incrementSaga(){
    console.log('saga called')
}

function* postSaga(){
    yield all([takeLatest(type.INCREMENT, incrementSaga)])
}

export default postSaga;
