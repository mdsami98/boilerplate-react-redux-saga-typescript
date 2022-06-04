import { combineReducers } from "redux";

import counterReducer from './counter/counterReducer'
import { IAppState } from "./type";

const rootReducer = combineReducers<IAppState>({
    counterType: counterReducer
})

export type RootReducer = ReturnType<typeof rootReducer>;
export default rootReducer;

