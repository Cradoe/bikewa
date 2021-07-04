import React, { useState } from "react";
import {
    Layout,
    Input,
    Text,
    Spinner,
    Button,
    Icon
} from "@ui-kitten/components";
import { View, StyleSheet, ScrollView } from "react-native";
import { PayWithFlutterwave } from "flutterwave-react-native";
import { generatePaymentReference } from "../../helpers/functions";
import { FLUTTERWAVE_API_KEY, globalConstants } from "../../constants";
import { connect, useDispatch } from "react-redux";

import { globalStyles } from "../../shared/globalStyles";
import { savePaymentDetails } from "../../actions/payments/savePaymentDetails";

const FundWallet = ( { navigation, user } ) => {
    const [ topUpAmount, setTopUpAmount ] = useState( '0' ),
        [ isProcessing, setIsProcessing ] = useState( false ),
        [ hasProcessedPayment, setHasProcessedPayment ] = useState( false ),
        [ responseMessage, setResponseMessage ] = useState( null ),
        handlePaymentResponse = ( data ) => {
            if ( data.status == "successful" ) {
                setIsProcessing( true );

                const topUpPaymentDetails = {
                    amount: topUpAmount,
                    userId: user.id,
                    txref: data.tx_ref
                };
                savePaymentDetailsToServer( topUpPaymentDetails );
            } else {
                setResponseMessage( "Opps! Unable to process your payment." );
            }
        },
        successCallback = ( walletBalance ) => {
            setIsProcessing( false );
            setHasProcessedPayment( true );
        },
        errorCallback = ( error ) => {
            setResponseMessage( error );
            setIsProcessing( false );
        },
        callback = {
            success: successCallback,
            error: errorCallback
        },
        dispatch = useDispatch(),
        savePaymentDetailsToServer = ( topUpPaymentDetails ) => {
            dispatch( savePaymentDetails( topUpPaymentDetails, callback, user ) );
        }

    return (
        <Layout style={[ globalStyles.fullHeight, globalStyles.bgSecondary ]}>
            <ScrollView>
                <View
                    style={[
                        globalStyles.containerPadding,
                        globalStyles.mt30,
                        {
                            justifyContent: "center",
                            paddingVertical: 30
                        }
                    ]}
                >{responseMessage ? <Text style={globalStyles.textDanger}>{responseMessage}</Text> : null}
                    {isProcessing ? (
                        <View style={[ globalStyles.centerCenter ]}>
                            <Text
                                style={[
                                    globalStyles.textBold,
                                    globalStyles.mb10,
                                    styles.title,
                                    globalStyles.textWhite,
                                    globalStyles.textCenter
                                ]}
                            >
                                Bravo! Moving funds into your wallet.
                            </Text>
                            <Spinner status="success" />
                        </View>
                    ) : hasProcessedPayment ? (
                        <View style={[ globalStyles.centerCenter ]}>
                            <Button appearance="ghost" style={styles.button}>
                                <Icon
                                    fill={globalConstants.SECONDARY_COLOR}
                                    style={styles.checkmark}
                                    name="checkmark-square-outline"
                                />
                            </Button>
                            <Text
                                style={[
                                    globalStyles.textBold,
                                    globalStyles.mb10,
                                    styles.title,
                                    globalStyles.textWhite,
                                    globalStyles.textCenter
                                ]}
                            >
                                Weldone, Your wallet has been funded!
                            </Text>
                            <Button
                                style={[ globalStyles.mt40 ]}
                                status="warning"
                                onPress={() => {
                                    navigation.navigate( "DashboardScreen" );
                                }}
                            >
                                <Text>Okay</Text>
                            </Button>
                        </View>
                    ) : (
                        <View>
                            <Text
                                style={[
                                    globalStyles.textBold,
                                    globalStyles.mb10,
                                    styles.title,
                                    globalStyles.textWhite,
                                    globalStyles.textCenter
                                ]}
                            >
                                It's Time To Make The Move!
                            </Text>
                            <View style={[ globalStyles.formGroup, globalStyles.mt30 ]}>
                                <Text
                                    style={[
                                        globalStyles.mb10,
                                        styles.label,
                                        globalStyles.textWhite
                                    ]}
                                >
                                    How Much Would You Like Top Up?
                                </Text>
                                <Input
                                    placeholder="0"
                                    value={topUpAmount}
                                    keyboardType="number-pad"
                                    onChangeText={( e ) => setTopUpAmount( e )}
                                    style={[ globalStyles.formControl ]}
                                />

                            </View>
                            <PayWithFlutterwave
                                onRedirect={handlePaymentResponse}
                                options={{
                                    tx_ref: generatePaymentReference(),
                                    authorization: FLUTTERWAVE_API_KEY,
                                    customer: {
                                        email: 'me@ismailobadimu.com' // dummy data
                                    },
                                    amount: Number( topUpAmount ),
                                    currency: "NGN",
                                    payment_options: "card"
                                }}
                            />
                        </View>
                    )}
                </View>
            </ScrollView>
        </Layout>
    );
};


const mapStateToProps = ( state, ownProps ) => {
    return {
        user: state.user
    };
};


const FundWalletScreen = connect( mapStateToProps )( FundWallet );
export default FundWalletScreen;

const styles = StyleSheet.create( {
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
    },
    title: {
        fontSize: 30
    },
    label: {
        fontSize: 15
    },
    controlContainer: {
        borderRadius: 4,
        padding: 12
    },
    checkmark: {
        width: 40,
        height: 40
    }
} );

