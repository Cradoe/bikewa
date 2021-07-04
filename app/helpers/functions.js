export const numberWithCommas = ( e ) => {
    if ( !e ) return 0;
    return e.toString().replace( /\B(?=(\d{3})+(?!\d))/g, "," );
};

export const convertObjToFormData = ( object ) => {
    const formData = new FormData();
    for ( const key in object ) {
        if ( Object.hasOwnProperty.call( object, key ) ) {
            formData.append( key, object[ key ] );
        }
    }
    return formData;
};

export const generatePaymentReference = () => {
    const e = new Date(); var t = "BW" + e.getFullYear().toString() + e.getMonth().toString() + e.getMilliseconds().toString() + Math.floor( getRandomNumber() ).toString()
    return t;
}

export const getRandomNumber = ( e = 0, t = 100 ) => {
    return Math.random() * ( t - e ) + e;
}