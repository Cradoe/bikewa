import { retrieveDataFromLocalStorage } from "../helpers";
export const userInitialState = {
    isLoggedIn: false,
    id: 7,
    ...retrieveDataFromLocalStorage( "user" )
};