import React, { useState, useEffect } from "react";
import { Text, Layout, Button, Spinner, Card, Icon } from "@ui-kitten/components";
import { connect } from "react-redux";
import {
    Image,
    StyleSheet,
    View,
    ScrollView,
    SafeAreaView
} from "react-native";
import { globalStyles } from "../../shared/globalStyles";
import { globalConstants } from "../../constants";
import { numberWithCommas } from "../../helpers/functions";
import { paymentHistory } from "../../actions/payments";

const TopUps = ( { user } ) => {

    const [ isFetchingData, setIsFetchingData ] = useState( true ),
        [ responseMessage, setResponseMessage ] = useState( null ),
        [ payments, setPayments ] = useState( [] ),
        successCallback = ( data ) => {
            setPayments( data );
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



    return (
        <SafeAreaView>
            <Layout style={[ globalStyles.screenBg, globalStyles.containerPadding, { paddingBottom: 30 } ]}>

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
                        {payments.length > 0 ? ( payments.map( ( payment, index ) => (
                            <Card style={globalStyles.mt20} key={index}>
                                <Text style={globalStyles.textSmall}>Date: {payment.created_at}</Text>
                                <Text style={globalStyles.textSmall}>Amount: &#8358; {numberWithCommas( payment.amount )}</Text>
                                <Text style={globalStyles.textSmall}>Payment Code: #{payment.txref}</Text>
                            </Card>
                        ) ) ) :
                            <Card style={[ styles.noResultCard, globalStyles.mt40 ]}>
                                <Icon name="alert-triangle-outline" styles={styles.icon} fill={globalConstants.SECONDARY_COLOR} />
                                <Text style={[ globalStyles.textGray, styles.title ]}>
                                    Your Have not made any payment yet
                                </Text>
                                <Button style={[ globalStyles.btn ]} appearance="ghost" onPress={fetchDataFromServer}>Top up Account</Button>
                            </Card>
                        }

                    </ScrollView>
                }
            </Layout>

        </SafeAreaView>
    );
};


const mapStateToProps = ( state, ownProps ) => {
    return {
        user: state.user
    };
};

const TopUpsScreeen = connect( mapStateToProps )( TopUps );
export default TopUpsScreeen;


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
        width: 32,
        height: 32,
    },
    heading: {
        fontSize: 15
    },
    title: {
        paddingHorizontal: 20
    },
    noResultCard: {
        width: ( 85 / 100 ) * globalConstants.SCREEN_WIDTH,
        height: ( 45 / 100 ) * globalConstants.SCREEN_HEIGHT
    },
    noResultBike: {
        height: 100,
        width: 150
    }
} );
