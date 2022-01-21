import {createStore, combineReducers} from "redux";
import UserReducer from "./reducers/UserReducer";
import {IUserState} from "../typings";

// 自定义一个ReduxState接口,用于useSelector判断类型
export interface ReduxState {
    UserReducer: IUserState
}

const reducers = combineReducers({
    UserReducer
});

const index = createStore(reducers);
export default index;