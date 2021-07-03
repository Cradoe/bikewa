import { StatusBar, StyleSheet } from "react-native";
import { globalConstants } from "../constants/global";

export const globalStyles = StyleSheet.create( {
    root: {
        // marginTop: StatusBar.currentHeight || 0,
        flex: 1
    },
    bgPrimary: {
        backgroundColor: globalConstants.PRIMARY_COLOR
    },
    bgSecondary: {
        backgroundColor: globalConstants.SECONDARY_COLOR
    },
    bgWhite: {
        backgroundColor: "#fff"
    },
    bgLight: {
        backgroundColor: "#F5F5F5"
    },
    borderPrimary: {
        borderColor: globalConstants.PRIMARY_COLOR
    },
    borderSecondary: {
        borderColor: globalConstants.SECONDARY_COLOR
    },
    border1: {
        borderWidth: 1
    },
    textPrimary: {
        color: globalConstants.PRIMARY_COLOR
    },
    textSecondary: {
        color: globalConstants.SECONDARY_COLOR
    },
    textDanger: {
        color: "#FF0000"
    },
    textSuccess: {
        color: "green"
    },
    textGray: {
        color: "#3a3a3a"
    },
    errorBorder: {
        borderColor: "#FF0000",
        borderWidth: 1
    },
    textGray: {
        color: "#838383"
    },
    textSmall: {
        fontSize: 11
    },
    bgTransparent: {
        backgroundColor: "transparent"
    },
    textWhite: {
        color: "#fff"
    },
    textJustify: {
        textAlign: "justify"
    },
    textCenter: {
        textAlign: "center"
    },
    textBold: {
        fontWeight: "bold"
    },
    textCenter: {
        textAlign: "center"
    },
    justifyCenter: {
        justifyContent: "center"
    },
    flexCenterCenter: {
        justifyContent: "center",
        alignItems: "center"
    },
    justifySpaceAround: {
        justifyContent: "space-around"
    },
    justifySpaceBetween: {
        justifyContent: "space-between"
    },
    alignCenter: {
        alignItems: "center"
    },
    centerCenter: {
        justifyContent: "center",
        alignItems: "center"
    },
    flexRow: {
        flexDirection: "row"
    },
    roundBorder: {
        borderRadius: 50
    },
    flex: {
        flex: 1
    },
    widthBlock: {
        width: "100%"
    },
    containerPadding: {
        paddingHorizontal: 20
    },
    errorText: {
        color: "crimson",
        fontWeight: "bold",
        marginTop: 8,
        marginBottom: 6
    },
    fullHeight: {
        height: "100%"
    },
    mb10: {
        marginBottom: 10
    },
    mb20: {
        marginBottom: 20
    },
    m40: {
        margin: 40
    },
    mt40: {
        marginTop: 40
    },
    mt20: {
        marginTop: 20
    },
    mt30: {
        marginTop: 30
    },
    mt90: {
        marginTop: 90
    },
    mr20: {
        marginRight: 20
    },
    pH40: {
        paddingHorizontal: 40
    },
    btn: {
        borderRadius: 7
    },
    fontRegular: {
        fontFamily: "montserrat_regular"
    },
    fontMedium: {
        fontFamily: "montserrat_medium"
    },
    fontMediumItalic: {
        fontFamily: "montserrat_medium_italic"
    },
    fontAltBold: {
        fontFamily: "montserrat_alternate_bold"
    },
    noBorder: {
        borderWidth: 0
    },
    borderDanger: {
        borderWidth: 1,
        borderColor: "#ff0000"
    },
    formGroup: {
        marginVertical: 10
    },
    bgDanger: {
        backgroundColor: "#ff0000"
    },
    textDark: {
        color: "#000000"
    },
    thumbnail: {
        height: 100,
        width: 100
    },
    screenBg: {
        backgroundColor: globalConstants.SCREEN_BG
    },
    shadowBox: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5
    },
    formControl: {
        borderColor: globalConstants.PRIMARY_COLOR
    },
    fullWidth: {
        width: '100%',
        justifyContent: "center",
        alignItems: "center"
    }
} );