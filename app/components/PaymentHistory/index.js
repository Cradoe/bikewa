import React, { useState, useEffect } from "react";
import { Text, Icon, Button, Spinner, Card } from "@ui-kitten/components";
import { connect } from "react-redux";
import {
    Image,
    StyleSheet,
    View,
    ScrollView
} from "react-native";
import { globalStyles } from "../../shared/globalStyles";
import { globalConstants } from "../../constants";
import { numberWithCommas } from "../../helpers/functions";
import { paymentHistory } from "../../actions/payments";

const PaymentHistoryComp = ( { navigation, user } ) => {

    const [ isFetchingData, setIsFetchingData ] = useState( true ),
        [ responseMessage, setResponseMessage ] = useState( null ),
        [ payments, setPayments ] = useState( [] ),
        successCallback = ( data ) => {

            setPayments( data.slice( 0, 2 ) );
            setIsFetchingData( false );
        },
        errorCallback = ( error ) => {
            setResponseMessage( error );
            setIsFetchingData( false );
        },
        emptyCallback = () => {
            setIsFetchingData( false );
        },
        callback = {
            success: successCallback,
            error: errorCallback,
            empty: emptyCallback
        },
        fetchDataFromServer = () => {
            setResponseMessage( null );
            setIsFetchingData( true );
            paymentHistory( user.id, callback );
        }

    useEffect( () => {
        if ( payments.length === 0 ) {
            fetchDataFromServer()
        }
    }, [] );

    const arrowIcon = ( props ) => (
        <Icon {...props} name="arrowhead-right-outline" />
    );

    return (
        <View>
            <View style={[ globalStyles.flexRow, globalStyles.justifySpaceBetween, globalStyles.mt20 ]}>
                <Text
                    style={[
                        globalStyles.fontAltBold,
                        globalStyles.textBold,
                        styles.heading
                    ]}
                >
                    Last Top up
                </Text>
                <Button accessoryRight={arrowIcon} size="tiny" appearance="ghost" onPress={() => navigation.navigate( "Topups", { name: "My Topup History" } )}>See More</Button>
            </View>


            {responseMessage ? <Text style={globalStyles.textDanger}>{responseMessage}</Text> : null}



            {isFetchingData ?
                ( <Card style={[ styles.itemBox, globalStyles.centerCenter, styles.loaderCard ]} level="2">
                    <Spinner status="primary" size="medium" />
                </Card> )
                :
                <ScrollView
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                >
                    {payments.length > 0 ? ( payments.map( ( payment, index ) => {
                        return (
                            <Card style={globalStyles.mt20} key={index}>
                                <Text style={globalStyles.textSmall}>Date: {payment.created_at}</Text>
                                <Text style={globalStyles.textSmall}>Amount: &#8358; {numberWithCommas( payment.amount )}</Text>
                                <Text style={globalStyles.textSmall}>Payment Code: #{payment.txref}</Text>
                            </Card>
                        )
                    } ) ) :
                        <Card style={[ styles.noResultCard, globalStyles.mt40 ]}>
                            <Text style={[ globalStyles.textGray, styles.title, globalStyles.textCenter ]}>
                                Your Have not made any payment yet
                            </Text>
                            <Button style={[ globalStyles.btn ]} appearance="ghost" onPress={() => navigation.navigate( "FundWallet" )}>Top up Account</Button>
                        </Card>
                    }

                </ScrollView>
            }
        </View>
    );
};

const mapStateToProps = ( state, ownProps ) => {
    return {
        user: state.user
    };
};


export const PaymentHistory = connect( mapStateToProps )( PaymentHistoryComp );



const styles = StyleSheet.create( {
    loaderCard: {
        borderRadius: 5,
        width: ( 90 / 100 ) * globalConstants.SCREEN_WIDTH,
        marginRight: 20,
        height: ( 27 / 100 ) * globalConstants.SCREEN_HEIGHT,
        marginVertical: 10
    },
    itemBox: {
        borderRadius: 5,
        width: ( 75 / 100 ) * globalConstants.SCREEN_WIDTH,
        marginRight: 20,
        marginVertical: 10,
    },
    thumb: {
        width: "100%",
        height: 200
    },
    caption: {
        padding: 10
    },
    icon: {
        height: 10,
        width: 10
    },
    heading: {
        fontSize: 15
    },
    title: {
        paddingHorizontal: 20
    },
    noResultCard: {
        width: ( 85 / 100 ) * globalConstants.SCREEN_WIDTH
    },
    noResultBike: {
        height: 100,
        width: 150
    }
} );
