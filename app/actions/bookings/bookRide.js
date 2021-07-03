import { Alert } from "react-native";
import { userAPI, globalConstants, bookingsAPI } from "../../constants";
import {
    catchApiRequestError,
    convertObjToFormData,
    handleApiResponseError
} from "../../helpers/";


export const bookRide = ( details, callback = {} ) => {
    try {
        const { userId: user_id, bikeId: bike_id } = details;
        return fetch( bookingsAPI.USER_BOOKINGS_ENDPOINT, {
            ...globalConstants.POST_HEADER,
            body: convertObjToFormData( {
                user_id,
                bike_id
            } )
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