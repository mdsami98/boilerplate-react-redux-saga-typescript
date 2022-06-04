import { all,fork } from "redux-saga/effects";

import counterSaga from "./counter/counterSaga";

export function* rootSaga(){
    yield all([
        fork(counterSaga),
    ])
}