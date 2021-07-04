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

