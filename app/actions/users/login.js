import { userAPI, globalConstants, userConstants } from "../../constants";
import {
    catchApiRequestError,
    convertObjToFormData,
    handleApiResponseError,
    saveDataToLocalStorage
} from "../../helpers/";

const setLoginState = ( payload = {} ) => {
    return {
        type: userConstants.SET_LOGIN_STATE,
        payload
    };
};

export const login = ( details, callback = {} ) => {
    const { matricNo: matric_number, password } = details;
    return ( dispatch ) => {
        try {
            fetch( userAPI.LOGIN_ENDPOINT, {
                ...globalConstants.POST_HEADER,
                body: convertObjToFormData( {
                    matric_number,
                    password
                } )
            } )
                .then( ( response ) => response.json() )
                .then( ( json ) => {
                    const { status, data, status_code } = json;
                    if (
                        ( status_code === 200 || status_code === 201 ) &&
                        status === "success"
                    ) {
                        data.isLoggedIn = true;
                        dispatch( setLoginState( data ) );
                        saveDataToLocalStorage( {
                            title: "user",
                            data
                        } );

                        if ( callback.success ) {
                            callback.success();
                        }

                    } else {
                        if ( callback.error ) {
                            callback.error( handleApiResponseError( json ) );
                        }
                    }
                } )
                .catch( ( error ) => {
                    if ( callback.error ) {
                        callback.error( catchApiRequestError( error ) );
                    }
                } );
        } catch ( error ) {
            alert( "Opps, Please check your internet connection." );
        }
    };
};