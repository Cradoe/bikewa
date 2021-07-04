import { retrieveDataFromLocalStorage } from "../helpers";
export const userInitialState = {
    isLoggedIn: false,
    id: 0,
    ...retrieveDataFromLocalStorage( "user" )
};