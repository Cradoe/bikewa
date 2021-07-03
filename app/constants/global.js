import { Dimensions } from "react-native";

export const globalConstants = {
    PRIMARY_COLOR: "#FFBD0B",
    SECONDARY_COLOR: "#0A1089",
    SCREEN_BG: "#fff",
    SCREEN_HEIGHT: Dimensions.get( "screen" ).height,
    SCREEN_WIDTH: Dimensions.get( "screen" ).width,
    USER: "user",
    POST_HEADER: {
        method: "POST"
    },
    GET_HEADER: {
        method: "GET"
    }
};