const API_HOST = "http://192.168.43.148/2021/bikewa/api";

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
    }

}
export const bikesAPI = {
    ALL_BIKES_ENDPOINT: `${API_HOST}/bikes/view`,
    BIKE_DETAILS_ENDPOINT: ( bikeId ) => {
        return `${API_HOST}/bikes/view/${bikeId}`
    }
}