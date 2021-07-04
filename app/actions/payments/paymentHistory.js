import { Alert } from "react-native";
import { userAPI, globalConstants, paymentsAPI } from "../../constants";
import {
    catchApiRequestError,
    convertObjToFormData,
    handleApiResponseError
} from "../../helpers/";



export const paymentHistory = ( userId, callback = {} ) => {
    try {
        return fetch( paymentsAPI.PAYMENT_HISTORY_ENDPOINT( userId ), {
            ...globalConstants.GET_HEADER
        } )
            .then( ( response ) => response.json() )
            .then( ( json ) => {
                const { status, data, status_code } = json;
                if (
                    ( status_code === 200 || status_code === 201 ) &&
                    status === "success"
                ) {

                    if ( callback.success ) {
                        callback.success( data );
                    }

                } else {
                    if ( callback.empty ) {
                        callback.empty();
                    }
                }
            } )
            .catch( ( error ) => {
                if ( callback.error ) {
                    callback.error( catchApiRequestError( error ) );
                }
            } );
    } catch ( error ) {
        Alert.alert( "Opps, Please check your internet connection." );
        callback.error( catchApiRequestError( error ) );
    }

};