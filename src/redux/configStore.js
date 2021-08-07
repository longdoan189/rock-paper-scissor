import {combineReducers, createStore} from 'redux';
import BaiTapOanTuXiReducer from './reducer/BaiTapOanTuXiReducer';
const rootReducer  = combineReducers({
        BaiTapOanTuXiReducer: BaiTapOanTuXiReducer
    }
)
export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

);