import {IUserAction, IUserState, UserActionType} from "../../../typings";

const initialState: IUserState = {
    userinfo: {nickname: "", username: ""}
}
const UserReducer = (state: IUserState = initialState, action: IUserAction) => {
    const {type, payload} = action;
    switch (type) {
        case UserActionType.ADD_USER:
            return {
                ...state,
                userinfo: {...payload}
            }
        default:
            return state;
    }
}
export default UserReducer;