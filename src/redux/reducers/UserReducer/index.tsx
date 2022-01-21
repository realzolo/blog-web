import {IUserAction, IUserState, UserActionType} from "../../../typings";
import LocalStorageUtil from "../../../utils/local-storage";

const initialState: IUserState = {
    userinfo: LocalStorageUtil.getItem("USER_INFO")
}
const UserReducer = (state: IUserState = initialState, action: IUserAction) => {
    const {type, payload} = action;
    switch (type) {
        case UserActionType.ADD_USER:
            LocalStorageUtil.setItem("USER_INFO", payload);
            return {
                ...state,
                userinfo: {...payload}
            }
        default:
            return state;
    }
}
export default UserReducer;