import { userConstants } from "../constants";
import { userInitialState } from "./initialState";
export const userReducer = ( state = userInitialState, action ) => {
    switch ( action.type ) {
        case userConstants.SET_LOGIN_STATE:
            return {
                ...state,
                isLoggedIn: true,
                ...action.payload
            };
        case userConstants.UPDATE_WALLET_STATE:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};