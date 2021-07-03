import { Alert } from "react-native";
import { globalConstants, bikesAPI } from "../../constants";
import {
    catchApiRequestError
} from "../../helpers";



export const fetchBikeDetails = ( bikeId, callback = {} ) => {
    try {
        return fetch( bikesAPI.BIKE_DETAILS_ENDPOINT( bikeId ), {
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