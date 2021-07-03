const API_HOST = "http://192.168.43.148/2021/bika/api";

export const userAPI = {
    LOGIN_ENDPOINT: `${API_HOST}/users/login`,
    SIGNUP_ENDPOINT: `${API_HOST}/users/register`
};

export const bookingsAPI = {
    BOOK_RIDE_ENDPOINT: ( userId ) => {
        return `${API_HOST}/users/bookings/${userId}`
    },
    USER_BOOKINGS_ENDPOINT: `${API_HOST}/users/bookings`

}

export const bikesAPI = {
    ALL_BIKES_ENDPOINT: `${API_HOST}/bikes/view`,
    BIKE_DETAILS_ENDPOINT: ( bikeId ) => {
        return `${API_HOST}/bikes/view/${bikeId}`
    }
}