import { Alert } from "react-native";
import { globalConstants, paymentsAPI, userConstants } from "../../constants";
import {
    catchApiRequestError,
    convertObjToFormData,
    saveDataToLocalStorage
} from "../../helpers/";


const updateWalletState = ( payload = {} ) => {
    return {
        type: userConstants.UPDATE_WALLET_STATE,
        payload
    };
};


export const savePaymentDetails = ( details, callback = {}, state = {} ) => {
    return ( dispatch ) => {
        try {
            const { userId: user_id, amount, txref } = details;
            return fetch( paymentsAPI.SAVE_PAYMENT_ENDPOINT, {
                ...globalConstants.POST_HEADER,
                body: convertObjToFormData( {
                    user_id,
                    amount,
                    txref
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
                            let newState = {
                                ...state,
                                balance: data
                            }
                            dispatch( updateWalletState( newState ) );
                            saveDataToLocalStorage( {
                                title: "user",
                                newState
                            } );
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
    }
};