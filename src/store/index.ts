import {createStore, combineReducers, Store, AnyAction} from "redux";
import UserReducer from "./reducers/UserReducer";
import {IUserState} from "../typings";
import {persistStore, persistReducer} from 'redux-persist'
import storage from "redux-persist/lib/storage";

// 自定义一个ReduxState接口,用于useSelector判断类型
export interface ReduxState {
    UserReducer: IUserState
}

const reducers = combineReducers({
    UserReducer
});
const persistConfig = {
    key: "root",
    storage
}

const persistedReducer = persistReducer(persistConfig, reducers);


const store = createStore(persistedReducer);
// @ts-ignore
const persistor = persistStore(store);
export {store, persistor};
