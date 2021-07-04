const API_HOST = "http://192.168.43.148/2021/bikewa/api";

export const FLUTTERWAVE_API_KEY =
    "FLWPUBK_TEST-0f9fd4e3dbd0809a6c3b8cdf518650a1-X";

export const userAPI = {
    LOGIN_ENDPOINT: `${API_HOST}/users/login`,
    SIGNUP_ENDPOINT: `${API_HOST}/users/register`
};

export const bookingsAPI = {
    USER_BOOKINGS_ENDPOINT: ( userId ) => {
        return `${API_HOST}/users/bookings/${userId}`
    },
    BOOK_RIDE_ENDPOINT: `${API_HOST}/users/bookings`
}

export const paymentsAPI = {
    PAYMENT_HISTORY_ENDPOINT: ( userId ) => {
        return `${API_HOST}/users/payments/${userId}`
    },
    SAVE_PAYMENT_ENDPOINT: `${API_HOST}/users/payments`

}
export const bikesAPI = {
    ALL_BIKES_ENDPOINT: `${API_HOST}/bikes/view`,
    BIKE_DETAILS_ENDPOINT: ( bikeId ) => {
        return `${API_HOST}/bikes/view/${bikeId}`
    }
}